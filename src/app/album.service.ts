import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpService: HttpClient) { }
  public get(userid: string): Observable<any> {
    if(userid) {
      return this.httpService.get('https://jsonplaceholder.typicode.com/albums?userId='+ userid);
    }
    return this.httpService.get('https://jsonplaceholder.typicode.com/albums/');
  }
}

