import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  car: Car = new Car;
  constructor() { }

  ngOnInit() {
  }
  saveCar(): void {
    console.log(this.car.carid);
    console.log(this.car.engine);
  }


}
