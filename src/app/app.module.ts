import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { NavComponent }  from './nav/nav.component';
import { PanelComponent }  from './panel/panel.component';
import { QuoteComponent }  from './quote/quote.component';



@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, NavComponent, PanelComponent, QuoteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
