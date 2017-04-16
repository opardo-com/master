import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Vehicle } from './quote.interface';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'quote',
    templateUrl: './app/quote/quote.component.html'
})
export class QuoteComponent implements OnInit {
    public myForm: FormGroup; // our form model

    // we will use form builder to simplify our syntax
    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        // we will initialize our form here
        this.myForm = this._fb.group({
            Vehicles: this._fb.array([
                this.initVehicle(),
            ])
        });
    }

    initVehicle() {
        // initialize our Vehicle
        return this._fb.group({
            year: ['2018'],
            make: [''],
            model: [''],
            trim: [''],
            garageZipCode: [''],
            use: ['']
        });
    }

    addVehicle() {
        // add Vehicle to the list
        const control = <FormArray>this.myForm.controls['Vehicles'];
        control.push(this.initVehicle());
    }

    removeVehicle(i: number) {
        // remove Vehicle from the list
        const control = <FormArray>this.myForm.controls['Vehicles'];
        control.removeAt(i);
    }


    save(model: Vehicle) {
        // call API to save customer
        console.log(model);
    }
}