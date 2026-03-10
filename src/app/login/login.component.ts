import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ApiEndpoints } from '../apis/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //login
UserName:string="";
Password:string="";
//UserType:number=0;
showPassword:boolean=false;
/**
 *
 */
constructor(private apiservice:CrudService,private rout:Router) {}



togglePassword(){
  this.showPassword = !this.showPassword;
}
UserLogin()
{
  const body={
        userName:this.UserName,
        password:this.Password,
        user_Type:1
    }
  this.apiservice.PostApi(ApiEndpoints.Login,body)
  .subscribe(res=> {
    const token = res.body.token;
   const userdetails=res.body.details;
    //session
    sessionStorage.setItem("Bearer", token)
    sessionStorage.setItem("UseId",userdetails.personNumberTdc)
    sessionStorage.setItem("ProjectNo",userdetails.projectProjectNumber)
    sessionStorage.setItem("UserName",userdetails.engFullNameTdc)
     //alert(res.statusText)

     this.rout.navigate(['/crud'],{state:{ message:'Login Successful' }});



  })
}

}
