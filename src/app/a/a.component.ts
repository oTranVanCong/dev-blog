import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  host: {
    'class': 'component'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    console.log('AComponent::ngDoCheck::Change detection working!!!');    
  }

  onKeyPress(): void {
    console.log(`
    ================================
    AComponent::onKeyPress
    ================================
    `);    

  }

  onClick(): void {
    console.log(`
    ================================
    AComponent::onClick
    ================================
    `);    
  }

}
