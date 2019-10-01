(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Tab One\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-img src=\"/assets/shapes.svg\"></ion-img>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\r\n      <ion-card-title>Welcome to Ionic</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\r\n      <ion-button margin-top (click)=\"signIn()\" *ngIf=\"!authenticated\">Login</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"authenticated\">\r\n    <ion-card-header>\r\n      <ion-button (click)=\"getUserInfo()\">Get User Details</ion-button>\r\n      <ion-button (click)=\"signOut()\">Sign Out</ion-button>\r\n    </ion-card-header>\r\n\r\n    <ion-card *ngIf=\"userInfo\">\r\n      <ion-card-header>\r\n        User Info\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        {{userInfo | json}}\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card *ngIf=\"action\">\r\n      <ion-card-header>\r\n        Action Data\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        {{action | json}}\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-card>\r\n  <ion-list lines=\"none\">\r\n    <ion-list-header>\r\n      <ion-label>Resources</ion-label>\r\n    </ion-list-header>\r\n    <ion-item href=\"https://ionicframework.com/docs/\">\r\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\r\n      <ion-label>Ionic Documentation</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\r\n      <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\r\n      <ion-label>Scaffold Out Your App</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\r\n      <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\r\n      <ion-label>Change Your App Layout</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\r\n      <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\r\n      <ion-label>Theme Your App</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXGRtaWNob25cXENTSTQ5OTktQ2Fwc3RvbmVcXGNhcHN0b25lL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-appauth */ "./node_modules/ionic-appauth/lib/index.js");
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_4__);





let Tab1Page = class Tab1Page {
    constructor(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.authObservable.subscribe((action) => {
            this.action = action;
            if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_4__["AuthActions"].SignInSuccess || action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_4__["AuthActions"].AuthSignInSuccess) {
                this.authenticated = true;
            }
            else if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_4__["AuthActions"].SignOutSuccess) {
                this.authenticated = false;
            }
        });
    }
    signOut() {
        this.authService.signOut();
    }
    signIn() {
        this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
    }
    getUserInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userInfo = yield this.authService.getUserInfo();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map