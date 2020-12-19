(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");






const routes = [
    {
        path: '',
        redirectTo: 'wireless-list',
        pathMatch: 'full',
        // loadChildren: './wireless-list/wireless-list.module#WirelessListModule',
        canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'logon',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginModule) // 登入
    },
    {
        path: 'wireless-list',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | wireless-list-wireless-list-module */[__webpack_require__.e("default~new-planning-new-planning-module~wireless-list-wireless-list-module"), __webpack_require__.e("wireless-list-wireless-list-module")]).then(__webpack_require__.bind(null, /*! ./wireless-list/wireless-list.module */ "./src/app/wireless-list/wireless-list.module.ts")).then(m => m.WirelessListModule),
                canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
            }
        ]
    },
    {
        path: 'new-planning',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | new-planning-new-planning-module */ "default~new-planning-new-planning-module~wireless-list-wireless-list-module").then(__webpack_require__.bind(null, /*! ./new-planning/new-planning.module */ "./src/app/new-planning/new-planning.module.ts")).then(m => m.NewPlanningModule),
                canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
            }
        ]
    },
    {
        path: 'site',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | site-site-module */ "site-site-module").then(__webpack_require__.bind(null, /*! ./site/site.module */ "./src/app/site/site.module.ts")).then(m => m.SiteModule),
                canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _utility_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/spinner/spinner.component */ "./src/app/utility/spinner/spinner.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = ["spinner"];
class AppComponent {
    constructor(authService, translate, _changeDetectorRef) {
        this.authService = authService;
        this._changeDetectorRef = _changeDetectorRef;
        // get last language setting
        if (window.localStorage.getItem('son_language') != null) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang(window.localStorage.getItem('son_language'));
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use(window.localStorage.getItem('son_language'));
        }
        else {
            translate.use('zh-TW');
        }
        translate.onLangChange.subscribe((event) => {
            this.authService.lang = event.lang;
            // TODO This as a workaround.
            this._changeDetectorRef.detectChanges();
            window.localStorage.setItem('son_language', event.lang);
        });
    }
    show() {
        this.spinner.show();
    }
    hide() {
        this.spinner.hide();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.spinner = _t.first);
    } }, decls: 5, vars: 0, consts: [["type", "button", "hidden", "", "id", "ngxSpinnerShow", 3, "click"], ["type", "button", "hidden", "", "id", "ngxSpinnerHide", 3, "click"], ["spinner", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-spinner", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_utility_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { spinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['spinner']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utility_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility/spinner/spinner.module */ "./src/app/utility/spinner/spinner.module.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");























// 建立TranslateHttpLoader作為語系檔的讀取器
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _utility_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _utility_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _utility_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                            useFactory: createTranslateLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
                        }
                    })
                ],
                providers: [
                    _service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                    _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








const _c0 = function () { return [""]; };
class LayoutComponent {
    constructor(authService, router, http, dialog) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    logout() {
        // window.clearInterval(this.timeInterval);
        this.authService.logout();
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 17, vars: 9, consts: [[1, "wrap"], [1, "header"], [3, "routerLink"], [1, "fas", "fa-home"], [1, "headerRightarea"], ["name", "fontStyle", "aria-label", "Font Style", 3, "value", "valueChange"], ["value", "zh-TW", "selected", "", 3, "change"], ["value", "en", 3, "change"], ["href", "javascript:void(0)", 3, "click"], [1, "fas", "fa-sign-out-alt", "logout"], [1, "content"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Athena Planning Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LayoutComponent_Template_mat_button_toggle_group_valueChange_6_listener($event) { return ctx.authService.lang = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LayoutComponent_Template_mat_button_toggle_change_7_listener() { return ctx.authService.changeLanguage("zh-TW"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LayoutComponent_Template_mat_button_toggle_change_10_listener() { return ctx.authService.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_13_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.authService.lang);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "language.tw"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "language.en"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.header[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 0.8em;\n  height: 54px;\n  border-bottom: 1px solid #212529;\n  background-color: #24272b;\n  color: #fff;\n  padding: 1em;\n}\n.header[_ngcontent-%COMP%]   .mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: #fff;\n  background: transparent;\n  border: none;\n  width: 5em;\n}\n.header[_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  border: 0;\n}\n.header[_ngcontent-%COMP%]   .mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #666 !important;\n  color: #fff !important;\n  border-radius: 5px;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  display: inline-block;\n  vertical-align: sub;\n  margin-right: 1em;\n}\nh1[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.6em;\n  margin-left: 0.5em;\n  cursor: pointer;\n  outline: 0;\n}\nh1[_ngcontent-%COMP%]   .fa-home[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.7em;\n  margin-left: 0.5em;\n  opacity: 0.5;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n[_nghost-%COMP%]     h2 .mat-button, [_nghost-%COMP%]     h3 .mat-button {\n  color: #fff;\n  background-color: #3183dc;\n  line-height: 2;\n  margin-left: 0.5em;\n  font-size: 0.7em;\n}\n.headerRightarea[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0%;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 2em;\n}\ntable[_ngcontent-%COMP%] {\n  margin: 1em 0 3em;\n  width: 100%;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  line-height: 2em;\n  padding: 0.3em 1em;\n}\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #257dc5;\n  background-color: #ddd;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2e85d6;\n  cursor: pointer;\n  font-size: 1.2em;\n}\n.mat-progress-bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 15px;\n  overflow: hidden;\n  position: relative;\n  transition: opacity 250ms linear;\n  width: 10em;\n  margin-left: 0.5em;\n}\n.logout[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin: 0 1em;\n}\n[_nghost-%COMP%]     .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 32px;\n  padding: 0 12px;\n  font-size: 0.85em !important;\n}\nspan.headerRightarea[_ngcontent-%COMP%] {\n  margin: 0.8em 0 0 0;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-header {\n  font-weight: bold;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-header-title {\n  font-size: 0.9em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW0vYXRoZW5hL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNFRjtBREFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQThCLFdBQUE7RUFDOUIsWUFBQTtBQ0lGO0FERkE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0tGO0FESEE7O0VBRUUsU0FBQTtBQ01GO0FESkE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNPRjtBRExBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FETkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ1NGO0FEUEE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVUY7QURSQTtFQUNFLGdCQUFBO0FDV0Y7QURUQTs7RUFFRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1lGO0FEVEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FDWUY7QURWQTtFQUNFLFlBQUE7QUNhRjtBRFhBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDY0Y7QURaQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNlRjtBRGJBO0VBQ0UsZ0NBQUE7RUFDQSxzQkFBQTtBQ2dCRjtBRGRBO0VBQ0UsNkJBQUE7QUNpQkY7QURmQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNrQkY7QURoQkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNtQkY7QURqQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNvQkY7QURsQkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ3FCRjtBRG5CQTtFQUNFLG1CQUFBO0FDc0JGO0FEcEJBO0VBQ0UsaUJBQUE7QUN1QkY7QURwQkE7RUFDRSwyQkFBQTtBQ3VCRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Ki9cbi5mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi53cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgaGVpZ2h0OiA1NHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjcyYjsgICAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5oZWFkZXIgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDVlbTtcbn1cbi5oZWFkZXIgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsIFxuLmhlYWRlciAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYm9yZGVyOiAwO1xufVxuLmhlYWRlciAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjYhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5oZWFkZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuaDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG59XG5oMSAuZmEtaG9tZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAuN2VtO1xuICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgb3BhY2l0eTogLjU7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG46aG9zdCA6Om5nLWRlZXAgaDIgLm1hdC1idXR0b24sXG46aG9zdCA6Om5nLWRlZXAgaDMgLm1hdC1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxODNkYztcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICBmb250LXNpemU6IC43ZW07XG5cbn1cbi5oZWFkZXJSaWdodGFyZWEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDAlO1xufVxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyZW07XG59XG50YWJsZSB7XG4gIG1hcmdpbjogMWVtIDAgM2VtO1xuICB3aWR0aDogMTAwJTtcbn1cbnRoLHRkIHtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgcGFkZGluZzogLjNlbSAxZW07XG59XG50aGVhZCB0ciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMzcsIDEyNSwgMTk3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbnRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG50ZCBpIHtcbiAgY29sb3I6IHJnYig0NiwgMTMzLCAyMTQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubWF0LXByb2dyZXNzLWJhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgbGluZWFyO1xuICB3aWR0aDogMTBlbTtcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XG59XG4ubG9nb3V0IHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgbWFyZ2luOiAwIDFlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGZvbnQtc2l6ZTogLjg1ZW0haW1wb3J0YW50O1xufVxuc3Bhbi5oZWFkZXJSaWdodGFyZWEge1xuICBtYXJnaW46IC44ZW0gMCAwIDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IC45ZW0haW1wb3J0YW50O1xufVxuIiwiLypzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSovXG4uZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi53cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgaGVpZ2h0OiA1NHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjcyYjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmhlYWRlciAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNWVtO1xufVxuXG4uaGVhZGVyIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLmhlYWRlciAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaGVhZGVyIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5oZWFkZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5oMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG59XG5cbmgxIC5mYS1ob21lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaDIgLm1hdC1idXR0b24sXG46aG9zdCA6Om5nLWRlZXAgaDMgLm1hdC1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxODNkYztcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLmhlYWRlclJpZ2h0YXJlYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMCU7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMmVtO1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbjogMWVtIDAgM2VtO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgsIHRkIHtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgcGFkZGluZzogMC4zZW0gMWVtO1xufVxuXG50aGVhZCB0ciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjU3ZGM1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG50Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG50ZCBpIHtcbiAgY29sb3I6ICMyZTg1ZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGxpbmVhcjtcbiAgd2lkdGg6IDEwZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLmxvZ291dCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIG1hcmdpbjogMCAxZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGZvbnQtc2l6ZTogMC44NWVtICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4uaGVhZGVyUmlnaHRhcmVhIHtcbiAgbWFyZ2luOiAwLjhlbSAwIDAgMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (window.sessionStorage.getItem('son_session') != null) {
            return true;
        }
        this.router.navigate(['/logon']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class AuthService {
    constructor(http, router, translateService) {
        this.http = http;
        this.router = router;
        this.translateService = translateService;
        this.API_URL = 'http://211.20.94.210:3000/son';
        this.userToken = null;
        this.lang = 'zh-TW';
        this.userToken = window.sessionStorage.getItem('son_session');
    }
    setUserToken(sonSession) {
        if (sonSession == null) {
            window.sessionStorage.removeItem('son_session');
        }
        else {
            window.sessionStorage.setItem('son_session', sonSession);
        }
        this.userToken = sonSession;
    }
    /**
     * logout
     */
    logout() {
        const form = {
            session: this.userToken
        };
        this.http.post(`${this.API_URL}/logout`, JSON.stringify(form)).subscribe(res => {
            this.setUserToken(null);
            this.router.navigate(['/logon']);
        });
    }
    /**
     * get token from server and save TokenResponse to localstorage
     * @param treq TokenRequest
     */
    logon(loginForm) {
        return this.http.post(`${this.API_URL}/login`, loginForm);
    }
    changeLanguage(langulage) {
        this.translateService.use(langulage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utility/spinner/spinner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/utility/spinner/spinner.component.ts ***!
  \******************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");



class SpinnerComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    show() {
        this.spinner.show();
    }
    hide() {
        this.spinner.hide();
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 3, vars: 0, consts: [["bdColor", "rgba(51,51,51,0.5)", "size", "medium", "color", "#fff", "type", "ball-scale-multiple"], [2, "font-size", "20px", "color", "white"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Processing...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdHkvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utility/spinner/spinner.module.ts":
/*!***************************************************!*\
  !*** ./src/app/utility/spinner/spinner.module.ts ***!
  \***************************************************/
/*! exports provided: SpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component */ "./src/app/utility/spinner/spinner.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");





class SpinnerModule {
}
SpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SpinnerModule });
SpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]], exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]
                ],
                exports: [
                    _spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]
                ],
                declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
                entryComponents: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    apiUrl: 'http://localhost:8080'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tim/athena/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map