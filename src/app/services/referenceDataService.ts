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
                '50% 8am - 3pm Outside Church, 50% 10am - 5pm Fisherman. Rain: 9am-5pm Home', // Monday, Not Summer 1-10 or Winter 1-10
                '9am - 5pm 50% Outside Church, %50 Fisherman Tent', // Summer 1-10
                '9am - 5pm 50% Home, 50% Church Organ', // Winter 1-10
            ], 'assets/Maria.png'),
            new Person(5, 'Popuri', [
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
            ], 'assets/Rick.png'),
            new Person(7, 'Cliff', [
                '9am - 5pm. Hot Springs. Rain: 50% Inside Carpenter House. 6pm - 12am. 25% Bar', // Monday
                '9am - 5pm. Beach. Rain: 50% Inside Carpenter House. 6pm - 12am. 25% Bar', // Tuesday
                '9am - 5pm. Green Ranch. Rain: 50% Inside Carpenter House. 6pm - 12am. 25% Bar', // Wednesday
                '9am - 5pm. Carpenter House. Rain: 50% Inside Carpenter House. 6pm - 12am. 25% Bar', // Thursday
                '9am - 5pm. 50% Fisherman, 50% Unavailable. Rain: 50% Inside Carpenter House. 6pm - 12am. 25% Bar', // Friday, Saturday
                '9am - 5pm. 50% Carpenter, 50% Unavailable. Rain: 50% Inside Carpenter House 6pm - 12am' // Sunday
            ], 'assets/Cliff.png'),
            new Person(8, 'Gray', [
                '8am - 12pm. Inside Barn. 12pm - 6pm. Green Ranch. Rain: Inside Barn. 6pm - 12am. 50% Bar', //Monday, Tuesday, Wednesday, Friday, Saturday
                '8am - 12pm. Inside Barn. 12pm - 6pm. Green Ranch. Rain: Inside Barn', // Sunday
                '8am - 1pm. Carpenter House. Rain: Unavailable. 6pm - 12am. 50% Bar' // Thursday
            ], 'assets/Gray.png'),
            new Person(9, 'Harris', [
                '9am - 12pm. 50% Outside Church, 50% Outside Midwife House. 12pm - 6pm. 50% Fisherman Tent, 25% Crossroads, 25% Green Ranch. 6pm - 12am. 50% Bar', // Monday, Tuesday, Wednesday, Thursday
                '12pm - 5pm. Library', // Sunday
                'Unavailable' // Sunday Summer 1-10 or Winter 1-10
            ], 'assets/Harris.png'),
            new Person(10, 'Jeff', [
                '8am - 5pm. 50% Fisherman Tent, fishing in river. 50% Unavailable. Rain: Unavailable. 6pm - 12am. 50% Bar', // Monday
                '9am - 5pm. Bakery. 6pm - 12am. 50% Bar', // Tuesday, Wednesday, Thursday, Friday, Saturday
                '9am - 5pm. Bakery' // Sunday
            ], 'assets/Jeff.png'),
            new Person(11, 'Kai', [
                '9am - 5pm. Vineyard, just outside the house. Rain: Vineyard Cellar. 6pm - 12am. 50% Bar', // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
                '9am - 5pm. Vineyard, just outside the house. Rain: Vineyard Cellar', // Sunday
                '9am - 5pm. Vineyard Cellar Basement. Snow: Vineyard Cellar. 6pm - 12am. 50% Bar', // Winter Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
                '9am - 5pm. Vineyard Cellar Basement. Snow: Vineyard Cellar' // Winter Sunday
            ], 'assets/Kai.png'),
            new Person(12, 'Kent', [
                '8am - 3pm. Inside Church. 3pm - 5pm. North Village Streets, south edge. Rain: Potion Shop', // Monday, Tuesday, Wednesday, Thursday, Friday
                '9am - 3pm. 50% Town Square, 50% Fisherman Tent. Rain: Unavailable', // Saturday
                '9am - 4pm. 50% Carpenter House, 50% Inside Library. Rain: Unavailable', // Spring and Fall Sunday
                '8am - 4pm. 50% Beach, 50% Carpenter House. Rain: Unavailable', // Summer Sunday
                '8am - 4pm. 50% Carpenter House, 50% Unavailable. Rain: Unavailable' // Winter Sunday
            ], 'assets/Kent.png'),
            new Person(13, 'Stu', [
                '8am - 3pm. Inside Church. 3pm - 5pm. North Village Streets, south edge. Rain: Potion Shop', // Monday, Tuesday, Wednesday, Thursday, Friday
                '9am - 3pm. 50% Town Square, 50% Fisherman Tent. Rain: Unavailable', // Saturday
                '9am - 4pm. 50% Carpenter House, 50% Inside Library. Rain: Unavailable', // Spring and Fall Sunday
                '8am - 4pm. 50% Beach, 50% Carpenter House. Rain: Unavailable', // Summer Sunday
                'Unavailable' // Winter Sunday
            ], 'assets/Stu.png'),
            new Person(14, 'Pastor', [
                '8am - 5pm. Inside Church', // Monday, Tuesday, Wednesday, Thursday, Friday, Sunday
                '8am - 5pm. Outside Church. Rain: Inside Church' // Saturday
            ], 'assets/Pastor.png'),
            new Person(15, 'Basil', [
                'Out of Town', // Fall 4 - Spring 15
                '9am - 5pm. Flower Shop. 6pm - 12am. 50% Bar', // Monday, Tuesday, Wednesday
                '9am - 5pm. Behind Flower Shop. Rain: Flower Shop. 6pm - 12am. 50% Bar', // Thursday
                '8am - 6pm. Fisherman Tent. Rain: Flower Shop. 6pm - 12am. 50% Bar', // Friday, Saturday
                '9am - 5pm. Town Square' //Sunday
            ], 'assets/Basil.png'),
            new Person(16, 'Lillia', [
                '9am - 5pm. Flower Shop', // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
                '9am - 5pm. Town Square. Rain: Unavailable'	// Sunday
            ], 'assets/Lillia.png'),
            new Person(17, 'Doug', [
                '8am - 5pm. Green Ranch Shop. 6pm - 12am. 50% Bar', // Monday, Tuesday, Wednesday, Friday, Saturday
                'Unavailable. 6pm - 12am. 50% Bar', // Thursday
                '8am - 5pm. Green Ranch Shop' // Sunday
            ], 'assets/Doug.png'),
            new Person(18, 'Mayor', [
                '8am - 5pm. 50% Near Church, 50% Near Library. Rain: In his house', // Monday, Tuesday, Wednesday, Thursday
                '8am - 5pm. 50% Near Church, 50% Near Library. Rain: Unavailable', // Friday
                '8am - 5pm. 50% Near Tool Shop, 50% Inside Library. Rain: In his house', // Saturday when Library is Open
                '8am - 5pm. 50% Near Tool Shop, 50% Unavailable. Rain: In his house', // Saturday when Library is Closed
                '9am - 3pm. Inside Church. Rain: Unavailable' // Sunday
            ], 'assets/Mayor.png'),
            new Person(19, 'Mayor’s Wife', [
                '8am - 5pm. In her house', // Monday, Tuesday, Wednesday, Thursday, Saturday
                '12pm - 5pm. Bakery', // Friday
                '9am - 3pm. In the church.' // Sunday
            ], 'assets/MayorsWife.png'),
            new Person(20, 'Potion Shop Owner', [
                '9am - 5pm. Potion Shop', // Monday, Tuesday, Wednesday, Thursday, Friday
                '9am - 5pm. 50% Carpenter House, 50% Mountain Cave. Rain: Unavailable', // Saturday
                '9am - 4pm. 50% Carpenter House, 50% Unavailable. Rain: Unavailable', // Sunday
            ], 'assets/PotionShopDealer.png'),
            new Person(21, 'May', [
                '8am - 3pm. In the Church. Rain: Inside Library', // Monday - Friday when Library is open
                '8am - 3pm. In the Church. Rain: Unavailable', // Monday - Friday when Library is closed
                '9am - 3pm. Outside Midwife’s House. Rain: Inside Library', // Saturday when Library is open
                '9am - 3pm. Outside Midwife’s House. Rain: Unavailable', // Saturday when Library is closed
                '9am - 3pm. 50% Town Square, 50% Carpenter House. Rain: Inside Library', // Sunday when Library is open
                '9am - 3pm. 50% Town Square, 50% Carpenter House. Rain: Unavailable' // Sunday when Library is closed
            ], 'assets/May.png', )
        ];
    }
}
