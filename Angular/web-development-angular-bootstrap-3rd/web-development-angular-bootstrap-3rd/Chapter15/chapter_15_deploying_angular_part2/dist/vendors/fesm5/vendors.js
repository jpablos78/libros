import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VendorsService = /** @class */ (function () {
    function VendorsService() {
    }
    VendorsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    VendorsService.ctorParameters = function () { return []; };
    /** @nocollapse */ VendorsService.ngInjectableDef = defineInjectable({ factory: function VendorsService_Factory() { return new VendorsService(); }, token: VendorsService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { VendorsService, VendorsComponent, VendorsModule };

//# sourceMappingURL=vendors.js.map