import { Injectable, Inject } from "@angular/core";
import { Person } from "../models/person";

@Injectable()
export class ReferenceDataService {
    
    getNPCS() {
        return [
            new Person(1, 'Ann', [
                '8am - 5pm 50% Goddess Pond, 50% Green Ranch. Rain: Green Ranch Barn near back', // Sunday
                '8am - 5pm Green Ranch / work. Rain: 8am-5pm Green Ranch Barn', // Monday, Tuesday, Wednesday, Friday, Saturday
                '9am - 5pm 25% Fisherman Tent, 25% Carpenter House, 25% Vineyard, 25% 10am-5pm Tool Shop. Rain: Unavailable', // Thursday
            ], 'assets/Ann.png'),
            new Person(2, 'Elli', [
                '9am - 12pm Flower Shop, 12:00pm - 5pm Outside Bakery. Rain: 9am - 12pm Flower Shop, 12:00pm - 5pm Bakery', // Wednesday
                '9am - 5pm Bakery', // Tuesday, Thursday, Friday, Saturday
                '8am - 5pm Carpenter House, Fisherman Tent. Rain: Unavailable', // Monday Spring, Fall, Winter
                '8am - 5pm Beach Dock. Rain: Unavailable', // Monday Summer
                'Unavailable' // Sunday
            ], 'assets/Elli.png'),
            new Person(3, 'Karen', [
                '9am - 5pm Vineyard, 6pm - 12am Bar. Rain: Unavailable', // Monday, Thursday
                '10am - 6pm Beach. Rain: Unavailable', // Sunday
                '10am - 5pm 25% Carpenter House, 25% Beach Dock, 50% Unavailable, 6pm - 12am Bar. Rain: Unavailable', // Friday, Saturday
                '10am - 5pm 25% Carpenter House, 25% Beach Dock, 50% Unavailable. Rain: Unavailable' // Wednesday
            ], 'assets/Karen.png'),
            new Person(4, 'Maria', [
                '9am - 5pm Library', // Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
                '50% 8am - 3pm Church, 50% 10am - 5pm Fisherman. Rain: 9am-5pm Home', // Monday, Not Summer 1-10 or Winter 1-10
                '9am - 5pm 50% Outside Church, %50 Fisherman Tent', // Summer 1-10
                '9am - 5pm 50% Home, 50% Church Organ', // Winter 1-10
            ], 'assets/Maria.png'),
            new Person(5, 'Popuri',[
                '9am - 5pm Outside Flower Shop. Rain: In Flower Shop', // Monday, Tuesday, Wednesday, Thursday
                '9am - 5pm Carpenter House, Mountain Summit. Rain: In Flower Shop', // Friday
                '9am - 5am Carpenter House, Goddess Pond', // Saturday
                '9am - 5pm 50% Bakery, 50% Green Ranch. Rain: Bakery' // Sunday
            ], 'assets/Popuri.png'),
            new Person(6, 'Rick', [
                '10am - 6pm Tool Shop. Rain: Unavailable', // Monday, Tuesday, Thursday, Friday
                '10am - 6pm 50% Outside Saibara House. Rain: Unavailable', // Saturday
                '10am - 6pm 50% Town Square Fountain. Rain Unavailable', // Sunday
                'Unavailable' // Wednesday
            ], 'assets/Rick.png')
        ];
    }
}
