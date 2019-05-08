import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

  employees: Employee[] = [
    { empid: 123, empname: 'Rakesh',
    gender: 'Male',
    salary: 45451, hireDate: '12-Jan-2019'},
    { empid: 124, empname: 'Naresh',
    gender: 'Male',
    salary: 41451, hireDate: '16-Jan-2019'},
    { empid: 125, empname: 'Mahesh',
    gender: 'Male',
    salary: 41451, hireDate: '16-Jan-2019'},
    { empid: 126, empname: 'Mounika',
    gender: 'FeMale',
    salary: 43451, hireDate: '01-Jan-2019'},
    { empid: 127, empname: 'Chhavi',
    gender: 'FeMale',
    salary: 43451, hireDate: '02-Jan-2019'},
    { empid: 128, empname: 'Hema',
    gender: 'FeMale',
    salary: 43451, hireDate: '06-Jan-2019'}
  ];



}
