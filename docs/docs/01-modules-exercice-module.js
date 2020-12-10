(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["01-modules-exercice-module"],{

/***/ "6LNV":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/application/example-typescript/01-modules/exercice.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExerciceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciceComponent", function() { return ExerciceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "PcKA");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "G0Qr");








class ExerciceComponent {
    constructor() { }
    ngOnInit() {
        this.testFunction = Object(_functions__WEBPACK_IMPORTED_MODULE_1__["functionExport1"])('without using as') + '<br>' +
            Object(_functions__WEBPACK_IMPORTED_MODULE_1__["function1"])('with using as') + '<br>' +
            Object(_functions__WEBPACK_IMPORTED_MODULE_1__["function2"])() + '<br>' +
            Object(_functions__WEBPACK_IMPORTED_MODULE_1__["function3"])();
        this.testVariable = _variables__WEBPACK_IMPORTED_MODULE_2__["variableExport10"] + '<br>' +
            _variables__WEBPACK_IMPORTED_MODULE_2__["variable10"] + '<br>' +
            _variables__WEBPACK_IMPORTED_MODULE_2__["variable20"];
    }
}
ExerciceComponent.ɵfac = function ExerciceComponent_Factory(t) { return new (t || ExerciceComponent)(); };
ExerciceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExerciceComponent, selectors: [["app-exercice"]], decls: 10, vars: 2, consts: [[3, "innerHTML"]], template: function ExerciceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Test Import-Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test Functions Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Test Variables Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.testFunction, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.testVariable, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGVyY2ljZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exercice',
                templateUrl: './exercice.component.html',
                styleUrls: ['./exercice.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "G0Qr":
/*!********************************************************************************!*\
  !*** ./src/app/modules/application/example-typescript/01-modules/variables.ts ***!
  \********************************************************************************/
/*! exports provided: variableExport10, variable10, variable20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableExport10", function() { return variableExport10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable10", function() { return variableExport10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable20", function() { return variable20; });
const variableExport10 = 10;
const variable20 = 20;



/***/ }),

/***/ "KH94":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/application/example-typescript/01-modules/exercice.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ExerciceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciceModule", function() { return ExerciceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _exercice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercice-routing.module */ "zgL1");
/* harmony import */ var _exercice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercice.component */ "6LNV");





class ExerciceModule {
}
ExerciceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExerciceModule });
ExerciceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExerciceModule_Factory(t) { return new (t || ExerciceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _exercice_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExerciceRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExerciceModule, { declarations: [_exercice_component__WEBPACK_IMPORTED_MODULE_3__["ExerciceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _exercice_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExerciceRoutingModule"]], exports: [_exercice_component__WEBPACK_IMPORTED_MODULE_3__["ExerciceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _exercice_component__WEBPACK_IMPORTED_MODULE_3__["ExerciceComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _exercice_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExerciceRoutingModule"]
                ],
                exports: [
                    _exercice_component__WEBPACK_IMPORTED_MODULE_3__["ExerciceComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "PcKA":
/*!********************************************************************************!*\
  !*** ./src/app/modules/application/example-typescript/01-modules/functions.ts ***!
  \********************************************************************************/
/*! exports provided: functionExport1, function1, function2, function3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functionExport1", function() { return functionExport1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "function1", function() { return functionExport1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "function2", function() { return function2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "function3", function() { return function3; });
function functionExport1(param) {
    return 'functionExport1 : ' + param;
}
function function2() {
    return 'function2';
}
function function3() {
    return 'function3';
}



/***/ }),

/***/ "zgL1":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/application/example-typescript/01-modules/exercice-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ExerciceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciceRoutingModule", function() { return ExerciceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _exercice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercice.component */ "6LNV");





const routes = [
    { path: '', component: _exercice_component__WEBPACK_IMPORTED_MODULE_2__["ExerciceComponent"], children: [] }
];
class ExerciceRoutingModule {
}
ExerciceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExerciceRoutingModule });
ExerciceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExerciceRoutingModule_Factory(t) { return new (t || ExerciceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExerciceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=01-modules-exercice-module.js.map