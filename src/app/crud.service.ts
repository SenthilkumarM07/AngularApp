import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { env } from './environment/environment';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }


  getApi(api:any):Observable<any>
  {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKd3RTdWJqZWN0IiwianRpIjoiODJmYzlhNTAtY2M2Zi00ZTI3LWE5NzctNTQzZDVjY2ZjY2FhIiwiVXNlcklkIjoiNjAwMjc1IiwiTmFtZSI6IjYwMDI3NSIsImV4cCI6MTc3MzMwMTI3MCwiaXNzIjoiSnd0SXNzdWVyIiwiYXVkIjoiSnd0QXVkaWVuY2UifQ.HWLFmY7YtPv1-nvyQnv5Z5hrSq3TuVwV-iYOtK6Qa9Q";
     const FinalUrl=`${env.baseurl+api}`;
     const headers=
     {
      Authorization:`Bearer ${token}`
     }
    return this.http.get<any>(FinalUrl,{headers});
  }
  
  PostApi(api:any,data:any)
  {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKd3RTdWJqZWN0IiwianRpIjoiODJmYzlhNTAtY2M2Zi00ZTI3LWE5NzctNTQzZDVjY2ZjY2FhIiwiVXNlcklkIjoiNjAwMjc1IiwiTmFtZSI6IjYwMDI3NSIsImV4cCI6MTc3MzMwMTI3MCwiaXNzIjoiSnd0SXNzdWVyIiwiYXVkIjoiSnd0QXVkaWVuY2UifQ.HWLFmY7YtPv1-nvyQnv5Z5hrSq3TuVwV-iYOtK6Qa9Q";
     const FinalUrl=`${env.baseurl+api}`;
     const headers=
     {
      Authorization:`Bearer ${token}`
     }

    return this.http.post<any>(env.baseurl+api,data,{headers})
  }
}
