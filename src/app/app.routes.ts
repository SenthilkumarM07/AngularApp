import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './Signals/counter/counter.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    { path: '', component:CounterComponent }  ,
    { path: 'hello', component:HelloComponent }  ,
    {path: 'emp', component:EmployeeComponent} 
];
