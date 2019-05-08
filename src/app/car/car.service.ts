import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Car } from './car';

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getCars(): Promise<Car[]> {
    return this.http
    .get('http://localhost:8012/SpringMVCjavabased/cars')
    .toPromise()
    .then(response => response.json() as Car[]);
  }

}
