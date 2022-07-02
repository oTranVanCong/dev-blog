import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  host: {
    'class': 'component'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements OnInit, DoCheck {
  user: User = { name: 'BBB', age: 20 };
  user$!: Observable<User>;

  constructor(private service: UserService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {    
    this.service.getUser()
    .pipe(take(1))
    .subscribe(user => {
      console.log(`
      ================================
      BComponent::getUser::subscribe
      ================================
      `);    

      this.user = user;
      // Leave this comment to view affect UI
      this.cdr.markForCheck();
    });

    // Assignment for using async pipe
    this.user$ = this.service.getUser();
  }


  ngDoCheck(): void {
    console.log('BComponent::ngDoCheck::Change detection working!!!');    
  }

  onKeyPress(): void {
    console.log(`
    ================================
    BComponent::onKeyPress
    ================================
    `);    
  }

  onClick(): void {
    console.log(`
    ================================
    BComponent::onClick
    ================================
    `);  
    
    // Change reference of user object
    // Leave comment under line of code to view affect UI
    // this.user = { name: 'onClickB', age: 20 };
    
    this.user.name = 'onClickB';
  }
}
