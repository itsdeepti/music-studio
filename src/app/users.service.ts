import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor (private httpService: HttpClient) { }
  public get():Observable<User[]>{
   return this.httpService.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
