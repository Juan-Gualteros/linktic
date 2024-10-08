import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __commonJS
} from "./chunk-NQ4HTGF6.js";

// node_modules/notiflix/dist/notiflix-aio-3.2.7.min.js
var require_notiflix_aio_3_2_7_min = __commonJS({
  "node_modules/notiflix/dist/notiflix-aio-3.2.7.min.js"(exports, module) {
    (function(t, e) {
      "function" == typeof define && define.amd ? define([], function() {
        return e(t);
      }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e(t) : t.Notiflix = e(t);
    })("undefined" == typeof global ? "undefined" == typeof window ? exports : window : global, function(t) {
      "use strict";
      if ("undefined" == typeof t && "undefined" == typeof t.document) return false;
      var e, i, a, n, o, r = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation", s = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', l = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
      }, m = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: false,
        timeout: 3e3,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: true,
        showOnlyTheLastOne: false,
        clickToClose: false,
        pauseOnHover: true,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: true,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: false,
        useIcon: true,
        useFontAwesome: false,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
          background: "#32c682",
          textColor: "#fff",
          childClassName: "notiflix-notify-success",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-check-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
          background: "#ff5549",
          textColor: "#fff",
          childClassName: "notiflix-notify-failure",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-times-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
          background: "#eebf31",
          textColor: "#fff",
          childClassName: "notiflix-notify-warning",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-exclamation-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
          background: "#26c0d3",
          textColor: "#fff",
          childClassName: "notiflix-notify-info",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-info-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(38,192,211,0.2)"
        }
      }, c = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
      }, p = {
        ID: "NotiflixReportWrap",
        className: "notiflix-report",
        width: "320px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        rtl: false,
        zindex: 4002,
        backOverlay: true,
        backOverlayColor: "rgba(0,0,0,0.5)",
        backOverlayClickToClose: false,
        fontFamily: "Quicksand",
        svgSize: "110px",
        plainText: true,
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageFontSize: "13px",
        messageMaxLength: 400,
        buttonFontSize: "14px",
        buttonMaxLength: 34,
        cssAnimation: true,
        cssAnimationDuration: 360,
        cssAnimationStyle: "fade",
        success: {
          svgColor: "#32c682",
          titleColor: "#1e1e1e",
          messageColor: "#242424",
          buttonBackground: "#32c682",
          buttonColor: "#fff",
          backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
          svgColor: "#ff5549",
          titleColor: "#1e1e1e",
          messageColor: "#242424",
          buttonBackground: "#ff5549",
          buttonColor: "#fff",
          backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
          svgColor: "#eebf31",
          titleColor: "#1e1e1e",
          messageColor: "#242424",
          buttonBackground: "#eebf31",
          buttonColor: "#fff",
          backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
          svgColor: "#26c0d3",
          titleColor: "#1e1e1e",
          messageColor: "#242424",
          buttonBackground: "#26c0d3",
          buttonColor: "#fff",
          backOverlayColor: "rgba(38,192,211,0.2)"
        }
      }, f = {
        Show: "Show",
        Ask: "Ask",
        Prompt: "Prompt"
      }, d = {
        ID: "NotiflixConfirmWrap",
        className: "notiflix-confirm",
        width: "300px",
        zindex: 4003,
        position: "center",
        distance: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        backOverlay: true,
        backOverlayColor: "rgba(0,0,0,0.5)",
        rtl: false,
        fontFamily: "Quicksand",
        cssAnimation: true,
        cssAnimationDuration: 300,
        cssAnimationStyle: "fade",
        plainText: true,
        titleColor: "#32c682",
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageColor: "#1e1e1e",
        messageFontSize: "14px",
        messageMaxLength: 110,
        buttonsFontSize: "15px",
        buttonsMaxLength: 34,
        okButtonColor: "#f8f8f8",
        okButtonBackground: "#32c682",
        cancelButtonColor: "#f8f8f8",
        cancelButtonBackground: "#a9a9a9"
      }, x = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse",
        Custom: "Custom",
        Notiflix: "Notiflix"
      }, g = {
        ID: "NotiflixLoadingWrap",
        className: "notiflix-loading",
        zindex: 4e3,
        backgroundColor: "rgba(0,0,0,0.8)",
        rtl: false,
        fontFamily: "Quicksand",
        cssAnimation: true,
        cssAnimationDuration: 400,
        clickToClose: false,
        customSvgUrl: null,
        customSvgCode: null,
        svgSize: "80px",
        svgColor: "#32c682",
        messageID: "NotiflixLoadingMessage",
        messageFontSize: "15px",
        messageMaxLength: 34,
        messageColor: "#dcdcdc"
      }, b = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse"
      }, u = {
        ID: "NotiflixBlockWrap",
        querySelectorLimit: 200,
        className: "notiflix-block",
        position: "absolute",
        zindex: 1e3,
        backgroundColor: "rgba(255,255,255,0.9)",
        rtl: false,
        fontFamily: "Quicksand",
        cssAnimation: true,
        cssAnimationDuration: 300,
        svgSize: "45px",
        svgColor: "#383838",
        messageFontSize: "14px",
        messageMaxLength: 34,
        messageColor: "#383838"
      }, y = function(t2) {
        return console.error("%c Notiflix Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + t2 + r);
      }, k = function(t2) {
        return console.log("%c Notiflix Info ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + t2 + r);
      }, w = function(e2) {
        return e2 || (e2 = "head"), null !== t.document[e2] || (y('\nNotiflix needs to be appended to the "<' + e2 + '>" element, but you called it before the "<' + e2 + '>" element has been created.'), false);
      }, h = function(e2, i2) {
        if (!w("head")) return false;
        if (null !== e2() && !t.document.getElementById(i2)) {
          var a2 = t.document.createElement("style");
          a2.id = i2, a2.innerHTML = e2(), t.document.head.appendChild(a2);
        }
      }, v = function() {
        var t2 = {}, e2 = false, a2 = 0;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e2 = arguments[0], a2++);
        for (var n2 = function(i2) {
          for (var a3 in i2) Object.prototype.hasOwnProperty.call(i2, a3) && (t2[a3] = e2 && "[object Object]" === Object.prototype.toString.call(i2[a3]) ? v(t2[a3], i2[a3]) : i2[a3]);
        }; a2 < arguments.length; a2++) n2(arguments[a2]);
        return t2;
      }, N = function(e2) {
        var i2 = t.document.createElement("div");
        return i2.innerHTML = e2, i2.textContent || i2.innerText || "";
      }, C = function(t2, e2) {
        t2 || (t2 = "110px"), e2 || (e2 = "#32c682");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + t2 + '" height="' + t2 + '" fill="' + e2 + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i2;
      }, z = function(t2, e2) {
        t2 || (t2 = "110px"), e2 || (e2 = "#ff5549");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + t2 + '" height="' + t2 + '" fill="' + e2 + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i2;
      }, S = function(t2, e2) {
        t2 || (t2 = "110px"), e2 || (e2 = "#eebf31");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + t2 + '" height="' + t2 + '" fill="' + e2 + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i2;
      }, L = function(t2, e2) {
        t2 || (t2 = "110px"), e2 || (e2 = "#26c0d3");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + t2 + '" height="' + t2 + '" fill="' + e2 + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i2;
      }, W = function(t2, e2) {
        t2 || (t2 = "60px"), e2 || (e2 = "#32c682");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e2 + '" width="' + t2 + '" height="' + t2 + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
        return i2;
      }, I = function(t2, e2) {
        t2 || (t2 = "60px"), e2 || (e2 = "#32c682");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + e2 + '" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
        return i2;
      }, R = function(t2, e2) {
        t2 || (t2 = "60px"), e2 || (e2 = "#32c682");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t2 + '" height="' + t2 + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + t2 + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + t2 + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + e2 + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
        return i2;
      }, A = function(t2, e2) {
        t2 || (t2 = "60px"), e2 || (e2 = "#32c682");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e2 + '" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
        return i2;
      }, M = function(t2, e2) {
        t2 || (t2 = "60px"), e2 || (e2 = "#32c682");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e2 + '" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
        return i2;
      }, B = function(t2, e2) {
        t2 || (t2 = "60px"), e2 || (e2 = "#32c682");
        var i2 = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e2 + '" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
        return i2;
      }, X = function(t2, e2, i2) {
        t2 || (t2 = "60px"), e2 || (e2 = "#f8f8f8"), i2 || (i2 = "#32c682");
        var a2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + e2 + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + i2 + '" stroke="' + i2 + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
        return a2;
      }, D = function() {
        return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
      }, T = 0, F = function(a2, n2, o2, r2) {
        if (!w("body")) return false;
        e || G.Notify.init({});
        var c2 = v(true, e, {});
        if ("object" == typeof o2 && !Array.isArray(o2) || "object" == typeof r2 && !Array.isArray(r2)) {
          var p2 = {};
          "object" == typeof o2 ? p2 = o2 : "object" == typeof r2 && (p2 = r2), e = v(true, e, p2);
        }
        var f2 = e[a2.toLocaleLowerCase("en")];
        T++, "string" != typeof n2 && (n2 = "Notiflix " + a2), e.plainText && (n2 = N(n2)), !e.plainText && n2.length > e.messageMaxLength && (e = v(true, e, {
          closeButton: true,
          messageMaxLength: 150
        }), n2 = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'), n2.length > e.messageMaxLength && (n2 = n2.substring(0, e.messageMaxLength) + "..."), "shadow" === e.fontAwesomeIconStyle && (f2.fontAwesomeIconColor = f2.background), e.cssAnimation || (e.cssAnimationDuration = 0);
        var d2 = t.document.getElementById(m.wrapID) || t.document.createElement("div");
        if (d2.id = m.wrapID, d2.style.width = e.width, d2.style.zIndex = e.zindex, d2.style.opacity = e.opacity, "center-center" === e.position ? (d2.style.left = e.distance, d2.style.top = e.distance, d2.style.right = e.distance, d2.style.bottom = e.distance, d2.style.margin = "auto", d2.classList.add("nx-flex-center-center"), d2.style.maxHeight = "calc((100vh - " + e.distance + ") - " + e.distance + ")", d2.style.display = "flex", d2.style.flexWrap = "wrap", d2.style.flexDirection = "column", d2.style.justifyContent = "center", d2.style.alignItems = "center", d2.style.pointerEvents = "none") : "center-top" === e.position ? (d2.style.left = e.distance, d2.style.right = e.distance, d2.style.top = e.distance, d2.style.bottom = "auto", d2.style.margin = "auto") : "center-bottom" === e.position ? (d2.style.left = e.distance, d2.style.right = e.distance, d2.style.bottom = e.distance, d2.style.top = "auto", d2.style.margin = "auto") : "right-bottom" === e.position ? (d2.style.right = e.distance, d2.style.bottom = e.distance, d2.style.top = "auto", d2.style.left = "auto") : "left-top" === e.position ? (d2.style.left = e.distance, d2.style.top = e.distance, d2.style.right = "auto", d2.style.bottom = "auto") : "left-bottom" === e.position ? (d2.style.left = e.distance, d2.style.bottom = e.distance, d2.style.top = "auto", d2.style.right = "auto") : (d2.style.right = e.distance, d2.style.top = e.distance, d2.style.left = "auto", d2.style.bottom = "auto"), e.backOverlay) {
          var x2 = t.document.getElementById(m.overlayID) || t.document.createElement("div");
          x2.id = m.overlayID, x2.style.width = "100%", x2.style.height = "100%", x2.style.position = "fixed", x2.style.zIndex = e.zindex - 1, x2.style.left = 0, x2.style.top = 0, x2.style.right = 0, x2.style.bottom = 0, x2.style.background = f2.backOverlayColor || e.backOverlayColor, x2.className = e.cssAnimation ? "nx-with-animation" : "", x2.style.animationDuration = e.cssAnimation ? e.cssAnimationDuration + "ms" : "", t.document.getElementById(m.overlayID) || t.document.body.appendChild(x2);
        }
        t.document.getElementById(m.wrapID) || t.document.body.appendChild(d2);
        var g2 = t.document.createElement("div");
        g2.id = e.ID + "-" + T, g2.className = e.className + " " + f2.childClassName + " " + (e.cssAnimation ? "nx-with-animation" : "") + " " + (e.useIcon ? "nx-with-icon" : "") + " nx-" + e.cssAnimationStyle + " " + (e.closeButton && "function" != typeof o2 ? "nx-with-close-button" : "") + " " + ("function" == typeof o2 ? "nx-with-callback" : "") + " " + (e.clickToClose ? "nx-notify-click-to-close" : ""), g2.style.fontSize = e.fontSize, g2.style.color = f2.textColor, g2.style.background = f2.background, g2.style.borderRadius = e.borderRadius, g2.style.pointerEvents = "all", e.rtl && (g2.setAttribute("dir", "rtl"), g2.classList.add("nx-rtl-on")), g2.style.fontFamily = '"' + e.fontFamily + '", ' + s, e.cssAnimation && (g2.style.animationDuration = e.cssAnimationDuration + "ms");
        var b2 = "";
        if (e.closeButton && "function" != typeof o2 && (b2 = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + f2.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'), !e.useIcon) g2.innerHTML = '<span class="nx-message">' + n2 + "</span>" + (e.closeButton ? b2 : "");
        else if (e.useFontAwesome) g2.innerHTML = '<i style="color:' + f2.fontAwesomeIconColor + "; font-size:" + e.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + f2.fontAwesomeClassName + " " + ("shadow" === e.fontAwesomeIconStyle ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + n2 + "</span>" + (e.closeButton ? b2 : "");
        else {
          var u2 = "";
          a2 === l.Success ? u2 = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f2.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' : a2 === l.Failure ? u2 = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f2.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' : a2 === l.Warning ? u2 = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f2.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' : a2 === l.Info && (u2 = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f2.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'), g2.innerHTML = u2 + '<span class="nx-message nx-with-icon">' + n2 + "</span>" + (e.closeButton ? b2 : "");
        }
        if ("left-bottom" === e.position || "right-bottom" === e.position) {
          var y2 = t.document.getElementById(m.wrapID);
          y2.insertBefore(g2, y2.firstChild);
        } else t.document.getElementById(m.wrapID).appendChild(g2);
        var k2 = t.document.getElementById(g2.id);
        if (k2) {
          var h2, C2, z2 = function() {
            k2.classList.add("nx-remove");
            var e2 = t.document.getElementById(m.overlayID);
            e2 && 0 >= d2.childElementCount && e2.classList.add("nx-remove"), clearTimeout(h2);
          }, S2 = function() {
            if (k2 && null !== k2.parentNode && k2.parentNode.removeChild(k2), 0 >= d2.childElementCount && null !== d2.parentNode) {
              d2.parentNode.removeChild(d2);
              var e2 = t.document.getElementById(m.overlayID);
              e2 && null !== e2.parentNode && e2.parentNode.removeChild(e2);
            }
            clearTimeout(C2);
          };
          if (e.closeButton && "function" != typeof o2) {
            var L2 = t.document.getElementById(g2.id).querySelector("span.nx-close-button");
            L2.addEventListener("click", function() {
              z2();
              var t2 = setTimeout(function() {
                S2(), clearTimeout(t2);
              }, e.cssAnimationDuration);
            });
          }
          if (("function" == typeof o2 || e.clickToClose) && k2.addEventListener("click", function() {
            "function" == typeof o2 && o2(), z2();
            var t2 = setTimeout(function() {
              S2(), clearTimeout(t2);
            }, e.cssAnimationDuration);
          }), !e.closeButton && "function" != typeof o2) {
            var W2 = function() {
              h2 = setTimeout(function() {
                z2();
              }, e.timeout), C2 = setTimeout(function() {
                S2();
              }, e.timeout + e.cssAnimationDuration);
            };
            W2(), e.pauseOnHover && (k2.addEventListener("mouseenter", function() {
              k2.classList.add("nx-paused"), clearTimeout(h2), clearTimeout(C2);
            }), k2.addEventListener("mouseleave", function() {
              k2.classList.remove("nx-paused"), W2();
            }));
          }
        }
        if (e.showOnlyTheLastOne && 0 < T) for (var I2, R2 = t.document.querySelectorAll("[id^=" + e.ID + "-]:not([id=" + e.ID + "-" + T + "])"), A2 = 0; A2 < R2.length; A2++) I2 = R2[A2], null !== I2.parentNode && I2.parentNode.removeChild(I2);
        e = v(true, e, c2);
      }, E = function() {
        return '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
      }, j = function(e2, a2, n2, o2, r2, l2) {
        if (!w("body")) return false;
        i || G.Report.init({});
        var m2 = {};
        if ("object" == typeof r2 && !Array.isArray(r2) || "object" == typeof l2 && !Array.isArray(l2)) {
          var f2 = {};
          "object" == typeof r2 ? f2 = r2 : "object" == typeof l2 && (f2 = l2), m2 = v(true, i, {}), i = v(true, i, f2);
        }
        var d2 = i[e2.toLocaleLowerCase("en")];
        "string" != typeof a2 && (a2 = "Notiflix " + e2), "string" != typeof n2 && (e2 === c.Success ? n2 = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein' : e2 === c.Failure ? n2 = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford' : e2 === c.Warning ? n2 = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk' : e2 === c.Info && (n2 = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')), "string" != typeof o2 && (o2 = "Okay"), i.plainText && (a2 = N(a2), n2 = N(n2), o2 = N(o2)), i.plainText || (a2.length > i.titleMaxLength && (a2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.', o2 = "Okay"), n2.length > i.messageMaxLength && (a2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.', o2 = "Okay"), o2.length > i.buttonMaxLength && (a2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.', o2 = "Okay")), a2.length > i.titleMaxLength && (a2 = a2.substring(0, i.titleMaxLength) + "..."), n2.length > i.messageMaxLength && (n2 = n2.substring(0, i.messageMaxLength) + "..."), o2.length > i.buttonMaxLength && (o2 = o2.substring(0, i.buttonMaxLength) + "..."), i.cssAnimation || (i.cssAnimationDuration = 0);
        var x2 = t.document.createElement("div");
        x2.id = p.ID, x2.className = i.className, x2.style.zIndex = i.zindex, x2.style.borderRadius = i.borderRadius, x2.style.fontFamily = '"' + i.fontFamily + '", ' + s, i.rtl && (x2.setAttribute("dir", "rtl"), x2.classList.add("nx-rtl-on")), x2.style.display = "flex", x2.style.flexWrap = "wrap", x2.style.flexDirection = "column", x2.style.alignItems = "center", x2.style.justifyContent = "center";
        var g2 = "", b2 = true === i.backOverlayClickToClose;
        i.backOverlay && (g2 = '<div class="' + i.className + "-overlay" + (i.cssAnimation ? " nx-with-animation" : "") + (b2 ? " nx-report-click-to-close" : "") + '" style="background:' + (d2.backOverlayColor || i.backOverlayColor) + ";animation-duration:" + i.cssAnimationDuration + 'ms;"></div>');
        var u2 = "";
        if (e2 === c.Success ? u2 = C(i.svgSize, d2.svgColor) : e2 === c.Failure ? u2 = z(i.svgSize, d2.svgColor) : e2 === c.Warning ? u2 = S(i.svgSize, d2.svgColor) : e2 === c.Info && (u2 = L(i.svgSize, d2.svgColor)), x2.innerHTML = g2 + '<div class="' + i.className + "-content" + (i.cssAnimation ? " nx-with-animation " : "") + " nx-" + i.cssAnimationStyle + '" style="width:' + i.width + "; background:" + i.backgroundColor + "; animation-duration:" + i.cssAnimationDuration + 'ms;"><div style="width:' + i.svgSize + "; height:" + i.svgSize + ';" class="' + i.className + '-icon">' + u2 + '</div><h5 class="' + i.className + '-title" style="font-weight:500; font-size:' + i.titleFontSize + "; color:" + d2.titleColor + ';">' + a2 + '</h5><p class="' + i.className + '-message" style="font-size:' + i.messageFontSize + "; color:" + d2.messageColor + ';">' + n2 + '</p><a id="NXReportButton" class="' + i.className + '-button" style="font-weight:500; font-size:' + i.buttonFontSize + "; background:" + d2.buttonBackground + "; color:" + d2.buttonColor + ';">' + o2 + "</a></div>", !t.document.getElementById(x2.id)) {
          t.document.body.appendChild(x2);
          var y2 = function() {
            var e3 = t.document.getElementById(x2.id);
            e3.classList.add("nx-remove");
            var a3 = setTimeout(function() {
              null !== e3.parentNode && e3.parentNode.removeChild(e3), clearTimeout(a3);
            }, i.cssAnimationDuration);
          }, k2 = t.document.getElementById("NXReportButton");
          if (k2.addEventListener("click", function() {
            "function" == typeof r2 && r2(), y2();
          }), g2 && b2) {
            var h2 = t.document.querySelector(".nx-report-click-to-close");
            h2.addEventListener("click", function() {
              y2();
            });
          }
        }
        i = v(true, i, m2);
      }, O = function() {
        return '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
      }, H = function(e2, i2, n2, o2, r2, l2, m2, c2, p2) {
        if (!w("body")) return false;
        a || G.Confirm.init({});
        var x2 = v(true, a, {});
        "object" != typeof p2 || Array.isArray(p2) || (a = v(true, a, p2)), "string" != typeof i2 && (i2 = "Notiflix Confirm"), "string" != typeof n2 && (n2 = "Do you agree with me?"), "string" != typeof r2 && (r2 = "Yes"), "string" != typeof l2 && (l2 = "No"), "function" != typeof m2 && (m2 = void 0), "function" != typeof c2 && (c2 = void 0), a.plainText && (i2 = N(i2), n2 = N(n2), r2 = N(r2), l2 = N(l2)), a.plainText || (i2.length > a.titleMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.', r2 = "Okay", l2 = "..."), n2.length > a.messageMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.', r2 = "Okay", l2 = "..."), (r2.length || l2.length) > a.buttonsMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.', r2 = "Okay", l2 = "...")), i2.length > a.titleMaxLength && (i2 = i2.substring(0, a.titleMaxLength) + "..."), n2.length > a.messageMaxLength && (n2 = n2.substring(0, a.messageMaxLength) + "..."), r2.length > a.buttonsMaxLength && (r2 = r2.substring(0, a.buttonsMaxLength) + "..."), l2.length > a.buttonsMaxLength && (l2 = l2.substring(0, a.buttonsMaxLength) + "..."), a.cssAnimation || (a.cssAnimationDuration = 0);
        var g2 = t.document.createElement("div");
        g2.id = d.ID, g2.className = a.className + (a.cssAnimation ? " nx-with-animation nx-" + a.cssAnimationStyle : ""), g2.style.zIndex = a.zindex, g2.style.padding = a.distance, a.rtl && (g2.setAttribute("dir", "rtl"), g2.classList.add("nx-rtl-on"));
        var b2 = "string" == typeof a.position ? a.position.trim() : "center";
        g2.classList.add("nx-position-" + b2), g2.style.fontFamily = '"' + a.fontFamily + '", ' + s;
        var u2 = "";
        a.backOverlay && (u2 = '<div class="' + a.className + "-overlay" + (a.cssAnimation ? " nx-with-animation" : "") + '" style="background:' + a.backOverlayColor + ";animation-duration:" + a.cssAnimationDuration + 'ms;"></div>');
        var y2 = "";
        "function" == typeof m2 && (y2 = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + a.cancelButtonColor + ";background:" + a.cancelButtonBackground + ";font-size:" + a.buttonsFontSize + ';">' + l2 + "</a>");
        var k2 = "", h2 = null, C2 = void 0;
        if (e2 === f.Ask || e2 === f.Prompt) {
          h2 = o2 || "";
          var z2 = e2 === f.Ask ? Math.ceil(1.5 * h2.length) : 200 < h2.length ? Math.ceil(1.5 * h2.length) : 250, S2 = e2 === f.Prompt ? 'value="' + h2 + '"' : "";
          k2 = '<div><input id="NXConfirmValidationInput" type="text" ' + S2 + ' maxlength="' + z2 + '" style="font-size:' + a.messageFontSize + ";border-radius: " + a.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
        }
        if (g2.innerHTML = u2 + '<div class="' + a.className + '-content" style="width:' + a.width + "; background:" + a.backgroundColor + "; animation-duration:" + a.cssAnimationDuration + "ms; border-radius: " + a.borderRadius + ';"><div class="' + a.className + '-head"><h5 style="color:' + a.titleColor + ";font-size:" + a.titleFontSize + ';">' + i2 + '</h5><div style="color:' + a.messageColor + ";font-size:" + a.messageFontSize + ';">' + n2 + k2 + '</div></div><div class="' + a.className + '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + ("function" == typeof m2 ? "" : " nx-full") + '" style="color:' + a.okButtonColor + ";background:" + a.okButtonBackground + ";font-size:" + a.buttonsFontSize + ';">' + r2 + "</a>" + y2 + "</div></div>", !t.document.getElementById(g2.id)) {
          t.document.body.appendChild(g2);
          var L2 = t.document.getElementById(g2.id), W2 = t.document.getElementById("NXConfirmButtonOk"), I2 = t.document.getElementById("NXConfirmValidationInput");
          if (I2 && (I2.focus(), I2.setSelectionRange(0, (I2.value || "").length), I2.addEventListener("keyup", function(t2) {
            var i3 = t2.target.value;
            if (e2 === f.Ask && i3 !== h2) t2.preventDefault(), I2.classList.add("nx-validation-failure"), I2.classList.remove("nx-validation-success");
            else {
              e2 === f.Ask && (I2.classList.remove("nx-validation-failure"), I2.classList.add("nx-validation-success"));
              var a2 = "enter" === (t2.key || "").toLocaleLowerCase("en") || 13 === t2.keyCode;
              a2 && W2.dispatchEvent(new Event("click"));
            }
          })), W2.addEventListener("click", function(t2) {
            if (e2 === f.Ask && h2 && I2) {
              var i3 = (I2.value || "").toString();
              if (i3 !== h2) return I2.focus(), I2.classList.add("nx-validation-failure"), t2.stopPropagation(), t2.preventDefault(), t2.returnValue = false, t2.cancelBubble = true, false;
              I2.classList.remove("nx-validation-failure");
            }
            "function" == typeof m2 && (e2 === f.Prompt && I2 && (C2 = I2.value || ""), m2(C2)), L2.classList.add("nx-remove");
            var n3 = setTimeout(function() {
              null !== L2.parentNode && (L2.parentNode.removeChild(L2), clearTimeout(n3));
            }, a.cssAnimationDuration);
          }), "function" == typeof m2) {
            var R2 = t.document.getElementById("NXConfirmButtonCancel");
            R2.addEventListener("click", function() {
              "function" == typeof c2 && (e2 === f.Prompt && I2 && (C2 = I2.value || ""), c2(C2)), L2.classList.add("nx-remove");
              var t2 = setTimeout(function() {
                null !== L2.parentNode && (L2.parentNode.removeChild(L2), clearTimeout(t2));
              }, a.cssAnimationDuration);
            });
          }
        }
        a = v(true, a, x2);
      }, P = function() {
        return '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
      }, U = function(e2, i2, a2, o2, r2) {
        if (!w("body")) return false;
        n || G.Loading.init({});
        var l2 = v(true, n, {});
        if ("object" == typeof i2 && !Array.isArray(i2) || "object" == typeof a2 && !Array.isArray(a2)) {
          var m2 = {};
          "object" == typeof i2 ? m2 = i2 : "object" == typeof a2 && (m2 = a2), n = v(true, n, m2);
        }
        var c2 = "";
        if ("string" == typeof i2 && 0 < i2.length && (c2 = i2), o2) {
          c2 = c2.length > n.messageMaxLength ? N(c2).toString().substring(0, n.messageMaxLength) + "..." : N(c2).toString();
          var p2 = "";
          0 < c2.length && (p2 = '<p id="' + n.messageID + '" class="nx-loading-message" style="color:' + n.messageColor + ";font-size:" + n.messageFontSize + ';">' + c2 + "</p>"), n.cssAnimation || (n.cssAnimationDuration = 0);
          var f2 = "";
          if (e2 === x.Standard) f2 = W(n.svgSize, n.svgColor);
          else if (e2 === x.Hourglass) f2 = I(n.svgSize, n.svgColor);
          else if (e2 === x.Circle) f2 = R(n.svgSize, n.svgColor);
          else if (e2 === x.Arrows) f2 = A(n.svgSize, n.svgColor);
          else if (e2 === x.Dots) f2 = M(n.svgSize, n.svgColor);
          else if (e2 === x.Pulse) f2 = B(n.svgSize, n.svgColor);
          else if (e2 === x.Custom && null !== n.customSvgCode && null === n.customSvgUrl) f2 = n.customSvgCode || "";
          else if (e2 === x.Custom && null !== n.customSvgUrl && null === n.customSvgCode) f2 = '<img class="nx-custom-loading-icon" width="' + n.svgSize + '" height="' + n.svgSize + '" src="' + n.customSvgUrl + '" alt="Notiflix">';
          else {
            if (e2 === x.Custom && (null === n.customSvgUrl || null === n.customSvgCode)) return y('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'), false;
            f2 = X(n.svgSize, "#f8f8f8", "#32c682");
          }
          var d2 = parseInt((n.svgSize || "").replace(/[^0-9]/g, "")), b2 = t.innerWidth, u2 = d2 >= b2 ? b2 - 40 + "px" : d2 + "px", k2 = '<div style="width:' + u2 + "; height:" + u2 + ';" class="' + n.className + "-icon" + (0 < c2.length ? " nx-with-message" : "") + '">' + f2 + "</div>", h2 = t.document.createElement("div");
          if (h2.id = g.ID, h2.className = n.className + (n.cssAnimation ? " nx-with-animation" : "") + (n.clickToClose ? " nx-loading-click-to-close" : ""), h2.style.zIndex = n.zindex, h2.style.background = n.backgroundColor, h2.style.animationDuration = n.cssAnimationDuration + "ms", h2.style.fontFamily = '"' + n.fontFamily + '", ' + s, h2.style.display = "flex", h2.style.flexWrap = "wrap", h2.style.flexDirection = "column", h2.style.alignItems = "center", h2.style.justifyContent = "center", n.rtl && (h2.setAttribute("dir", "rtl"), h2.classList.add("nx-rtl-on")), h2.innerHTML = k2 + p2, !t.document.getElementById(h2.id) && (t.document.body.appendChild(h2), n.clickToClose)) {
            var C2 = t.document.getElementById(h2.id);
            C2.addEventListener("click", function() {
              h2.classList.add("nx-remove");
              var t2 = setTimeout(function() {
                null !== h2.parentNode && (h2.parentNode.removeChild(h2), clearTimeout(t2));
              }, n.cssAnimationDuration);
            });
          }
        } else if (t.document.getElementById(g.ID)) var z2 = t.document.getElementById(g.ID), S2 = setTimeout(function() {
          z2.classList.add("nx-remove");
          var t2 = setTimeout(function() {
            null !== z2.parentNode && (z2.parentNode.removeChild(z2), clearTimeout(t2));
          }, n.cssAnimationDuration);
          clearTimeout(S2);
        }, r2);
        n = v(true, n, l2);
      }, V = function(e2) {
        "string" != typeof e2 && (e2 = "");
        var i2 = t.document.getElementById(g.ID);
        if (i2) if (0 < e2.length) {
          e2 = e2.length > n.messageMaxLength ? N(e2).substring(0, n.messageMaxLength) + "..." : N(e2);
          var a2 = i2.getElementsByTagName("p")[0];
          if (a2) a2.innerHTML = e2;
          else {
            var o2 = t.document.createElement("p");
            o2.id = n.messageID, o2.className = "nx-loading-message nx-loading-message-new", o2.style.color = n.messageColor, o2.style.fontSize = n.messageFontSize, o2.innerHTML = e2, i2.appendChild(o2);
          }
        } else y("Where is the new message?");
      }, q = function() {
        return '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}';
      }, Q = 0, Y = function(e2, i2, a2, n2, r2, l2) {
        var m2;
        if (Array.isArray(a2)) {
          if (1 > a2.length) return y("Array of HTMLElements should contains at least one HTMLElement."), false;
          m2 = a2;
        } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, a2)) {
          if (1 > a2.length) return y("NodeListOf<HTMLElement> should contains at least one HTMLElement."), false;
          m2 = Array.prototype.slice.call(a2);
        } else {
          var c2 = "string" != typeof a2 || 1 > (a2 || "").length || 1 === (a2 || "").length && ("#" === (a2 || "")[0] || "." === (a2 || "")[0]);
          if (c2) return y("The selector parameter must be a string and matches a specified CSS selector(s)."), false;
          var p2 = t.document.querySelectorAll(a2);
          if (1 > p2.length) return y('You called the "Notiflix.Block..." function with "' + a2 + '" selector, but there is no such element(s) in the document.'), false;
          m2 = p2;
        }
        o || G.Block.init({});
        var f2 = v(true, o, {});
        if ("object" == typeof n2 && !Array.isArray(n2) || "object" == typeof r2 && !Array.isArray(r2)) {
          var d2 = {};
          "object" == typeof n2 ? d2 = n2 : "object" == typeof r2 && (d2 = r2), o = v(true, o, d2);
        }
        var x2 = "";
        "string" == typeof n2 && 0 < n2.length && (x2 = n2), o.cssAnimation || (o.cssAnimationDuration = 0);
        var g2 = u.className;
        "string" == typeof o.className && (g2 = o.className.trim());
        var h2 = "number" == typeof o.querySelectorLimit ? o.querySelectorLimit : 200, C2 = (m2 || []).length >= h2 ? h2 : m2.length, z2 = "nx-block-temporary-position";
        if (e2) {
          for (var S2, L2 = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr", "html", "head", "title", "script", "style", "iframe"], X2 = 0; X2 < C2; X2++) if (S2 = m2[X2], S2) {
            if (-1 < L2.indexOf(S2.tagName.toLocaleLowerCase("en"))) break;
            var D2 = S2.querySelectorAll("[id^=" + u.ID + "]");
            if (1 > D2.length) {
              var T2 = "";
              i2 && (i2 === b.Hourglass ? T2 = I(o.svgSize, o.svgColor) : i2 === b.Circle ? T2 = R(o.svgSize, o.svgColor) : i2 === b.Arrows ? T2 = A(o.svgSize, o.svgColor) : i2 === b.Dots ? T2 = M(o.svgSize, o.svgColor) : i2 === b.Pulse ? T2 = B(o.svgSize, o.svgColor) : T2 = W(o.svgSize, o.svgColor));
              var F2 = '<span class="' + g2 + '-icon" style="width:' + o.svgSize + ";height:" + o.svgSize + ';">' + T2 + "</span>", E2 = "";
              0 < x2.length && (x2 = x2.length > o.messageMaxLength ? N(x2).substring(0, o.messageMaxLength) + "..." : N(x2), E2 = '<span style="font-size:' + o.messageFontSize + ";color:" + o.messageColor + ';" class="' + g2 + '-message">' + x2 + "</span>"), Q++;
              var j2 = t.document.createElement("div");
              j2.id = u.ID + "-" + Q, j2.className = g2 + (o.cssAnimation ? " nx-with-animation" : ""), j2.style.position = o.position, j2.style.zIndex = o.zindex, j2.style.background = o.backgroundColor, j2.style.animationDuration = o.cssAnimationDuration + "ms", j2.style.fontFamily = '"' + o.fontFamily + '", ' + s, j2.style.display = "flex", j2.style.flexWrap = "wrap", j2.style.flexDirection = "column", j2.style.alignItems = "center", j2.style.justifyContent = "center", o.rtl && (j2.setAttribute("dir", "rtl"), j2.classList.add("nx-rtl-on")), j2.innerHTML = F2 + E2;
              var O2 = t.getComputedStyle(S2).getPropertyValue("position"), H2 = "string" == typeof O2 ? O2.toLocaleLowerCase("en") : "relative", P2 = Math.round(1.25 * parseInt(o.svgSize)) + 40, U2 = S2.offsetHeight || 0, V2 = "";
              P2 > U2 && (V2 = "min-height:" + P2 + "px;");
              var q2 = "";
              q2 = S2.getAttribute("id") ? "#" + S2.getAttribute("id") : S2.classList[0] ? "." + S2.classList[0] : (S2.tagName || "").toLocaleLowerCase("en");
              var Y2 = "", K = -1 >= ["absolute", "relative", "fixed", "sticky"].indexOf(H2);
              if (K || 0 < V2.length) {
                if (!w("head")) return false;
                K && (Y2 = "position:relative!important;");
                var $ = '<style id="Style-' + u.ID + "-" + Q + '">' + q2 + "." + z2 + "{" + Y2 + V2 + "}</style>", J = t.document.createRange();
                J.selectNode(t.document.head);
                var Z = J.createContextualFragment($);
                t.document.head.appendChild(Z), S2.classList.add(z2);
              }
              S2.appendChild(j2);
            }
          }
        } else var _ = function(e3) {
          var i3 = setTimeout(function() {
            null !== e3.parentNode && e3.parentNode.removeChild(e3);
            var a3 = e3.getAttribute("id"), n3 = t.document.getElementById("Style-" + a3);
            n3 && null !== n3.parentNode && n3.parentNode.removeChild(n3), clearTimeout(i3);
          }, o.cssAnimationDuration);
        }, tt = function(t2) {
          if (t2 && 0 < t2.length) for (var e3, n3 = 0; n3 < t2.length; n3++) e3 = t2[n3], e3 && (e3.classList.add("nx-remove"), _(e3));
          else "string" == typeof a2 ? k('"Notiflix.Block.remove();" function called with "' + a2 + '" selector, but this selector does not have a "Block" element to remove.') : k('"Notiflix.Block.remove();" function called with "' + a2 + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.');
        }, et = function(t2) {
          var e3 = setTimeout(function() {
            t2.classList.remove(z2), clearTimeout(e3);
          }, o.cssAnimationDuration + 300);
        }, it = setTimeout(function() {
          for (var t2, e3 = 0; e3 < C2; e3++) t2 = m2[e3], t2 && (et(t2), D2 = t2.querySelectorAll("[id^=" + u.ID + "]"), tt(D2));
          clearTimeout(it);
        }, l2);
        o = v(true, o, f2);
      }, G = {
        Notify: {
          init: function(t2) {
            e = v(true, m, t2), h(D, "NotiflixNotifyInternalCSS");
          },
          merge: function(t2) {
            return e ? void (e = v(true, e, t2)) : (y("You have to initialize the Notify module before call Merge function."), false);
          },
          success: function(t2, e2, i2) {
            F(l.Success, t2, e2, i2);
          },
          failure: function(t2, e2, i2) {
            F(l.Failure, t2, e2, i2);
          },
          warning: function(t2, e2, i2) {
            F(l.Warning, t2, e2, i2);
          },
          info: function(t2, e2, i2) {
            F(l.Info, t2, e2, i2);
          }
        },
        Report: {
          init: function(t2) {
            i = v(true, p, t2), h(E, "NotiflixReportInternalCSS");
          },
          merge: function(t2) {
            return i ? void (i = v(true, i, t2)) : (y("You have to initialize the Report module before call Merge function."), false);
          },
          success: function(t2, e2, i2, a2, n2) {
            j(c.Success, t2, e2, i2, a2, n2);
          },
          failure: function(t2, e2, i2, a2, n2) {
            j(c.Failure, t2, e2, i2, a2, n2);
          },
          warning: function(t2, e2, i2, a2, n2) {
            j(c.Warning, t2, e2, i2, a2, n2);
          },
          info: function(t2, e2, i2, a2, n2) {
            j(c.Info, t2, e2, i2, a2, n2);
          }
        },
        Confirm: {
          init: function(t2) {
            a = v(true, d, t2), h(O, "NotiflixConfirmInternalCSS");
          },
          merge: function(t2) {
            return a ? void (a = v(true, a, t2)) : (y("You have to initialize the Confirm module before call Merge function."), false);
          },
          show: function(t2, e2, i2, a2, n2, o2, r2) {
            H(f.Show, t2, e2, null, i2, a2, n2, o2, r2);
          },
          ask: function(t2, e2, i2, a2, n2, o2, r2, s2) {
            H(f.Ask, t2, e2, i2, a2, n2, o2, r2, s2);
          },
          prompt: function(t2, e2, i2, a2, n2, o2, r2, s2) {
            H(f.Prompt, t2, e2, i2, a2, n2, o2, r2, s2);
          }
        },
        Loading: {
          init: function(t2) {
            n = v(true, g, t2), h(P, "NotiflixLoadingInternalCSS");
          },
          merge: function(t2) {
            return n ? void (n = v(true, n, t2)) : (y("You have to initialize the Loading module before call Merge function."), false);
          },
          standard: function(t2, e2) {
            U(x.Standard, t2, e2, true, 0);
          },
          hourglass: function(t2, e2) {
            U(x.Hourglass, t2, e2, true, 0);
          },
          circle: function(t2, e2) {
            U(x.Circle, t2, e2, true, 0);
          },
          arrows: function(t2, e2) {
            U(x.Arrows, t2, e2, true, 0);
          },
          dots: function(t2, e2) {
            U(x.Dots, t2, e2, true, 0);
          },
          pulse: function(t2, e2) {
            U(x.Pulse, t2, e2, true, 0);
          },
          custom: function(t2, e2) {
            U(x.Custom, t2, e2, true, 0);
          },
          notiflix: function(t2, e2) {
            U(x.Notiflix, t2, e2, true, 0);
          },
          remove: function(t2) {
            "number" != typeof t2 && (t2 = 0), U(null, null, null, false, t2);
          },
          change: function(t2) {
            V(t2);
          }
        },
        Block: {
          init: function(t2) {
            o = v(true, u, t2), h(q, "NotiflixBlockInternalCSS");
          },
          merge: function(t2) {
            return o ? void (o = v(true, o, t2)) : (y('You have to initialize the "Notiflix.Block" module before call Merge function.'), false);
          },
          standard: function(t2, e2, i2) {
            Y(true, b.Standard, t2, e2, i2);
          },
          hourglass: function(t2, e2, i2) {
            Y(true, b.Hourglass, t2, e2, i2);
          },
          circle: function(t2, e2, i2) {
            Y(true, b.Circle, t2, e2, i2);
          },
          arrows: function(t2, e2, i2) {
            Y(true, b.Arrows, t2, e2, i2);
          },
          dots: function(t2, e2, i2) {
            Y(true, b.Dots, t2, e2, i2);
          },
          pulse: function(t2, e2, i2) {
            Y(true, b.Pulse, t2, e2, i2);
          },
          remove: function(t2, e2) {
            "number" != typeof e2 && (e2 = 0), Y(false, null, t2, null, null, e2);
          }
        }
      };
      return "object" == typeof t.Notiflix ? v(true, t.Notiflix, {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
      }) : {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
      };
    });
  }
});
export default require_notiflix_aio_3_2_7_min();
//# sourceMappingURL=notiflix.js.map
