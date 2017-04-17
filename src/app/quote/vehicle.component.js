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
var forms_1 = require('@angular/forms');
var vehicle_service_1 = require('./vehicle.service');
var VehicleComponent = (function () {
    function VehicleComponent(_qS) {
        this._qS = _qS;
        this.years = [];
        this.makes = [];
        this.models = [];
    }
    VehicleComponent.prototype.ngOnInit = function () {
        // we will initialize our form here
        for (var i = new Date().getFullYear() + 1; i > 1900; i--) {
            this.years.push(i);
        }
        this.getMakes();
    };
    VehicleComponent.prototype.getMakes = function () {
        var _this = this;
        this._qS.getMakes()
            .subscribe(function (makes) {
            _this.makes = makes.Results;
        }, function (error) { return console.log(error); }),
            function () { return console.log(_this.makes); };
    };
    VehicleComponent.prototype.getModels = function () {
        var _this = this;
        var make = this.vehicleForm.get('make').value;
        var year = this.vehicleForm.get('year').value;
        console.log(make, year);
        this._qS.getModels(make, year)
            .subscribe(function (models) {
            _this.models = models.Results;
        }, function (error) { return console.log(error); }),
            function () { return console.log(_this.makes); };
    };
    __decorate([
        core_1.Input('group'), 
        __metadata('design:type', forms_1.FormGroup)
    ], VehicleComponent.prototype, "vehicleForm", void 0);
    VehicleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vehicle',
            templateUrl: 'vehicle.component.html',
            providers: [vehicle_service_1.QuoteService]
        }), 
        __metadata('design:paramtypes', [vehicle_service_1.QuoteService])
    ], VehicleComponent);
    return VehicleComponent;
}());
exports.VehicleComponent = VehicleComponent;
//# sourceMappingURL=vehicle.component.js.map