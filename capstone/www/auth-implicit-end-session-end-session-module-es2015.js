(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-implicit-end-session-end-session-module"],{

/***/ "./src/app/auth/implicit/end-session/end-session.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/implicit/end-session/end-session.module.ts ***!
  \*****************************************************************/
/*! exports provided: EndSessionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndSessionPageModule", function() { return EndSessionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _end_session_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./end-session.page */ "./src/app/auth/implicit/end-session/end-session.page.ts");







const routes = [
    {
        path: '',
        component: _end_session_page__WEBPACK_IMPORTED_MODULE_6__["EndSessionPage"]
    }
];
let EndSessionPageModule = class EndSessionPageModule {
};
EndSessionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_end_session_page__WEBPACK_IMPORTED_MODULE_6__["EndSessionPage"]]
    })
], EndSessionPageModule);



/***/ }),

/***/ "./src/app/auth/implicit/end-session/end-session.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/implicit/end-session/end-session.page.ts ***!
  \***************************************************************/
/*! exports provided: EndSessionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndSessionPage", function() { return EndSessionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth/auth.service.ts");




let EndSessionPage = class EndSessionPage {
    constructor(authService, navCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.authService.EndSessionCallBack();
        this.navCtrl.navigateRoot('login');
    }
};
EndSessionPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
EndSessionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '<p style="margin-left: 10px">Signing out...</p>'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], EndSessionPage);



/***/ })

}]);
//# sourceMappingURL=auth-implicit-end-session-end-session-module-es2015.js.map