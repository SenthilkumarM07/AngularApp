import { Component, NgModule, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ApiEndpoints } from '../apis/api';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{

  types :any[]=[];
//login
UserName:string="";
PassWord:string="";
UserType:number=0;


IssueType:string="";

  constructor(private CrudServ:CrudService) {}

ngOnInit() {
  this.getIssues();
}

createIssue()
{
  const body={
    typeName:this.IssueType
  }
  this.CrudServ.PostApi(ApiEndpoints.create,body)
  .subscribe(
    res=> 
      {
        if(res.isSuccess)
        {
          alert("Issue Created Successfully");
          this.getIssues();
          this.IssueType="";
        }
        this.IssueType="";
      }
  )
}
getIssues()
{
  this.CrudServ.getApi(ApiEndpoints.select).subscribe(
    res=> {
      if(res.isSuccess)
      {
        this.types= res.body.details
      }
    }
  )
}

UserLogin()
{
  const body={
      userName:this.UserName,
      password:this.PassWord,
      user_Type:this.UserType
  }
  this.CrudServ.PostApi(ApiEndpoints.Login,body)
  .subscribe(
    res=>{
      if(res.isSuccess)
      {
        alert("Saved Successfully");
      }
       
      //  this.typeName="";
      //   this.description="";
    }
  )
}

}
