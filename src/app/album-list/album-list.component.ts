import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  public albums: object[] = [];
  public pagenos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.get().subscribe((e: object[]) => {
      this.albums = e;
    });
  }
  pagenoclick(p:number){
    alert('You clicked '+ p);
  }
}
