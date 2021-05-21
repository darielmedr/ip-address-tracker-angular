(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dariel/Desktop/Frontend-Mentor/ip-address-tracker-master/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EZtS":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");




class MapComponent {
    constructor() {
        this.coords = { lat: 0, lon: 0 };
        this.DEFAULT_ZOOM = 12;
    }
    ngOnInit() {
        this.initializeMapOptions();
    }
    ngOnChanges(changes) {
        const change = changes['coords'];
        if (!change.isFirstChange()) {
            this.updateLocationMarker(this.DEFAULT_ZOOM);
        }
    }
    initializeMapOptions() {
        this.mapOptions = {
            zoomControl: false,
            zoom: this.DEFAULT_ZOOM,
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: '© OpenStreetMap'
                })
            ],
        };
    }
    initializeMap(map) {
        this.map = map;
        this.updateLocationMarker();
    }
    updateLocationMarker(zoom) {
        this.clearMarkerLayer();
        const coordinates = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])([
            this.coords ? this.coords.lat : 0,
            this.coords ? this.coords.lon : 0
        ]);
        const options = this.getDefaultMarkerOptions();
        this.positionMarkerLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(coordinates, options).addTo(this.map);
        const zoomValue = zoom ? zoom : this.map.getZoom();
        this.map.setView(coordinates, zoomValue);
    }
    clearMarkerLayer() {
        if (this.map.hasLayer(this.positionMarkerLayer)) {
            this.map.removeLayer(this.positionMarkerLayer);
        }
    }
    getDefaultMarkerOptions() {
        const options = {
            icon: this.getDefaultMarkerIcon(),
            title: `Latitude: ${Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatNumber"])(this.coords ? this.coords.lat : 0, 'en-US', '1.1-7')}\nLongitude: ${Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatNumber"])(this.coords ? this.coords.lon : 0, 'en-US', '1.1-7')}`,
            riseOnHover: true
        };
        return options;
    }
    getDefaultMarkerIcon() {
        return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"])({
            iconSize: [55, 55],
            iconAnchor: [55, 55],
            iconUrl: 'assets/images/icon-location.svg'
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { coords: "coords" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "map-container"], ["id", "map", "leaflet", "", 3, "leafletOptions", "leafletMapReady"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("leafletMapReady", function MapComponent_Template_div_leafletMapReady_1_listener($event) { return ctx.initializeMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leafletOptions", ctx.mapOptions);
    } }, directives: [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__["LeafletDirective"]], styles: [".map-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 0;\n}\n\n#map[_ngcontent-%COMP%] {\n  min-height: 300px;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNtYXAge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "OsFj":
/*!************************************************!*\
  !*** ./src/app/services/ip-geo-api.service.ts ***!
  \************************************************/
/*! exports provided: IpGeoApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpGeoApiService", function() { return IpGeoApiService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class IpGeoApiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://ip-api.com/json';
        /**
         * numeric value (to save bandwidth)
         * that represent (fields=status,message,region,city,zip,lat,lon,offset,isp,query)
         * see https://ip-api.com/docs/api:json
         */
        this.fields = 33612532;
    }
    getClientIpGeolocationInfo() {
        return this.http.get(`${this.baseUrl}/?fields=${this.fields}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return this.mapApiResponseToIpGeolocation(data);
        }));
    }
    getIpGeolocationInfo(ip) {
        return this.http.get(`${this.baseUrl}/${ip}?fields=${this.fields}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return this.mapApiResponseToIpGeolocation(data);
        }));
    }
    mapApiResponseToIpGeolocation(data) {
        return {
            ip: data.query,
            status: data.status,
            errorMessage: data.message,
            location: `${data.city}, ${data.region} ${data.zip}`,
            timezone: data.offset,
            isp: data.isp,
            coord: {
                lat: data.lat,
                lon: data.lon
            }
        };
    }
}
IpGeoApiService.ɵfac = function IpGeoApiService_Factory(t) { return new (t || IpGeoApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
IpGeoApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IpGeoApiService, factory: IpGeoApiService.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ip_geo_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ip-geo-api.service */ "OsFj");
/* harmony import */ var _components_ip_geo_info_ip_geo_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ip-geo-info/ip-geo-info.component */ "XEMX");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/map/map.component */ "EZtS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class AppComponent {
    constructor(ipGeoApiService, fb) {
        this.ipGeoApiService = ipGeoApiService;
        this.fb = fb;
        this.ipGeoInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        /**
         * validate IPv4 AND IPv6
         */
        this.ipValidator = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
    }
    ngOnInit() {
        this.ipForm = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.ipValidator)]]
        });
        this.ipGeoInfo$ = this.ipGeoApiService.getClientIpGeolocationInfo();
    }
    getIpGeolocationInfo() {
        if (!this.ipForm.valid) {
            alert(`${this.ipForm.value.ip} is not a valid IP address.`);
            return;
        }
        const { ip } = this.ipForm.value;
        this.ipGeoInfo$ = this.ipGeoApiService.getIpGeolocationInfo(ip);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ip_geo_api_service__WEBPACK_IMPORTED_MODULE_3__["IpGeoApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 7, consts: [[3, "formGroup", "ngSubmit"], [1, "input-group"], ["type", "text", "placeholder", "Search for any IP address or domain", "formControlName", "ip"], ["type", "submit"], ["src", "../assets/images/icon-arrow.svg", "alt", "icon-arrow-right"], [1, "ip-geolocation-info"], [3, "ipGeoInfo"], [1, "map-wrapper"], [3, "coords"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "IP Address Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_4_listener() { return ctx.getIpGeolocationInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-ip-geo-info", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-map", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ipForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ipGeoInfo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 3, ctx.ipGeoInfo$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("coords", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 5, ctx.ipGeoInfo$)) == null ? null : tmp_2_0.coord);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _components_ip_geo_info_ip_geo_info_component__WEBPACK_IMPORTED_MODULE_4__["IpGeoInfoComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  z-index: 50;\n  position: relative;\n  height: 35%;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2)), url('pattern-bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 1.8rem;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 87%;\n  max-width: 55.5rem;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  height: 5.8rem;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 1.5rem 0 0 1.5rem;\n  padding: 0 2.5rem;\n  min-width: 200px;\n  flex: 1 1 auto;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--color-dark-gray-900);\n  width: 5.8rem;\n  border-radius: 0 1.5rem 1.5rem 0;\n  flex-shrink: 0;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .ip-geolocation-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 87%;\n  background: #ffffff;\n  border-radius: 1.5rem;\n}\nmain[_ngcontent-%COMP%]   .map-wrapper[_ngcontent-%COMP%] {\n  height: 65%;\n}\n@media screen and (min-width: 820px) {\n  main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    height: 40%;\n  }\n  main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n  }\n  main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .ip-geolocation-info[_ngcontent-%COMP%] {\n    top: 80%;\n  }\n  main[_ngcontent-%COMP%]   .map-wrapper[_ngcontent-%COMP%] {\n    height: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvSEFBQTtFQU1BLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFNSTtFQUNFLG1CQUFBO0FBSk47QUFPSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUxOO0FBT007RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUxSO0FBT1E7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTFY7QUFRUTtFQUNFLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQU5WO0FBV0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVROO0FBYUU7RUFDRSxXQUFBO0FBWEo7QUFlQTtFQUVJO0lBQ0UsV0FBQTtFQWJKO0VBZUk7SUFDRSxpQkFBQTtFQWJOO0VBZ0JJO0lBQ0UsUUFBQTtFQWROO0VBa0JFO0lBQ0UsV0FBQTtFQWhCSjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcblxuICBoZWFkZXIge1xuICAgIHotaW5kZXg6IDUwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDM1JTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcbiAgICAgICksXG4gICAgICB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3BhdHRlcm4tYmcucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoMSB7XG4gICAgICBwYWRkaW5nLXRvcDogMS44cmVtO1xuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgd2lkdGg6IDg3JTtcbiAgICAgIG1heC13aWR0aDogNTUuNXJlbTtcblxuICAgICAgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA1LjhyZW07XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbSAwIDAgMS41cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMi41cmVtO1xuICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JheS05MDApO1xuICAgICAgICAgIHdpZHRoOiA1LjhyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxLjVyZW0gMS41cmVtIDA7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXAtZ2VvbG9jYXRpb24taW5mbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDcwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHdpZHRoOiA4NyU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5tYXAtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiA2NSU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgbWFpbiB7XG4gICAgaGVhZGVyIHtcbiAgICAgIGhlaWdodDogNDAlO1xuXG4gICAgICBoMSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAuaXAtZ2VvbG9jYXRpb24taW5mbyB7XG4gICAgICAgIHRvcDogODAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXAtd3JhcHBlciB7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "XEMX":
/*!*****************************************************************!*\
  !*** ./src/app/components/ip-geo-info/ip-geo-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: IpGeoInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpGeoInfoComponent", function() { return IpGeoInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_gmt_to_utc_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/gmt-to-utc.pipe */ "jobz");



function IpGeoInfoComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.ipGeoInfo == null ? null : ctx_r0.ipGeoInfo.location, " ");
} }
function IpGeoInfoComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ipGeoInfo == null ? null : ctx_r1.ipGeoInfo.errorMessage);
} }
class IpGeoInfoComponent {
    constructor() {
        this.ipGeoInfo = null;
    }
    ngOnInit() {
    }
}
IpGeoInfoComponent.ɵfac = function IpGeoInfoComponent_Factory(t) { return new (t || IpGeoInfoComponent)(); };
IpGeoInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IpGeoInfoComponent, selectors: [["app-ip-geo-info"]], inputs: { ipGeoInfo: "ipGeoInfo" }, decls: 24, vars: 10, consts: [[1, "wrapper"], [4, "ngIf"], [1, "errorMessage"]], template: function IpGeoInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "IP Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IpGeoInfoComponent_p_10_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Timezone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "gmtToUtc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ISP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IpGeoInfoComponent_div_23_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ipGeoInfo == null ? null : ctx.ipGeoInfo.ip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.ipGeoInfo == null ? null : ctx.ipGeoInfo.status) === "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 7, ctx.ipGeoInfo == null ? null : ctx.ipGeoInfo.timezone, "zzzz")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ipGeoInfo == null ? null : ctx.ipGeoInfo.isp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.ipGeoInfo == null ? null : ctx.ipGeoInfo.status) === "fail");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_pipes_gmt_to_utc_pipe__WEBPACK_IMPORTED_MODULE_2__["GmtToUtcPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 2rem;\n}\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 3.3rem;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.8rem;\n}\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-medium);\n}\n.wrapper[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%] {\n  margin: var(--font-size-text);\n}\n@media screen and (min-width: 820px) {\n  .wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    text-align: left;\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child)::before {\n    content: \"\";\n    width: 1px;\n    height: 100%;\n    background-color: var(--color-dark-gray-100);\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2lwLWdlby1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQ047QUFDTTtFQUNFLHFCQUFBO0FBQ1I7QUFFTTtFQUNFLHNDQUFBO0FBQVI7QUFNRTtFQUNFLDZCQUFBO0FBSko7QUFRQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxxQ0FBQTtFQUxGO0VBT0U7SUFDRSxrQkFBQTtFQUxKO0VBT0k7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSw0Q0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7RUFMTjtBQUNGIiwiZmlsZSI6ImlwLWdlby1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMnJlbTtcblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDAgMy4zcmVtO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjhyZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgICAgICAgLy8gd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lcnJvck1lc3NhZ2Uge1xuICAgIG1hcmdpbjogdmFyKC0tZm9udC1zaXplLXRleHQpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC53cmFwcGVyIHVsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCk6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmF5LTEwMCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map/map.component */ "EZtS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_gmt_to_utc_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/gmt-to-utc.pipe */ "jobz");
/* harmony import */ var _services_ip_geo_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/ip-geo-api.service */ "OsFj");
/* harmony import */ var _components_ip_geo_info_ip_geo_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ip-geo-info/ip-geo-info.component */ "XEMX");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_services_ip_geo_api_service__WEBPACK_IMPORTED_MODULE_6__["IpGeoApiService"], _pipes_gmt_to_utc_pipe__WEBPACK_IMPORTED_MODULE_5__["GmtToUtcPipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
        _pipes_gmt_to_utc_pipe__WEBPACK_IMPORTED_MODULE_5__["GmtToUtcPipe"],
        _components_ip_geo_info_ip_geo_info_component__WEBPACK_IMPORTED_MODULE_7__["IpGeoInfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"]] }); })();


/***/ }),

/***/ "jobz":
/*!******************************************!*\
  !*** ./src/app/pipes/gmt-to-utc.pipe.ts ***!
  \******************************************/
/*! exports provided: GmtToUtcPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmtToUtcPipe", function() { return GmtToUtcPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GmtToUtcPipe {
    transform(value) {
        if (!value)
            return;
        return value.replace('GMT', 'UTC ');
    }
}
GmtToUtcPipe.ɵfac = function GmtToUtcPipe_Factory(t) { return new (t || GmtToUtcPipe)(); };
GmtToUtcPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "gmtToUtc", type: GmtToUtcPipe, pure: true });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map