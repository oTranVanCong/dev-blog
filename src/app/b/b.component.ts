import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Mock } from '../app.model';
import { AppService } from '../app.service';

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
  data: Mock[] = []

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getData()
    .pipe(take(1))
    .subscribe(data => {
      console.log(`
      ================================
      BComponent::getData::subscribe
      ================================
      `);    

      this.data = data
    });    
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
  }
}
