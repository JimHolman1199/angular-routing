(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cities-form-cities-form-module~pages-continents-form-continents-form-module~pages-coun~8e7d49ee"],{

/***/ "Pqrp":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/components/page-form/page-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFormComponent", function() { return PageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config/config.service */ "EjlV");
/* harmony import */ var _services_items_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/items/items.service */ "oUMQ");






class PageFormComponent {
    constructor(injector) {
        this.item = {};
        this.titleForm = {};
        this.route = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        this.configService = injector.get(_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]);
        this.itemsService = injector.get(_services_items_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]);
        this.fb = injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]);
        this.initialize();
        this.createForm();
        this.getItemById();
    }
    initialize() {
        this.api = this.configService.config.api;
        this.url = this.configService.config.url + this.endpoint;
        if (this.api) {
            this.datasourceColor = 'text-primary';
            this.datasource = 'CRUD API';
        }
        else {
            this.datasource = 'LOCAL JSON (no crud)';
            this.datasourceColor = 'text-danger';
        }
    }
    createForm() {
    }
    getItemById() {
        this.route.params
            .subscribe(params => {
            if (params.id !== undefined) {
                this.itemsService.getItem(this.api, this.url, params.id)
                    .subscribe(data => {
                    console.log('0001:' + JSON.stringify(data));
                    if ((data !== null) && (data !== undefined)) {
                        this.item = data;
                        this.setFormValue(this.item);
                    }
                    else {
                        this.resetForm();
                    }
                });
            }
        });
    }
    resetForm() {
        this.setFormValue(this.item);
    }
    setFormValue(item) {
    }
    onCreate() {
        this.resetForm();
    }
    onUpdate() {
        this.item = this.form.value;
        const id = this.item.id;
        if ((id === null) || (id === undefined)) {
            this.createItem(this.url, this.item);
        }
        else {
            this.updateItem(this.url, this.item, id);
        }
    }
    onDelete() {
        if ((this.item.id !== undefined) && (this.item.id != null)) {
            this.deleteItem(this.url, this.item.id);
        }
    }
    onCopy() {
        this.item.id = null;
        this.form.get('id').setValue(null);
    }
    createItem(url, item) {
        this.itemsService.addItem(url, item)
            .subscribe(data => {
            this.item = data;
            this.form.setValue(data);
        });
    }
    updateItem(url, item, id) {
        this.itemsService.updateItem(item, id, url)
            .subscribe(data => {
            this.item = data;
            this.form.setValue(this.item);
        });
    }
    deleteItem(url, id) {
        this.itemsService.deleteItem(url, id)
            .subscribe(data => {
            this.resetForm();
        });
    }
}
PageFormComponent.ɵfac = function PageFormComponent_Factory(t) { return new (t || PageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
PageFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageFormComponent, selectors: [["app-page-form"]], decls: 2, vars: 0, template: function PageFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-form',
                templateUrl: './page-form.component.html',
                styleUrls: ['./page-form.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "oUMQ":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/application/example-crud/services/items/items.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
class ItemsService {
    constructor(http) {
        this.http = http;
    }
    filterJsonItem(value, id) {
        let dataTmp = null;
        value.map((row, index, data) => {
            const idTmp = parseInt(id, 10);
            if (data[index].id === idTmp) {
                dataTmp = data[index];
            }
        });
        return dataTmp;
    }
    filterJsonItemsCount(value, text) {
        let resultCount = 0;
        if ((text !== undefined) && (text != null)) {
            const lcText = text.toString().toLowerCase();
            const result = value.filter(e => ((e.name.toLowerCase().indexOf(lcText) === 0)));
            resultCount = result.length;
        }
        else {
            resultCount = value.length;
        }
        return { count: resultCount };
    }
    filterJsonItems(value, text, itemsPerPage, page) {
        let result;
        if ((text !== undefined) && (text != null)) {
            const lcText = text.toString().toLowerCase();
            result = value.filter(e => ((e.name.toLowerCase().indexOf(lcText) === 0)));
        }
        else {
            result = value;
        }
        const start = itemsPerPage * (page - 1);
        const end = itemsPerPage * (page - 1) + itemsPerPage - 1;
        const data = [];
        result.map((row, index) => {
            if ((index >= start) && (index <= end)) {
                data.push(result[index]);
            }
        });
        return data;
    }
    getItemsCount(api, url, query) {
        if (api) {
            url = url + '/count';
        }
        else {
            url = url + '.json';
        }
        let filter = '';
        if (query !== undefined) {
            if ((query !== '') && (query !== null)) {
                filter = '?q=' + query;
            }
        }
        const urlParameter = url + filter;
        let result;
        if (api) {
            result = this.http.get(urlParameter)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(heroes => this.log(`fetched items`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getItems', [])));
        }
        else {
            result = this.http.get(urlParameter)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => this.filterJsonItemsCount(value, query)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getItems', [])));
        }
        return result;
    }
    getItems(api, url, itemsPerPage, page, query) {
        if (!api) {
            url = url + '.json';
        }
        let filter = '';
        if ((itemsPerPage !== undefined) || (page !== undefined) || (query !== undefined)) {
            let limit;
            let offset;
            limit = itemsPerPage;
            offset = 0;
            if (page === 0) {
                page = 1;
            }
            if (page !== undefined) {
                offset = (page - 1) * itemsPerPage;
            }
            if (query !== undefined) {
                if ((query !== '') && (query !== null)) {
                    filter = '?q=' + query;
                }
            }
            if (filter !== '') {
                filter = filter + '&limit=' + limit + '&offset=' + offset;
            }
            else {
                filter = '?limit=' + limit + '&offset=' + offset;
            }
        }
        const urlParameter = url + filter;
        let result;
        if (api) {
            result = this.http.get(urlParameter)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getItems', [])));
        }
        else {
            result = this.http.get(urlParameter)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => this.filterJsonItems(value, query, itemsPerPage, page)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getItems', [])));
        }
        return result;
    }
    getItem(api, url, id) {
        if (!api) {
            url = url + '.json';
        }
        let result = {};
        if (id !== undefined) {
            if (api) {
                const urlParameter = url + '/' + id;
                result = this.http.get(urlParameter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched item id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getItem id=${id}`)));
            }
            else {
                const urlParameter = url;
                result = this.http.get(urlParameter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => this.filterJsonItem(value, id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getItems', [])));
            }
        }
        return result;
    }
    addItem(url, item) {
        const body = JSON.stringify(item);
        return this.http.post(url, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((itemData) => this.log(`added item w/ id=${item.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addItem')));
    }
    updateItem(body, id, link) {
        const url = link + '/' + id;
        return this.http.put(url, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`updated item id=id`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateItem')));
    }
    deleteItem(link, id) {
        const url = link + '/' + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted item id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteItem')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    log(message) {
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-cities-form-cities-form-module~pages-continents-form-continents-form-module~pages-coun~8e7d49ee.js.map