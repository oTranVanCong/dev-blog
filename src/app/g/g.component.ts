import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-g',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.scss'],
  host: {
    'class': 'component'
  }  
})
export class GComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('GComponent::ngDoCheck::Change detection working!!!');    
  }

  onKeyPress(): void {
    console.log(`
    ================================
    GComponent::onKeyPress
    ================================
    `);    
  }

  onClick(): void {
    console.log(`
    ================================
    GComponent::onClick
    ================================
    `);    
  }   
}
