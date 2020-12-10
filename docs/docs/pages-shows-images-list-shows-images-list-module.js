(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shows-images-list-shows-images-list-module"],{

/***/ "9Kxf":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/shows-images-list/shows-images-list.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ShowsImagesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsImagesListModule", function() { return ShowsImagesListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shows_images_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shows-images-list.component */ "9U/X");
/* harmony import */ var _shows_images_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shows-images-list-routing.module */ "KNoU");
/* harmony import */ var _components_grid_images_grid_images_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/grid-images/grid-images.module */ "HmT+");
/* harmony import */ var _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination/pagination.module */ "8KUF");
/* harmony import */ var _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/search-bar/search-bar.module */ "00qY");
/* harmony import */ var _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/search-result/search-result.module */ "EAiX");









class ShowsImagesListModule {
}
ShowsImagesListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowsImagesListModule });
ShowsImagesListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowsImagesListModule_Factory(t) { return new (t || ShowsImagesListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shows_images_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowsImagesListRoutingModule"],
            _components_grid_images_grid_images_module__WEBPACK_IMPORTED_MODULE_4__["GridImagesModule"],
            _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
            _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
            _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowsImagesListModule, { declarations: [_shows_images_list_component__WEBPACK_IMPORTED_MODULE_2__["ShowsImagesListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shows_images_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowsImagesListRoutingModule"],
        _components_grid_images_grid_images_module__WEBPACK_IMPORTED_MODULE_4__["GridImagesModule"],
        _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
        _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
        _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"]], exports: [_shows_images_list_component__WEBPACK_IMPORTED_MODULE_2__["ShowsImagesListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsImagesListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shows_images_list_component__WEBPACK_IMPORTED_MODULE_2__["ShowsImagesListComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shows_images_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowsImagesListRoutingModule"],
                    _components_grid_images_grid_images_module__WEBPACK_IMPORTED_MODULE_4__["GridImagesModule"],
                    _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
                    _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
                    _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"],
                ],
                exports: [
                    _shows_images_list_component__WEBPACK_IMPORTED_MODULE_2__["ShowsImagesListComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "9U/X":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/shows-images-list/shows-images-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ShowsImagesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsImagesListComponent", function() { return ShowsImagesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-list/page-list.component */ "okRV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ "JnPI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/search-result/search-result.component */ "pFmz");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ "CUb1");
/* harmony import */ var _components_grid_images_grid_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/grid-images/grid-images.component */ "yBRj");









function ShowsImagesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search-result", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchField", ctx_r0.searchField)("found", ctx_r0.found)("creation", ctx_r0.creation)("link", ctx_r0.link);
} }
function ShowsImagesListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function ShowsImagesListComponent_div_2_Template_app_pagination_changePage_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChangePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid-images", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", ctx_r1.itemsCount)("page", ctx_r1.itemsPage)("perPage", ctx_r1.itemsPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.items)("columns", ctx_r1.columns)("link", ctx_r1.link);
} }
class ShowsImagesListComponent extends _components_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_1__["PageListComponent"] {
    constructor(meta, titleService, injector) {
        super(injector);
        this.meta = meta;
        this.titleService = titleService;
    }
    initialize() {
        this.endpoint = 'shows';
        this.link = 'shows';
        this.placeholder = 'shows...';
        this.results = 'Shows';
        this.found = 'shows';
        this.creation = 'Show';
        this.loaded = false;
        this.icon = 'fas fa-laptop';
        this.itemsCount = 0;
        this.itemsPerPage = 24;
        this.linkRoute = 'shows-images';
        this.columns = [
            { name: 'Id', field: 'id', align: 'left', color: 'black', font: '' },
            { name: 'Name', field: 'name', align: 'left', color: 'text-primary', font: 'bold' },
            { name: 'Date', field: 'releaseDate', align: 'center', color: 'text-primary', font: '' },
        ];
        super.initialize();
    }
    ngOnInit() {
        this.titleService.setTitle('New TV Shows : angular.ganatan');
        this.meta.addTag({
            name: 'angular.ganatan',
            content: 'danny ganatan'
        });
        this.meta.updateTag({
            name: 'description',
            content: 'All the new TV Shows'
        });
    }
    selectItem(id) {
        this.router.navigate(['/crud/' + this.link, id]);
    }
}
ShowsImagesListComponent.ɵfac = function ShowsImagesListComponent_Factory(t) { return new (t || ShowsImagesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ShowsImagesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowsImagesListComponent, selectors: [["app-shows-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 7, consts: [[3, "searchField", "itemsCount", "icon", "results", "placeholder", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [3, "searchField", "found", "creation", "link"], [1, "col", "mt-4"], [3, "count", "page", "perPage", "changePage"], [3, "items", "columns", "link"]], template: function ShowsImagesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function ShowsImagesListComponent_Template_app_search_bar_search_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowsImagesListComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowsImagesListComponent_div_2_Template, 4, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchField", ctx.searchField)("itemsCount", ctx.itemsCount)("icon", ctx.icon)("results", ctx.results)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.itemsCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultComponent"], _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"], _components_grid_images_grid_images_component__WEBPACK_IMPORTED_MODULE_7__["GridImagesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93cy1pbWFnZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsImagesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shows-list',
                templateUrl: './shows-images-list.component.html',
                styleUrls: ['./shows-images-list.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "KNoU":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/shows-images-list/shows-images-list-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ShowsImagesListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsImagesListRoutingModule", function() { return ShowsImagesListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shows_images_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shows-images-list.component */ "9U/X");





const routes = [
    { path: '', component: _shows_images_list_component__WEBPACK_IMPORTED_MODULE_2__["ShowsImagesListComponent"] },
];
class ShowsImagesListRoutingModule {
}
ShowsImagesListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowsImagesListRoutingModule });
ShowsImagesListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowsImagesListRoutingModule_Factory(t) { return new (t || ShowsImagesListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowsImagesListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsImagesListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-shows-images-list-shows-images-list-module.js.map