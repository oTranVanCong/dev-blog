import { Component, OnInit } from '@angular/core';

import { User } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  // Inject UsersService through constructor
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

}
