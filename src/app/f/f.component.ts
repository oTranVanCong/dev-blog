import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.scss'],
  host: {
    'class': 'component'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('FComponent::ngDoCheck::Change detection working!!!');    
  }

  onKeyPress(): void {
    console.log(`
    ================================
    FComponent::onKeyPress
    ================================
    `);    
  }

  onClick(): void {
    console.log(`
    ================================
    FComponent::onClick
    ================================
    `);    
  } 
}
