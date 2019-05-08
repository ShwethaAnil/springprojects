import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    empid = 151;
    empname = 'Naresh';
    salary  = 3432432;
    hireDate = '12-Mar-19';
  showDetails = false;

  toggleDetails():  void {
    this.showDetails = !this.showDetails;
  }

}
