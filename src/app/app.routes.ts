import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './Signals/counter/counter.component';
import { EmployeeComponent } from './employee/employee.component';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
    { path: '', component:CounterComponent }  ,
    { path: 'hello', component:HelloComponent }  ,
    {path: 'emp', component:EmployeeComponent} ,
    {path:'crud', component:CrudComponent}
];
