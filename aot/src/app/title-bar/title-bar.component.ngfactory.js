/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './title-bar.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../../../../src/app/title-bar/title-bar.component';
var styles_TitleBarComponent = [i0.styles];
export var RenderType_TitleBarComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_TitleBarComponent, data: {} });
function View_TitleBarComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'window-logo']], null, null, null, null, null)),
        (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt', 'logo']], [[8, 'src',
                4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _co.logo, '');
        _ck(_v, 1, 0, currVal_0);
    });
}
export function View_TitleBarComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_TitleBarComponent_1)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class', 'window-title']], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵeld(0, null, null, 10, 'div', [['class', 'window-controls']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'window-btn min']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.minimize($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['_'])), (_l()(),
            i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'window-btn max']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.maximize($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['▭'])), (_l()(),
            i1.ɵted(null, ['  \n  '])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'window-btn close']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.close($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['X'])), (_l()(),
            i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.logo;
        _ck(_v, 1, 0, currVal_0);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.title;
        _ck(_v, 4, 0, currVal_1);
    });
}
export function View_TitleBarComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'title-bar', [], null, null, null, View_TitleBarComponent_0, RenderType_TitleBarComponent)),
        i1.ɵdid(49152, null, 0, i3.TitleBarComponent, [], null, null)], null, null);
}
export var TitleBarComponentNgFactory = i1.ɵccf('title-bar', i3.TitleBarComponent, View_TitleBarComponent_Host_0, { title: 'title', logo: 'logo' }, { onMaximize: 'onMaximize', onMinimize: 'onMinimize', onClose: 'onClose' }, []);
//# sourceMappingURL=title-bar.component.ngfactory.js.map