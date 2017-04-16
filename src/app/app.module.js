"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var nav_component_1 = require('./nav/nav.component');
var home_component_1 = require('./home/home.component');
var quote_component_1 = require('./quote/quote.component');
var vehicle_component_1 = require('./quote/vehicle.component');
var vehicle_pipe_1 = require('./quote/vehicle.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    },
                    {
                        path: 'home', component: home_component_1.HomeComponent
                    },
                    {
                        path: 'quote', component: quote_component_1.QuoteComponent
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, home_component_1.HomeComponent, quote_component_1.QuoteComponent, vehicle_component_1.VehicleComponent, vehicle_pipe_1.SortPipe],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map