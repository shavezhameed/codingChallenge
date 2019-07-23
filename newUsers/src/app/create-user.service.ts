import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  _url='https://userdata.getsandbox.com/users';
  constructor(private _http: HttpClient) { }

  createUser(user: User){
    return this._http.post<any>(this._url, user);
  }
}
