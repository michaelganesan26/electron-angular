const {app, BrowserWindow, protocol} = require('electron')
const path = require('path')
const url = require('url')
const windowStateKeeper = require('electron-window-state');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {

  // protocol.registerFileProtocol('local', (request, callback) => {
  //   const url = request.url.substr(8)
  //   callback({path: path.normalize(`${__dirname}/${url}`)})
  // }, (error) => {
  //   if (error) console.error('Failed to register protocol')
  // })
  
    let mainWindowState = windowStateKeeper({
      defaultWidth: 1024,
      defaultHeight: 768
    });
    // Create the browser window.
    win = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        minWidth: 360,
        minHeight: 360,
        backgroundColor: '#000000',
        frame: false,
    })
    //win.setMenuBarVisibility(false);
    
    mainWindowState.manage(win);

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    win.webContents.openDevTools()
    require('devtron').install();

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.