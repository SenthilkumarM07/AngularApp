import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',

})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getapiurl='https://jsonplaceholder.typicode.com/posts';
  getEmployee()
  {
    return [
      { id: 1, name: "Senthil" },
      { id: 2, name: "Kumar" }
    ]
  }

  getEmployeeList()
  {
    return this.http.get<any>(this.getapiurl);
  }
}
