import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  providers: [CarService]
})
export class CarlistComponent implements OnInit {

cars: Car[];

constructor(private _carService: CarService) {}
ngOnInit(): void {
    this._carService.getCars()
    .then(cars => this.cars = cars);
}





  // cars: Car[] = [
  //   {carid: 100, engine: 'petrol', model: 'asta', gear: 'type1', tyre: 'mrf'},
  //   {carid: 200, engine: 'petrol', model: 'sports', gear: 'type2', tyre: 'mdf'},
  //   {carid: 300, engine: 'discel', model: 'asta', gear: 'type3', tyre: 'msf'},
  //   {carid: 400, engine: 'petrol', model: 'sports', gear: 'type1', tyre: 'mwf'},
  //   {carid: 500, engine: 'discel', model: 'asta', gear: 'type1', tyre: 'mrf'}
  // ];
}
