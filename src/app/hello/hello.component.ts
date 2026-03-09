import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  userName:string ='';
  isSubscribed:boolean =false;
  favoriteColor:string ='red';
  colors:string[]=['Red', 'Blue', 'Green','White'];
  imageUrl = 'https://picsum.photos/200';
  employees: any []=[];
  status = 'loading';

   isActive = true;

   textColor = 'purple';
  fontSize = '20px';

  small="angular learning";
  name = "ASDFGHFDSADFGHg";
  today  = new Date();
   price = 2500;

   progress = 0.75;
  constructor(private emp:EmployeeService)
  {}

  ngOnInit()
  {
    this.employees=this.emp.getEmployee();
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
