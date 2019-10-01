"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Browser = /** @class */ (function () {
    function Browser() {
        this.onCloseFunction = function () { };
    }
    Browser.prototype.addCloseBrowserEvent = function (closeBrowserEvent) {
        this.onCloseFunction = closeBrowserEvent;
    };
    return Browser;
}());
exports.Browser = Browser;
var DefaultBrowser = /** @class */ (function (_super) {
    __extends(DefaultBrowser, _super);
    function DefaultBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultBrowser.prototype.showWindow = function (url) {
        window.open(url, "_self");
        return;
    };
    DefaultBrowser.prototype.closeWindow = function () {
    };
    return DefaultBrowser;
}(Browser));
exports.DefaultBrowser = DefaultBrowser;
