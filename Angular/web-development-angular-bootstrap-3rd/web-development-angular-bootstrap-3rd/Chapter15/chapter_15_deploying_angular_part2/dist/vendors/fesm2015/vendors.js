import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VendorsService {
    constructor() { }
}
VendorsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
VendorsService.ctorParameters = () => [];
/** @nocollapse */ VendorsService.ngInjectableDef = defineInjectable({ factory: function VendorsService_Factory() { return new VendorsService(); }, token: VendorsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VendorsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
VendorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-vendors',
                template: `
    <p>
      vendors works!
    </p>
  `
            }] }
];
/** @nocollapse */
VendorsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VendorsModule {
}
VendorsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [VendorsComponent],
                imports: [],
                exports: [VendorsComponent]
            },] }
];

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