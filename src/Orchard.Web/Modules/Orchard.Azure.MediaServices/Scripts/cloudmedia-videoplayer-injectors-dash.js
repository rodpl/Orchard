/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/// <reference path="Typings/jquery.d.ts" />
/// <reference path="Typings/underscore.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orchard;
(function (Orchard) {
    var Azure;
    (function (Azure) {
        var MediaServices;
        (function (MediaServices) {
            var VideoPlayer;
            (function (VideoPlayer) {
                var Injectors;
                (function (Injectors) {
                    var DashInjector = (function (_super) {
                        __extends(DashInjector, _super);
                        function DashInjector() {
                            _super.apply(this, arguments);
                        }
                        DashInjector.prototype.isSupported = function () {
                            var videoElement = document.createElement("video");
                            var hasH264 = videoElement && videoElement.canPlayType && !!videoElement.canPlayType("video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"");
                            var hasMse = MediaSource && MediaSource.isTypeSupported && MediaSource.isTypeSupported("video/mp4; codecs=\"avc1.4d404f\"");
                            var hasDynamicAssets = _(this.filteredAssets().DynamicVideoAssets).any();
                            this.debug("Browser supports HTML5 video and the H264 and AAC codecs: {0}", hasH264);
                            this.debug("Browser supports the Media Source Extensions API: {0}", hasMse);
                            this.debug("Item has at least one dynamic video asset: {0}", hasDynamicAssets);
                            var result = hasH264 && hasMse && hasDynamicAssets;
                            this.debug("isSupported() returns {0}.", result);
                            return result;
                        };
                        DashInjector.prototype.inject = function () {
                            var _this = this;
                            var firstDynamicAsset = _(this.filteredAssets().DynamicVideoAssets).first();
                            var firstThumbnailAsset = _(this.filteredAssets().ThumbnailAssets).first();
                            this.debug("Injecting player into element '{0}'.", this.container.id);
                            var videoElement = $("<video controls>").attr("width", this.playerWidth).attr("height", this.playerHeight);
                            if (firstThumbnailAsset)
                                videoElement.attr("poster", firstThumbnailAsset.MainFileUrl);
                            videoElement.appendTo(this.container);
                            var url = firstDynamicAsset.MpegDashUrl;
                            var context = new Dash.di.DashContext();
                            var player = new MediaPlayer(context);
                            player.startup();
                            player.addEventListener("error", function (e) {
                                _this.debug("Error of type '{0}' detected; cleaning up container and faulting this injector.", e.error);
                                // TODO: Be a little more selective here, don't fail on any error.
                                _this.fault();
                            });
                            player.debug.setLogToBrowserConsole(false);
                            player.attachView(videoElement[0]);
                            player.attachSource(url);
                            player.setAutoPlay(this.autoPlay);
                        };
                        DashInjector.prototype.debug = function (message) {
                            var args = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                args[_i - 1] = arguments[_i];
                            }
                            _super.prototype.debug.call(this, "DashInjector: " + message, args);
                        };
                        return DashInjector;
                    })(Injectors.Injector);
                    Injectors.DashInjector = DashInjector;
                })(Injectors = VideoPlayer.Injectors || (VideoPlayer.Injectors = {}));
            })(VideoPlayer = MediaServices.VideoPlayer || (MediaServices.VideoPlayer = {}));
        })(MediaServices = Azure.MediaServices || (Azure.MediaServices = {}));
    })(Azure = Orchard.Azure || (Orchard.Azure = {}));
})(Orchard || (Orchard = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkbWVkaWEtdmlkZW9wbGF5ZXItaW5qZWN0b3JzLWRhc2guanMiLCJjbG91ZG1lZGlhLXZpZGVvcGxheWVyLWluamVjdG9ycy1kYXNoLnRzIl0sIm5hbWVzIjpbIk9yY2hhcmQiLCJPcmNoYXJkLkF6dXJlIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLlZpZGVvUGxheWVyIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLlZpZGVvUGxheWVyLkluamVjdG9ycyIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5JbmplY3RvcnMuRGFzaEluamVjdG9yIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLlZpZGVvUGxheWVyLkluamVjdG9ycy5EYXNoSW5qZWN0b3IuY29uc3RydWN0b3IiLCJPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMuVmlkZW9QbGF5ZXIuSW5qZWN0b3JzLkRhc2hJbmplY3Rvci5pc1N1cHBvcnRlZCIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5JbmplY3RvcnMuRGFzaEluamVjdG9yLmluamVjdCIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5JbmplY3RvcnMuRGFzaEluamVjdG9yLmRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQUNMQSw0Q0FBNEM7QUFDNUMsZ0RBQWdEOzs7Ozs7QUFFaEQsSUFBTyxPQUFPLENBcUViO0FBckVELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxLQUFLQSxDQXFFbkJBO0lBckVjQSxXQUFBQSxLQUFLQTtRQUFDQyxJQUFBQSxhQUFhQSxDQXFFakNBO1FBckVvQkEsV0FBQUEsYUFBYUE7WUFBQ0MsSUFBQUEsV0FBV0EsQ0FxRTdDQTtZQXJFa0NBLFdBQUFBLFdBQVdBO2dCQUFDQyxJQUFBQSxTQUFTQSxD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bUJBQWFBLEtBQWJBLG1CQUFhQSxRQXFFakNBO0lBQURBLENBQUNBLEVBckVjRCxLQUFLQSxHQUFMQSxhQUFLQSxLQUFMQSxhQUFLQSxRQXFFbkJBO0FBQURBLENBQUNBLEVBckVNLE9BQU8sS0FBUCxPQUFPLFFBcUViIiwiZmlsZSI6ImNsb3VkbWVkaWEtdmlkZW9wbGF5ZXItaW5qZWN0b3JzLWRhc2guanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJUeXBpbmdzL2pxdWVyeS5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlR5cGluZ3MvdW5kZXJzY29yZS5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMuVmlkZW9QbGF5ZXIuSW5qZWN0b3JzIHtcclxuXHJcbiAgICBpbXBvcnQgRGF0YSA9IE9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5EYXRhO1xyXG5cclxuICAgIGRlY2xhcmUgdmFyIERhc2g6IGFueTtcclxuICAgIGRlY2xhcmUgdmFyIE1lZGlhUGxheWVyOiBhbnk7XHJcblxyXG4gICAgaW50ZXJmYWNlIFBsYXllckVycm9yRXZlbnRBcmdzIHtcclxuICAgICAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgZXJyb3I6IHN0cmluZztcclxuICAgICAgICBldmVudDoge1xyXG4gICAgICAgICAgICBpZD86IHN0cmluZztcclxuICAgICAgICAgICAgbWVzc2FnZT86IHN0cmluZztcclxuICAgICAgICAgICAgcmVxdWVzdD86IFhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgICAgICAgICBtYW5pZmVzdD86IGFueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIERhc2hJbmplY3RvciBleHRlbmRzIEluamVjdG9yIHtcclxuXHJcbiAgICAgICAgcHVibGljIGlzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgdmlkZW9FbGVtZW50OiBIVE1MVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGhhc0gyNjQgPSB2aWRlb0VsZW1lbnQgJiYgdmlkZW9FbGVtZW50LmNhblBsYXlUeXBlICYmICEhdmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKFwidmlkZW8vbXA0OyBjb2RlY3M9XFxcImF2YzEuNDIwMDFFLCBtcDRhLjQwLjJcXFwiXCIpO1xyXG4gICAgICAgICAgICB2YXIgaGFzTXNlID0gTWVkaWFTb3VyY2UgJiYgTWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkICYmIE1lZGlhU291cmNlLmlzVHlwZVN1cHBvcnRlZChcInZpZGVvL21wNDsgY29kZWNzPVxcXCJhdmMxLjRkNDA0ZlxcXCJcIik7XHJcbiAgICAgICAgICAgIHZhciBoYXNEeW5hbWljQXNzZXRzID0gXyh0aGlzLmZpbHRlcmVkQXNzZXRzKCkuRHluYW1pY1ZpZGVvQXNzZXRzKS5hbnkoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoXCJCcm93c2VyIHN1cHBvcnRzIEhUTUw1IHZpZGVvIGFuZCB0aGUgSDI2NCBhbmQgQUFDIGNvZGVjczogezB9XCIsIGhhc0gyNjQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKFwiQnJvd3NlciBzdXBwb3J0cyB0aGUgTWVkaWEgU291cmNlIEV4dGVuc2lvbnMgQVBJOiB7MH1cIiwgaGFzTXNlKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhcIkl0ZW0gaGFzIGF0IGxlYXN0IG9uZSBkeW5hbWljIHZpZGVvIGFzc2V0OiB7MH1cIiwgaGFzRHluYW1pY0Fzc2V0cyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaGFzSDI2NCAmJiBoYXNNc2UgJiYgaGFzRHluYW1pY0Fzc2V0cztcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhcImlzU3VwcG9ydGVkKCkgcmV0dXJucyB7MH0uXCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGluamVjdCgpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGZpcnN0RHluYW1pY0Fzc2V0ID0gXyh0aGlzLmZpbHRlcmVkQXNzZXRzKCkuRHluYW1pY1ZpZGVvQXNzZXRzKS5maXJzdCgpO1xyXG4gICAgICAgICAgICB2YXIgZmlyc3RUaHVtYm5haWxBc3NldCA9IF8odGhpcy5maWx0ZXJlZEFzc2V0cygpLlRodW1ibmFpbEFzc2V0cykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoXCJJbmplY3RpbmcgcGxheWVyIGludG8gZWxlbWVudCAnezB9Jy5cIiwgdGhpcy5jb250YWluZXIuaWQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZpZGVvRWxlbWVudCA9ICQoXCI8dmlkZW8gY29udHJvbHM+XCIpLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLnBsYXllcldpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMucGxheWVySGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0VGh1bWJuYWlsQXNzZXQpXHJcbiAgICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQuYXR0cihcInBvc3RlclwiLCBmaXJzdFRodW1ibmFpbEFzc2V0Lk1haW5GaWxlVXJsKTtcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50LmFwcGVuZFRvKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBmaXJzdER5bmFtaWNBc3NldC5NcGVnRGFzaFVybDtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBuZXcgRGFzaC5kaS5EYXNoQ29udGV4dCgpO1xyXG4gICAgICAgICAgICB2YXIgcGxheWVyID0gbmV3IE1lZGlhUGxheWVyKGNvbnRleHQpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc3RhcnR1cCgpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZTogUGxheWVyRXJyb3JFdmVudEFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVidWcoXCJFcnJvciBvZiB0eXBlICd7MH0nIGRldGVjdGVkOyBjbGVhbmluZyB1cCBjb250YWluZXIgYW5kIGZhdWx0aW5nIHRoaXMgaW5qZWN0b3IuXCIsIGUuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQmUgYSBsaXR0bGUgbW9yZSBzZWxlY3RpdmUgaGVyZSwgZG9uJ3QgZmFpbCBvbiBhbnkgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLmRlYnVnLnNldExvZ1RvQnJvd3NlckNvbnNvbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuYXR0YWNoVmlldyh2aWRlb0VsZW1lbnRbMF0pO1xyXG4gICAgICAgICAgICBwbGF5ZXIuYXR0YWNoU291cmNlKHVybCk7XHJcbiAgICAgICAgICAgIHBsYXllci5zZXRBdXRvUGxheSh0aGlzLmF1dG9QbGF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmRlYnVnKFwiRGFzaEluamVjdG9yOiBcIiArIG1lc3NhZ2UsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
