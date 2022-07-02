import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from '../models/user.model';

/**
 * This service to mock request to server
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): Observable<User> {
    return of(
      { name: 'Observable', age: 10 }
    ).pipe(delay(5000));
  }

  getUsers(): Observable<User[]> {
    return of([
      { name: 'AAA', age: 10 },
      { name: 'BBB', age: 11 },
      { name: 'CCC', age: 12 },
      { name: 'DDD', age: 13 },
      { name: 'EEE', age: 14 },
      { name: 'FFF', age: 15 }
    ]).pipe(delay(5000));
  }  
}