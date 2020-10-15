import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
