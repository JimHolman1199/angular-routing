(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movies-list-movies-list-module"],{

/***/ "0xP/":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/movies-list/movies-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-list/page-list.component */ "okRV");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ "JnPI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search-result/search-result.component */ "pFmz");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ "CUb1");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/grid/grid.component */ "7WPj");








function MoviesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
function MoviesListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function MoviesListComponent_div_2_Template_app_pagination_changePage_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChangePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function MoviesListComponent_div_2_Template_app_pagination_changePage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onChangePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", ctx_r1.itemsCount)("page", ctx_r1.itemsPage)("perPage", ctx_r1.itemsPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.items)("columns", ctx_r1.columns)("link", ctx_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", ctx_r1.itemsCount)("page", ctx_r1.itemsPage)("perPage", ctx_r1.itemsPerPage);
} }
class MoviesListComponent extends _components_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_1__["PageListComponent"] {
    constructor(injector) {
        super(injector);
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
        this.itemsPerPage = 5;
        this.linkRoute = 'movies';
        this.columns = [
            {
                type: 'num',
                title: { caption: 'N°', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
                data: { field: 'N°', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
            },
            {
                type: 'pos',
                title: { caption: 'Pos', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
                data: { field: 'Pos', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
            },
            {
                title: { caption: 'Id', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
                data: { field: 'id', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
            },
            {
                type: 'wiki',
                title: { caption: 'Wiki', class: 'text-center text-success' },
                data: { field: 'wikipediaLink', class: 'text-center text-success' }
            },
            {
                type: 'smallimg',
                title: { caption: 'Img', class: 'font-weight-bold text-center' },
                data: { field: 'image', class: 'font-weight-bold text-center', height: 129, width: 90 }
            },
            {
                title: { caption: 'Name', class: 'text-primary font-weight-bold text-center' },
                data: { field: 'name', class: 'text-primary font-weight-bold text-center' }
            },
            {
                title: { caption: 'Date', class: 'font-weight-bold text-center' },
                data: { field: 'releaseDate', class: 'text-center' }
            },
        ];
        super.initialize();
    }
}
MoviesListComponent.ɵfac = function MoviesListComponent_Factory(t) { return new (t || MoviesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
MoviesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesListComponent, selectors: [["app-movies-list-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 7, consts: [[3, "searchField", "itemsCount", "icon", "results", "placeholder", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [3, "searchField", "found", "creation", "link"], [1, "col", "mt-4"], [3, "count", "page", "perPage", "changePage"], [3, "items", "columns", "link"]], template: function MoviesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function MoviesListComponent_Template_app_search_bar_search_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesListComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoviesListComponent_div_2_Template, 5, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchField", ctx.searchField)("itemsCount", ctx.itemsCount)("icon", ctx.icon)("results", ctx.results)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.itemsCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.itemsCount != 0);
    } }, directives: [_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultComponent"], _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"]], styles: ["th[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n    text-align: center;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJtb3ZpZXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies-list-list',
                templateUrl: './movies-list.component.html',
                styleUrls: ['./movies-list.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "BsCE":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/movies-list/movies-list-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: MoviesListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListRoutingModule", function() { return MoviesListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movies_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-list.component */ "0xP/");





const routes = [
    { path: '', component: _movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"] },
];
class MoviesListRoutingModule {
}
MoviesListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesListRoutingModule });
MoviesListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesListRoutingModule_Factory(t) { return new (t || MoviesListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mtru":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/movies-list/movies-list.module.ts ***!
  \******************************************************************************************/
/*! exports provided: MoviesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListModule", function() { return MoviesListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movies_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-list.component */ "0xP/");
/* harmony import */ var _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-list-routing.module */ "BsCE");
/* harmony import */ var _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/grid/grid.module */ "4GLi");
/* harmony import */ var _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination/pagination.module */ "8KUF");
/* harmony import */ var _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/search-bar/search-bar.module */ "00qY");
/* harmony import */ var _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/search-result/search-result.module */ "EAiX");









class MoviesListModule {
}
MoviesListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesListModule });
MoviesListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesListModule_Factory(t) { return new (t || MoviesListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesListRoutingModule"],
            _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
            _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
            _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
            _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesListModule, { declarations: [_movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesListRoutingModule"],
        _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
        _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
        _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
        _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"]], exports: [_movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesListRoutingModule"],
                    _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
                    _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
                    _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarModule"],
                    _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_7__["SearchResultModule"],
                ],
                exports: [
                    _movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-movies-list-movies-list-module.js.map