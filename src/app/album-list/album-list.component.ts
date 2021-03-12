import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  public albums: Album[] = [];
  public pagenos: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public totalalbums: Album[] = [];
  public selectedno: number = 0;
  public selectedRow: Album = { id: 0, title: '', userId: 0 };
  public userid:string='';

  constructor(private albumService: AlbumService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(e => {
      this.userid = e.id;
      this.albumService.get(this.userid).subscribe((e: Album[]) => {
        this.totalalbums = e;
        this.albums = this.totalalbums.slice(0, 10);
      });
    });
  }
  pagenoclick(p: number) {
    // alert('You clicked ' + p);
    this.selectedno = p;
    this.albums = this.totalalbums.slice(p * 10, p * 10 + 10);
  }
  rowClick(a: Album) {
    this.selectedRow = a;
  
  }
}
