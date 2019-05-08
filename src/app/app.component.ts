import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl : './app.component.html',
  template: `<div style="padding:5px">
  <ul class="nav nav-tabs">
    <li routerLinkActive="Active">
      <a routerLink="home">Home</a>
    </li>
    <li routerLinkActive="Active">
      <a routerLink="employees">Employees</a>
    </li>
    <li routerLinkActive="Active">
      <a routerLink="cars">Cars</a>
    </li>
    <li routerLinkActive="Active">
      <a routerLink="addCar">AddCar</a>
    </li>
    <li routerLinkActive="Active">
    <a routerLink="addEmployee">AddEmployee</a>
  </li>
  </ul>
  <br/><br/>
  <router-outlet></router-outlet>
  </div>`,
//   template: `<div>
//               <h1>{{12+89+67}}</h1>
//               </div>
//               <button (click)='onClick()'>Click Me</button><br/>
//             <button disabled='{{isDisabled}}'>Interpolation</button>
//  <br/>  <button [disabled]='isDisabled'>PropertyBinding</button>
//  <div>{{badHtml}}</div>
//  <div [innerHtml]='badHtml'></div>
//  <app-employee></app-employee>
//  Name : <input [value]='name'
//  (input)='name=$event.target.value'/>
//  You enterred name is : {{name}}
// <br/><br/>
//  Name: <input [(ngModel)]='name'/>
//  your name is :{{name}}
//  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Details';
  name = 'Shwetha';
  isDisabled = false;
  badHtml = 'Helllo <script>alert("hi");</script> World';
  onClick(): void {
    console.log('button is clicked');
  }
}
