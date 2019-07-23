import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import {FormsModule} from "@angular/forms";
import { from } from 'rxjs';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
@NgModule({
  declarations: [
    AppComponent,
    CreateUsersComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InternationalPhoneNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
