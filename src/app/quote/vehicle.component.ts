import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuoteService } from './vehicle.service'
import { SortPipe }from './vehicle.pipe'

@Component({
    moduleId: module.id,
    selector: 'vehicle',
    templateUrl: 'vehicle.component.html',
    providers: [QuoteService]

})
export class VehicleComponent {

    years: number[] = [];
    makes: any[] = [];
    constructor(private _qS: QuoteService) { }
    ngOnInit() {
        // we will initialize our form here
        for (var i: number = new Date().getFullYear() + 1; i > 1900; i--) {
            this.years.push(i);
        }

        this.getMakes();
    }

    private getMakes() {
        this._qS.getMakes()
            .subscribe(
            makes => {
                this.makes = makes.Results;
            },
            error => console.log(error)),
            () => console.log(this.makes);
    }

    @Input('group')
    public vehicleForm: FormGroup;
}