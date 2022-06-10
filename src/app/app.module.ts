import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AComponent } from './a/a.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';
import { FComponent } from './f/f.component';
import { GComponent } from './g/g.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    FComponent,
    GComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
