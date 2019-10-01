(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-07baf5d6-js"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/status-tap-07baf5d6.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/status-tap-07baf5d6.js ***!
  \**********************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _core_c02a05e9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-c02a05e9.js */ "./node_modules/@ionic/core/dist/esm-es5/core-c02a05e9.js");
/* harmony import */ var _config_503c2549_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-503c2549.js */ "./node_modules/@ionic/core/dist/esm-es5/config-503c2549.js");


var startStatusTap = function () {
    var win = window;
    win.addEventListener('statusTap', function () {
        Object(_core_c02a05e9_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
            var width = win.innerWidth;
            var height = win.innerHeight;
            var el = document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            var contentEl = el.closest('ion-content');
            if (contentEl) {
                contentEl.componentOnReady().then(function () {
                    Object(_core_c02a05e9_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () { return contentEl.scrollToTop(300); });
                });
            }
        });
    });
};



/***/ })

}]);
//# sourceMappingURL=status-tap-07baf5d6-js-es5.js.map