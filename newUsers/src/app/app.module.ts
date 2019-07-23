import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import {FormsModule} from "@angular/forms";
import { from } from 'rxjs';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import{HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUsersComponent,
    HeaderComponent,
    LeftNavigationComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InternationalPhoneNumberModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
