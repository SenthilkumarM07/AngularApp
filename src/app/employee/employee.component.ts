import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employees:any[]=[];

  constructor(private empserv:EmployeeService) { }

ngOnInit() {
  this.empserv.getEmployeeList().subscribe((data:any)=>{
  this.employees = data;
  });
}
}
