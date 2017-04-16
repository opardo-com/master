import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { VehicleComponent } from './quote/vehicle.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'quote', component: QuoteComponent
      }
    ])
  ],
  declarations: [AppComponent, NavComponent, HomeComponent, QuoteComponent, VehicleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
