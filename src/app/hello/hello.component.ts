import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,CommonModule],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  userName:string ='';
  isSubscribed:boolean =false;
  favoriteColor:string ='red';
  colors:string[]=['Red', 'Blue', 'Green','White'];

  employees: any []=[];
  constructor(private empservice:EmployeeService)
  {}

  ngOnInit()
  {
    this.employees=this.empservice.getEmployee();
  }
  count=0;
  Increment()
  {
    this.count++
  }

  Decrement()
  {
    if(this.count>0)
      this.count--
  }
}
