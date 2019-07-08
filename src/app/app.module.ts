import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { ListOfAccountsComponent } from './list-of-accounts/list-of-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ListOfAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
