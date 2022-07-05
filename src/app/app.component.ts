import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disabledInput: boolean = true;
  lastInputedKey: string = '';

  onEnable(): void {
    this.disabledInput = false;
  }

  onKeyPress(event: KeyboardEvent): void {
    console.log(`
    =====================
    AppComponent::onKeyPress
    =====================
    `, event);
    
    this.lastInputedKey = event.key;
  }
}
