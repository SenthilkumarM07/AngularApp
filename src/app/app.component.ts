import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './Signals/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HelloComponent,CounterComponent,HttpClientModule,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewAngularApp';
}
