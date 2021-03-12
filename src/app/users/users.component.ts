import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];


  constructor(private usersService: UsersService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.usersService.get().subscribe(e => {
      this.users = e;
    })
  }
  userClick(u:User){
    this.router.navigate(['/album',u.id]);
  }
}

