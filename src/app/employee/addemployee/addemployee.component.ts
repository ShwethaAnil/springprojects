import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
employee = new Employee;
  constructor() { }

  ngOnInit() {
  }
  createEmployee(): void {
    console.log(this.employee.empid);
  }
}
