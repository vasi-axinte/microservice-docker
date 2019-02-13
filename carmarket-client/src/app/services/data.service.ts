import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../components/models/Car';
import { User } from '../components/models/User';
import { AuthorizedUser } from '../components/models/AuthorizedUser';

@Injectable()
export class DataService {

  httpOptionsWithToken = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem("token")
    })
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  getCarData() {
      return this.http.get<Car[]>('http://localhost:4001/api/values', this.httpOptionsWithToken);
  }

  login(user: User){
    console.log(user);
    return this.http.post<AuthorizedUser>('http://localhost:4002/api/login', user, this.httpOptions)
  }
}
