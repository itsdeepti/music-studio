import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '' , component: UsersComponent },
  { path: 'album', component: AlbumListComponent },
  { path: 'album/:id', component: AlbumListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
