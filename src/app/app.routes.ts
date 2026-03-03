import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AppComponent } from './app.component';
import { CounterComponent } from './Signals/counter/counter.component';

export const routes: Routes = [
    { path: '', component:CounterComponent }  ,
    { path: 'hello', component:HelloComponent }   
];
