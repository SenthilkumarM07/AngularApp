import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { env } from './environment/environment';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

getToken()
{
  return sessionStorage.getItem('Bearer');
}

getHeaders(){
    return {
      Authorization: `Bearer ${this.getToken()}`
    };
  }


  getApi(api:any):Observable<any>
  {

     const FinalUrl=`${env.baseurl+api}`;
     
    return this.http.get<any>(FinalUrl,{headers:this.getHeaders()});
  }
  
  PostApi(api:any,data:any)
  {
    
     const FinalUrl=`${env.baseurl+api}`;


    return this.http.post<any>(env.baseurl+api,data,{headers:this.getHeaders()})
  }

  getById(api:any, param:any)
  {

     const FinalUrl=`${env.baseurl+api}?id=${param}`;

     return this.http.get<any>(FinalUrl,{headers:this.getHeaders()})
  }

  deleteById(api:any, param:any)
  {

     const FinalUrl=`${env.baseurl+api}?id=${param}`;


     return this.http.delete<any>(FinalUrl,{headers:this.getHeaders()})
  }

  updateIssueById(api:any, param:any, body:any)
  {

     const FinalUrl=`${env.baseurl+api}?id=${param}`;

     return this.http.post<any>(FinalUrl,body,{headers:this.getHeaders()})
  }
}
