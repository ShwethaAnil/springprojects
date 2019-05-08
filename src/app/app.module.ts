import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {  HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { CarlistComponent } from './car/carlist/carlist.component';
import { EmployeeTitlePipe } from './employee/employeelist/employeetitle.pipe';
import { PlayersComponent } from './player/players/players.component';
import { AddcarComponent } from './car/addcar/addcar.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';


const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'employees', component: EmployeelistComponent},
  {path: 'cars', component: CarlistComponent},
  {path: 'addCar', component: AddcarComponent},
  {path: 'addEmployee', component: AddemployeeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    CarlistComponent,
    EmployeeTitlePipe,
    PlayersComponent,
    AddcarComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
