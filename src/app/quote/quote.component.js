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
var QuoteComponent = (function () {
    // we will use form builder to simplify our syntax
    function QuoteComponent(_fb) {
        this._fb = _fb;
    }
    QuoteComponent.prototype.ngOnInit = function () {
        // we will initialize our form here
        this.myForm = this._fb.group({
            Vehicles: this._fb.array([
                this.initVehicle(),
            ])
        });
    };
    QuoteComponent.prototype.initVehicle = function () {
        // initialize our Vehicle
        return this._fb.group({
            year: ['2018'],
            make: [''],
            model: [''],
            trim: [''],
            garageZipCode: [''],
            use: ['']
        });
    };
    QuoteComponent.prototype.addVehicle = function () {
        // add Vehicle to the list
        var control = this.myForm.controls['Vehicles'];
        control.push(this.initVehicle());
    };
    QuoteComponent.prototype.removeVehicle = function (i) {
        // remove Vehicle from the list
        var control = this.myForm.controls['Vehicles'];
        control.removeAt(i);
    };
    QuoteComponent.prototype.save = function (model) {
        // call API to save customer
        console.log(model);
    };
    QuoteComponent = __decorate([
        core_1.Component({
            selector: 'quote',
            templateUrl: './app/quote/quote.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], QuoteComponent);
    return QuoteComponent;
}());
exports.QuoteComponent = QuoteComponent;
//# sourceMappingURL=quote.component.js.map