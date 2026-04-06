import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CounterComponent } from './Signals/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { HelloComponent } from './hello/hello.component';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HelloComponent,CounterComponent,HttpClientModule,EmployeeComponent,NotificationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewAngularApp';
}
