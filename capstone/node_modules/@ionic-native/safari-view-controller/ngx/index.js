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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var SafariViewController = /** @class */ (function (_super) {
    __extends(SafariViewController, _super);
    function SafariViewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariViewController.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    SafariViewController.prototype.show = function (options) { return cordova(this, "show", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SafariViewController.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    SafariViewController.prototype.connectToService = function () { return cordova(this, "connectToService", {}, arguments); };
    SafariViewController.prototype.warmUp = function () { return cordova(this, "warmUp", {}, arguments); };
    SafariViewController.prototype.mayLaunchUrl = function (url) { return cordova(this, "mayLaunchUrl", {}, arguments); };
    SafariViewController.pluginName = "SafariViewController";
    SafariViewController.plugin = "cordova-plugin-safariviewcontroller";
    SafariViewController.pluginRef = "SafariViewController";
    SafariViewController.repo = "https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller";
    SafariViewController.platforms = ["Android", "iOS"];
    SafariViewController = __decorate([
        Injectable()
    ], SafariViewController);
    return SafariViewController;
}(IonicNativePlugin));
export { SafariViewController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NhZmFyaS12aWV3LWNvbnRyb2xsZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFtRVEsd0NBQWlCOzs7O0lBTXpELDBDQUFXO0lBY1gsbUNBQUksYUFBQyxPQUFxQztJQVExQyxtQ0FBSTtJQVNKLCtDQUFnQjtJQVNoQixxQ0FBTTtJQVVOLDJDQUFZLGFBQUMsR0FBVzs7Ozs7O0lBeERiLG9CQUFvQjtRQURoQyxVQUFVLEVBQUU7T0FDQSxvQkFBb0I7K0JBckVqQztFQXFFMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9ucyB7XG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgYmFyQ29sb3I/OiBzdHJpbmc7XG4gIGNvbnRyb2xUaW50Q29sb3I/OiBzdHJpbmc7XG4gIGVudGVyUmVhZGVyTW9kZUlmQXZhaWxhYmxlPzogYm9vbGVhbjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgc2hvd0RlZmF1bHRTaGFyZU1lbnVJdGVtPzogYm9vbGVhbjtcbiAgdGludENvbG9yPzogc3RyaW5nO1xuICB0b29sYmFyQ29sb3I/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb24/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEZvciBkaXNwbGF5aW5nIHJlYWQtb25seSB3ZWIgY29udGVudC5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNhZmFyaXZpZXdjb250cm9sbGVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NhZmFyaSBWaWV3IENvbnRyb2xsZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1zYWZhcml2aWV3Y29udHJvbGxlcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTYWZhcmlWaWV3Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2FmYXJpLXZpZXctY29udHJvbGxlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FmYXJpVmlld0NvbnRyb2xsZXI6IFNhZmFyaVZpZXdDb250cm9sbGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNhZmFyaVZpZXdDb250cm9sbGVyLmlzQXZhaWxhYmxlKClcbiAqICAgLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xuICogICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICpcbiAqICAgICAgICAgdGhpcy5zYWZhcmlWaWV3Q29udHJvbGxlci5zaG93KHtcbiAqICAgICAgICAgICB1cmw6ICdodHRwOi8vaW9uaWMuaW8nLFxuICogICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gKiAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICogICAgICAgICAgIHRyYW5zaXRpb246ICdjdXJsJyxcbiAqICAgICAgICAgICBlbnRlclJlYWRlck1vZGVJZkF2YWlsYWJsZTogdHJ1ZSxcbiAqICAgICAgICAgICB0aW50Q29sb3I6ICcjZmYwMDAwJ1xuICogICAgICAgICB9KVxuICogICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xuICogICAgICAgICAgICAgaWYocmVzdWx0LmV2ZW50ID09PSAnb3BlbmVkJykgY29uc29sZS5sb2coJ09wZW5lZCcpO1xuICogICAgICAgICAgICAgZWxzZSBpZihyZXN1bHQuZXZlbnQgPT09ICdsb2FkZWQnKSBjb25zb2xlLmxvZygnTG9hZGVkJyk7XG4gKiAgICAgICAgICAgICBlbHNlIGlmKHJlc3VsdC5ldmVudCA9PT0gJ2Nsb3NlZCcpIGNvbnNvbGUubG9nKCdDbG9zZWQnKTtcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICogICAgICAgICApO1xuICpcbiAqICAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgIC8vIHVzZSBmYWxsYmFjayBicm93c2VyLCBleGFtcGxlIEluQXBwQnJvd3NlclxuICogICAgICAgfVxuICogICAgIH1cbiAqICAgKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NhZmFyaVZpZXdDb250cm9sbGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2FmYXJpdmlld2NvbnRyb2xsZXInLFxuICBwbHVnaW5SZWY6ICdTYWZhcmlWaWV3Q29udHJvbGxlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tc2FmYXJpdmlld2NvbnRyb2xsZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYWZhcmlWaWV3Q29udHJvbGxlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBTYWZhcmlWaWV3Q29udHJvbGxlciBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnN9IG9wdGlvbmFsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBzaG93KG9wdGlvbnM/OiBTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhpZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gY29ubmVjdCB0byB0aGUgIENocm9tZSdzIGN1c3RvbSB0YWJzIHNlcnZpY2UuIHlvdSBtdXN0IGNhbGwgdGhpcyBtZXRob2QgYmVmb3JlIGNhbGxpbmcgYW55IG9mIHRoZSBvdGhlciBtZXRob2RzIGxpc3RlZCBiZWxvdy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdFRvU2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgbWV0aG9kIHdoZW5ldmVyIHRoZXJlJ3MgYSBjaGFuY2UgdGhlIHVzZXIgd2lsbCBvcGVuIGFuIGV4dGVybmFsIHVybC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd2FybVVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBldmVuIGJldHRlciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24sIGNhbGwgdGhpcyBtZXRob2RzIGlmIHRoZXJlJ3MgbW9yZSB0aGFuIGEgNTAlIGNoYW5jZSB0aGUgdXNlciB3aWxsIG9wZW4gYSBjZXJ0YWluIFVSTC5cbiAgICogQHBhcmFtIHVybHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1heUxhdW5jaFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=