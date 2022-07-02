import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';

import { User } from '../models/user.model';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss'],
  host: {
    'class': 'component'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DComponent implements OnInit, DoCheck  {

  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('DComponent::ngDoCheck::Change detection working!!!');
  }

  onKeyPress(): void {
    console.log(`
    ================================
    DComponent::onKeyPress
    ================================
    `);    
  }

  onClick(): void {
    console.log(`
    ================================
    DComponent::onClick
    ================================
    `);    
  }
}
