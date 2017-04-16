export interface Vehicles {
    vehicles: Vehicle[];
}
export interface Vehicle {
    year: number;
    make: string; 
    model: string; 
    trim: string;

    garageZipCode: number;
    use: number;
}

export interface Drivers {
    drivers: Driver[];
}

export interface Driver {
    firstName: string;
    lastName: string;
    address: Address;
}

export interface Address {
    street: string;  
    postcode: string;
}