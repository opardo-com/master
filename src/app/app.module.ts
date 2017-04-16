import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { VehicleComponent } from './quote/vehicle.component';

import { SortPipe } from './quote/vehicle.pipe'


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,

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
  declarations: [AppComponent, NavComponent, HomeComponent, QuoteComponent, VehicleComponent, SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
