import { Component, NgModule, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ApiEndpoints } from '../apis/api';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{

  types :any[]=[];


//issue
recordId:number=0;
description:string="";
IssueType:string="";
message:any='';

  constructor(private CrudServ:CrudService,private rout:Router) {}

ngOnInit() {
  this.getIssues();
  if(history.state.loginSuccess){
    this.message = "Login Successful";

    // clear message after showing
    setTimeout(()=>{
      this.message='';
    },3000);
  }

}

createIssue()
{
  const body={
    typeName:this.IssueType,
    description:this.description,
  }
  this.CrudServ.PostApi(ApiEndpoints.create,body)
  .subscribe(
    res=> 
      {
        // if(res.isSuccess)
        // {
          console.log(res.statusText)
          alert(res.statusText);
          this.getIssues();
          this.IssueType="";
        //}
        this.description="";
      }
  )
}
getIssues()
{
  this.CrudServ.getApi(ApiEndpoints.select).subscribe(
    res=> {
      if(res.isSuccess)
      {this.types=res.body.details;
         const data = res.body;
      }
    }
  )
}

getById(Id:any)
{
  this.CrudServ.getById(ApiEndpoints.selectById,Id)
  .subscribe(
    res=>{(res.isSuccess)
      {
        const data = res.body.details;
        this.recordId = data.id;
        this.IssueType = data.typeName;
        this.description = data.description;
      }
    }
  )
}

UpdateById(Id:any)
{
  const data={
    typeName:this.IssueType,
     description:this.description,
  }
  this.CrudServ.updateIssueById(ApiEndpoints.update,Id,data)
  .subscribe(
    res=>{(res.isSuccess)
      {
        alert("Updated Sucessfully");
        this.getIssues();
      }
    }
  )
}

DeleteIssueById(Id:any)
{
  this.CrudServ.deleteById(ApiEndpoints.delete,Id)
  .subscribe(
    res=>{(res.isSuccess)
      {
        alert(res.statusText);
        this.getIssues();
      }
    }
  )
}

}
