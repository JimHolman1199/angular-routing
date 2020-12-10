(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cities-list-cities-list-module"],{

/***/ "8sAL":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/cities-list/cities-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CitiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesListComponent", function() { return CitiesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-list/page-list.component */ "okRV");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ "JnPI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search-result/search-result.component */ "pFmz");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ "CUb1");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/grid/grid.component */ "7WPj");








function CitiesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
function CitiesListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function CitiesListComponent_div_2_Template_app_pagination_changePage_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChangePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-grid", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function CitiesListComponent_div_2_Template_app_pagination_changePage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onChangePage($event); });
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
class CitiesListComponent extends _components_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_1__["PageListComponent"] {
    constructor(injector) {
        super(injector);
    }
    initialize() {
        this.endpoint = 'cities';
        this.link = 'cities';
        this.placeholder = 'cities...';
        this.results = 'Cities';
        this.found = 'cities';
        this.creation = 'City';
        this.loaded = false;
        this.icon = 'fas fa-city';
        this.itemsCount = 0;
        this.itemsPerPage = 10;
        this.linkRoute = 'cities';
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
                title: { caption: 'Name', class: 'text-primary font-weight-bold text-center' },
                data: { field: 'name', class: 'text-primary font-weight-bold text-center' }
            },
            {
                type: 'checkbox',
                title: { caption: 'Capital', class: 'font-weight-bold text-center' },
                data: { field: 'capital', class: 'font-weight-bold text-center' }
            },
            {
                type: 'subfield',
                title: { caption: 'Country', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
                data: {
                    field: 'country',
                    subfield: 'name',
                    class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
                }
            },
            {
                type: 'img',
                title: { caption: 'Flag', class: 'text-secondary font-weight-bold text-center' },
                data: { field: 'image', class: 'font-weight-bold text-center' }
            },
            {
                type: 'subfield',
                title: { caption: 'Continent', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
                data: {
                    field: 'continent',
                    subfield: 'name',
                    class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
                }
            },
            {
                type: 'subfield',
                title: { caption: 'Code', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
                data: {
                    field: 'continent',
                    subfield: 'code',
                    class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
                }
            },
        ];
        super.initialize();
    }
}
CitiesListComponent.ɵfac = function CitiesListComponent_Factory(t) { return new (t || CitiesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
CitiesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CitiesListComponent, selectors: [["app-cities-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 7, consts: [[3, "searchField", "itemsCount", "icon", "results", "placeholder", "search"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], [3, "searchField", "found", "creation", "link"], [1, "col", "mt-4"], [3, "count", "page", "perPage", "changePage"], [3, "items", "columns", "link"]], template: function CitiesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function CitiesListComponent_Template_app_search_bar_search_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CitiesListComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CitiesListComponent_div_2_Template, 5, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchField", ctx.searchField)("itemsCount", ctx.itemsCount)("icon", ctx.icon)("results", ctx.results)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.itemsCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.itemsCount != 0);
    } }, directives: [_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultComponent"], _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"]], styles: ["td[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdGllcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImNpdGllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitiesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cities-list',
                templateUrl: './cities-list.component.html',
                styleUrls: ['./cities-list.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "JQqT":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/cities-list/cities-list-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CitiesListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesListRoutingModule", function() { return CitiesListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cities_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities-list.component */ "8sAL");





const routes = [
    { path: '', component: _cities_list_component__WEBPACK_IMPORTED_MODULE_2__["CitiesListComponent"] },
];
class CitiesListRoutingModule {
}
CitiesListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CitiesListRoutingModule });
CitiesListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CitiesListRoutingModule_Factory(t) { return new (t || CitiesListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CitiesListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitiesListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "P/VJ":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/pages/cities-list/cities-list.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CitiesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesListModule", function() { return CitiesListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cities_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities-list.component */ "8sAL");
/* harmony import */ var _cities_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cities-list-routing.module */ "JQqT");
/* harmony import */ var _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/grid/grid.module */ "4GLi");
/* harmony import */ var _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/pagination/pagination.module */ "8KUF");
/* harmony import */ var _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/search-bar/search-bar.module */ "00qY");
/* harmony import */ var _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/search-result/search-result.module */ "EAiX");










class CitiesListModule {
}
CitiesListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CitiesListModule });
CitiesListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CitiesListModule_Factory(t) { return new (t || CitiesListModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _cities_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CitiesListRoutingModule"],
            _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
            _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
            _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_7__["SearchBarModule"],
            _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_8__["SearchResultModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CitiesListModule, { declarations: [_cities_list_component__WEBPACK_IMPORTED_MODULE_3__["CitiesListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _cities_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CitiesListRoutingModule"],
        _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
        _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
        _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_7__["SearchBarModule"],
        _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_8__["SearchResultModule"]], exports: [_cities_list_component__WEBPACK_IMPORTED_MODULE_3__["CitiesListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitiesListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _cities_list_component__WEBPACK_IMPORTED_MODULE_3__["CitiesListComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _cities_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CitiesListRoutingModule"],
                    _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
                    _components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
                    _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_7__["SearchBarModule"],
                    _components_search_result_search_result_module__WEBPACK_IMPORTED_MODULE_8__["SearchResultModule"],
                ],
                exports: [
                    _cities_list_component__WEBPACK_IMPORTED_MODULE_3__["CitiesListComponent"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-cities-list-cities-list-module.js.map