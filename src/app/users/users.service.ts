import { Injectable } from '@angular/core';

import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /**
   * Mock data
   */
  private readonly users: User[] = [
    { id: 1, name: 'user1', age: 21 },
    { id: 2, name: 'user2', age: 22 },
    { id: 3, name: 'user3', age: 23 }
  ];

  constructor() { }

  /**
   * Get users list
   * 
   * @returns User[]
   */
  getUsers(): User[] {
    return this.users;
  }
}
