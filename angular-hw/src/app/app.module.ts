import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Repositories } from './repositories.component';
import { AppRoutingModule } from './/app-routing.module';
import { FollowingComponent } from './following.component';


@NgModule({
  declarations: [
    AppComponent, Repositories, FollowingComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
