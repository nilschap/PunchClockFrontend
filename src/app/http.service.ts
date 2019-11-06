import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { User } from './Models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "localhost:8081/";


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}users/sign-up`, user);
  }

      Login(user: User, callback){
        this.httpClient.post<User>(this.url, user, this.httpOptions);
      callback("test");
      }

  constructor(private httpClient: HttpClient) { 
    this.Login({username: "Nils", password: "123"}, function (value) {
      console.log(value);
    })
    }
  }
