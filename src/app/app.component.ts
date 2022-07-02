import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    'class': 'component'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {
  title = 'onpush-change-detection';

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    console.log('AppComponent::ngDoCheck::Change detection working!!!');    
  }
}
