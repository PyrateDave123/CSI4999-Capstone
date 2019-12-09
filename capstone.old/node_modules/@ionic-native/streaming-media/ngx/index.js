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
var StreamingMedia = /** @class */ (function (_super) {
    __extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMedia.prototype.playVideo = function (videoUrl, options) { return cordova(this, "playVideo", { "sync": true }, arguments); };
    StreamingMedia.prototype.playAudio = function (audioUrl, options) { return cordova(this, "playAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.stopAudio = function () { return cordova(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.pauseAudio = function () { return cordova(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.prototype.resumeAudio = function () { return cordova(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.pluginName = "StreamingMedia";
    StreamingMedia.plugin = "cordova-plugin-streaming-media";
    StreamingMedia.pluginRef = "plugins.streamingMedia";
    StreamingMedia.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMedia.platforms = ["Amazon Fire OS", "Android", "iOS"];
    StreamingMedia = __decorate([
        Injectable()
    ], StreamingMedia);
    return StreamingMedia;
}(IonicNativePlugin));
export { StreamingMedia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0cmVhbWluZy1tZWRpYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRnBDLGtDQUFpQjs7OztJQU9uRCxrQ0FBUyxhQUFDLFFBQWdCLEVBQUUsT0FBK0I7SUFRM0Qsa0NBQVMsYUFBQyxRQUFnQixFQUFFLE9BQStCO0lBTTNELGtDQUFTO0lBTVQsbUNBQVU7SUFNVixvQ0FBVzs7Ozs7O0lBakNBLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFsRjNCO0VBa0ZvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIE9iamVjdCBvZiBvcHRpb25zIHRvIHBhc3MgaW50byB0aGUgcGxheVZpZGVvIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1pbmdWaWRlb09wdGlvbnMge1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgc3VjY2VzcyBwbGF5aW5nIGF1ZGlvLiAqL1xuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIGVycm9yIHBsYXlpbmcgdmlkZW8uICovXG4gIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEZvcmNlIG9uZSBvcmllbnRhdGlvbiBmb3IgcGxheWluZyB2aWRlby4gKi9cbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGNsb3NlIGFmdGVyIGl0J3Mgb3Zlci4gRGVmYXVsdHMgdG8gdHJ1ZS4gKi9cbiAgc2hvdWxkQXV0b0Nsb3NlPzogYm9vbGVhbjtcbiAgLyoqIFNob3VsZCB0aGUgdmlkZW8gaGF2ZSBjb250cm9scy4gRGVmYXVsdHMgdG8gdHJ1ZS4gQW5kcm9pZCBvbmx5LiAqL1xuICBjb250cm9scz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogT2JqZWN0IG9mIG9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBwbGF5QXVkaW8gbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyB7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhdWRpbyBwbGF5ZXIuICovXG4gIGJnQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGltYWdlIGZvciBhdWRpbyBwbGF5ZXIuICovXG4gIGJnSW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIHNjYWxlIGZvciBhdWRpbyBwbGF5ZXIuXG4gICAqIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAqIGZpdFxuICAgKiBzdHJldGNoXG4gICAqIGFzcGVjdFN0cmV0Y2guXG4gICAqL1xuICBiZ0ltYWdlU2NhbGU/OiBzdHJpbmc7XG4gIC8qKiBTdGFydCBhdWRpbyBwbGF5ZXIgaW4gZnVsbCBzY3JlZW4uIGlPUyBvbmx5LiAqL1xuICBpbml0RnVsbHNjcmVlbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgc2NyZWVuIGxpdCBhbmQgc3RvcHMgaXQgZnJvbSBsb2NraW5nXG4gICAqIHdoaWxlIGF1ZGlvIGlzIHBsYXlpbmcuIEFuZHJvaWQgb25seS5cbiAgICovXG4gIGtlZXBBd2FrZT86IGJvb2xlYW47XG4gIC8qKiBFeGVjdXRlcyBhZnRlciBzdWNjZXNzIHBsYXlpbmcgYXVkaW8uICovXG4gIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uO1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgZXJyb3IgcGxheWluZyBhdWRpby4gKi9cbiAgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIEBuYW1lIFN0cmVhbWluZyBNZWRpYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN0cmVhbSBhdWRpbyBhbmQgdmlkZW8gaW4gYSBmdWxsc2NyZWVuLCBuYXRpdmUgcGxheWVyIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0cmVhbWluZ01lZGlhLCBTdHJlYW1pbmdWaWRlb09wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0cmVhbWluZy1tZWRpYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyZWFtaW5nTWVkaWE6IFN0cmVhbWluZ01lZGlhKSB7IH1cbiAqXG4gKiBsZXQgb3B0aW9uczogU3RyZWFtaW5nVmlkZW9PcHRpb25zID0ge1xuICogICBzdWNjZXNzQ2FsbGJhY2s6ICgpID0+IHsgY29uc29sZS5sb2coJ1ZpZGVvIHBsYXllZCcpIH0sXG4gKiAgIGVycm9yQ2FsbGJhY2s6IChlKSA9PiB7IGNvbnNvbGUubG9nKCdFcnJvciBzdHJlYW1pbmcnKSB9LFxuICogICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXG4gKiAgIHNob3VsZEF1dG9DbG9zZTogdHJ1ZSxcbiAqICAgY29udHJvbHM6IGZhbHNlXG4gKiB9O1xuICpcbiAqIHRoaXMuc3RyZWFtaW5nTWVkaWEucGxheVZpZGVvKCdodHRwczovL3BhdGgvdG8vdmlkZW8vc3RyZWFtJywgb3B0aW9ucyk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogU3RyZWFtaW5nVmlkZW9PcHRpb25zXG4gKiBTdHJlYW1pbmdBdWRpb09wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdHJlYW1pbmdNZWRpYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc3RyZWFtaW5nTWVkaWEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25jaHV0Y2hpbmQvY29yZG92YS1wbHVnaW4tc3RyZWFtaW5nLW1lZGlhJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nTWVkaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdHJlYW1zIGEgdmlkZW9cbiAgICogQHBhcmFtIHZpZGVvVXJsIHtzdHJpbmd9IFRoZSBVUkwgb2YgdGhlIHZpZGVvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdWaWRlb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5VmlkZW8odmlkZW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ1ZpZGVvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RyZWFtcyBhbiBhdWRpb1xuICAgKiBAcGFyYW0gYXVkaW9Vcmwge3N0cmluZ30gVGhlIFVSTCBvZiB0aGUgYXVkaW8gc3RyZWFtXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdBdWRpb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5QXVkaW8oYXVkaW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RvcHMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcEF1ZGlvKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHN0cmVhbWluZyBhdWRpb1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgcGF1c2VBdWRpbygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc3VtZXMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXN1bWVBdWRpbygpOiB2b2lkIHt9XG59XG4iXX0=