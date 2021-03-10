import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpService: HttpClient) { }
  public get(): Observable<any> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/albums');
  }
}

