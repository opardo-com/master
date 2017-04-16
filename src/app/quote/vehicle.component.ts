import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'vehicle',
    templateUrl: 'vehicle.component.html'
})
export class VehicleComponent {

    years: number[] = [];

    ngOnInit() {
        // we will initialize our form here
        for(var i:number = new Date().getFullYear() + 1; i > 1900 ; i--) {
            this.years.push(i);
        }
    }

    @Input('group')
    public vehicleForm: FormGroup;
}