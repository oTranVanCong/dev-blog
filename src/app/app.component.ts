import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    'class': 'component'
  }
})
export class AppComponent implements OnInit, DoCheck {
  title = 'onpush-change-detection';

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    console.log('RootComponent::ngDoCheck::Change detection working!!!');    
  }
}
