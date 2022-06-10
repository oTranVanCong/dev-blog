import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Mock } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getData(): Observable<Mock[]> {
    return of([
      { name: 'AAA', age: 10 },
      { name: 'BBB', age: 11 },
      { name: 'CCC', age: 12 },
      { name: 'DDD', age: 13 },
      { name: 'EEE', age: 14 },
      { name: 'FFF', age: 15 }
    ]).pipe(delay(10000));
  }
}