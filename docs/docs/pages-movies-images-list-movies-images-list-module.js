(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movies-images-list-movies-images-list-module"],{

/***/ "/R8W":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/movies-images-list/movies-images-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MoviesImagesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesImagesListComponent", function() { return MoviesImagesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-list/page-list.component */ "okRV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ "JnPI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/search-result/search-result.component */ "pFmz");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ "CUb1");
/* harmony import */ var _components_grid_images_grid_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/grid-images/grid-images.component */ "yBRj");









function MoviesImagesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
function MoviesImagesListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function MoviesImagesListComponent_div_2_Template_app_pagination_changePage_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChangePage($event); });
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
class MoviesImagesListComponent extends _components_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_1__["PageListComponent"] {
    constructor(meta, titleService, injector) {
        super(injector);
        this.meta = meta;
        this.titleService = titleService;
    }
    initialize() {
        this.endpoint = 'movies';
        this.link = 'movies';
        this.placeholder = 'movies...';
        this.results = 'Movies';
        this.found = 'movies';
        this.creation = 'Movie';
        this.loaded = false;
        this.icon = 'fas fa-film';
        this.itemsCount = 0;
        this.itemsPerPage = 24;
        this.linkRoute = 'movies-images';
        this.columns = [
            { name: 'Id', field: 'id', align: 'left', color: 'black', font: '' },
            { name: 'Name', field: 'name', align: 'left', color: 'text-primary', font: 'bold' },
            { name: 'Date', field: 'releaseDate', align: 'center', color: 'text-primary', font: '' },
        ];
        super.initialize();
    }
    ngOnInit() {
        this.titleService.setTitle('New Movies: angular.ganatan');
        this.meta.addTag({
            name: 'angular.ganatan',
            content: 'danny ganatan'
        });
        this.meta.updateTag({
            name: 'description',
            content: 'All the new movies'
        });
    }
    selectItem(id) {
        this.router.navigate(['/crud/' + this.link, id]);
    }
}
MoviesImagesListComponent.ɵfac = function MoviesImagesListComponent_Factory(t) { return new (t || MoviesImagesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
MoviesImagesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesImagesListComponent, selectors: [["app-movies-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 7, consts: [[3, "searchField", "itemsCount", "icon", "results", "placeholder", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [3, "searchField", "found", "creation", "link"], [1, "col", "mt-4"], [3, "count", "page", "perPage", "changePage"], [3, "items", "columns", "link"]], template: function MoviesImagesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function MoviesImagesListComponent_Template_app_search_bar_search_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesImagesListComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoviesImagesListComponent_div_2_Template, 4, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchField", ctx.searchField)("itemsCount", ctx.itemsCount)("icon", ctx.icon)("results", ctx.results)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.itemsCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultComponent"], _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"], _components_grid_images_grid_images_component__WEBPACK_IMPORTED_MODULE_7__["GridImagesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZXMtaW1hZ2VzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesImagesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies-list',
                templateUrl: './movies-images-list.component.html',
                styleUrls: ['./movies-images-list.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "0OZP":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/movies-images-list/movies-images-list-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MoviesImagesListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesImagesListRoutingModule", function() { return MoviesImagesListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movies_images_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-images-list.component */ "/R8W");





const routes = [
    { path: '', component: _movies_images_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesImagesListComponent"] },
];
class MoviesImagesListRoutingModule {
}
MoviesImagesListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesImagesListRoutingModule });
MoviesImagesListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesImagesListRoutingModule_Factory(t) { return new (t || MoviesImagesListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesImagesListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesImagesListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "l/Lk":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/movies-images-list/movies-images-list.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: MoviesImagesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesImagesListModule", function() { return MoviesImagesListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movies_images_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-images-list.component */ "/R8W");
/* harmony import */ var _movies_images_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-images-list-routing.module */ "0OZP");
/* harmony import */ var _components_grid_images_grid_images_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/grid-images/grid-images.module */ "HmT+");
/* harmony import */ var _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination/pagination.module */ "8KUF");
/* harmony import */ var _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/search-bar/search-bar.module */ "00qY");
/* harmony import */ var _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/search-result/search-result.module */ "EAiX");









class MoviesImagesListModule {
}
MoviesImagesListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesImagesListModule });
MoviesImagesListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesImagesListModule_Factory(t) { return new (t || MoviesImagesListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _movies_images_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesImagesListRoutingModule"],
            _components_grid_images_grid_images_module__WEBPACK_IMPORTED_MODULE_4__["GridImagesModule"],
            _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
            _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
            _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesImagesListModule, { declarations: [_movies_images_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesImagesListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _movies_images_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesImagesListRoutingModule"],
        _components_grid_images_grid_images_module__WEBPACK_IMPORTED_MODULE_4__["GridImagesModule"],
        _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
        _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
        _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"]], exports: [_movies_images_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesImagesListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesImagesListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _movies_images_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesImagesListComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _movies_images_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesImagesListRoutingModule"],
                    _components_grid_images_grid_images_module__WEBPACK_IMPORTED_MODULE_4__["GridImagesModule"],
                    _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
                    _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
                    _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"],
                ],
                exports: [
                    _movies_images_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesImagesListComponent"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-movies-images-list-movies-images-list-module.js.map