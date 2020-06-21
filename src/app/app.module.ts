import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WrapperComponent } from './component/wrapper/wrapper.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  BrowserAnimationsModule ],
  declarations: [ AppComponent, WrapperComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
