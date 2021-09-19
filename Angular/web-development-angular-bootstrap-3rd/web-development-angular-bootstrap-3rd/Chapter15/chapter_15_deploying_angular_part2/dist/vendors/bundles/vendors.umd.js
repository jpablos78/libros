(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('vendors', ['exports', '@angular/core'], factory) :
    (factory((global.vendors = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VendorsService = /** @class */ (function () {
        function VendorsService() {
        }
        VendorsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        VendorsService.ctorParameters = function () { return []; };
        /** @nocollapse */ VendorsService.ngInjectableDef = i0.defineInjectable({ factory: function VendorsService_Factory() { return new VendorsService(); }, token: VendorsService, providedIn: "root" });
        return VendorsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VendorsComponent = /** @class */ (function () {
        function VendorsComponent() {
        }
        /**
         * @return {?}
         */
        VendorsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        VendorsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'my-vendors',
                        template: "\n    <p>\n      vendors works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        VendorsComponent.ctorParameters = function () { return []; };
        return VendorsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VendorsModule = /** @class */ (function () {
        function VendorsModule() {
        }
        VendorsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [VendorsComponent],
                        imports: [],
                        exports: [VendorsComponent]
                    },] }
        ];
        return VendorsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.VendorsService = VendorsService;
    exports.VendorsComponent = VendorsComponent;
    exports.VendorsModule = VendorsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=vendors.umd.js.map