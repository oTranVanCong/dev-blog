import { Component, DoCheck, Input, OnInit } from '@angular/core';

import { Mock } from '../app.model';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss'],
  host: {
    'class': 'component'
  }
})
export class DComponent implements OnInit, DoCheck {

  @Input() data: Mock[] = [];
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
