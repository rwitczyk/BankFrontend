import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './navbar-logged-in/navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ListOfAccountsComponent} from './list-of-accounts/list-of-accounts.component';
import {MakeTransferComponent} from './make-transfer/make-transfer.component';
import {AddAccountComponent} from './add-account/add-account.component';
import {EditAccountComponent} from './edit-account/edit-account.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {ToastrModule} from 'ngx-toastr';
import {BasicAuthInterceptor} from '../BasicAuthInterceptor';
import {LogInComponent} from './log-in/log-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ListOfAccountsComponent,
    MakeTransferComponent,
    AddAccountComponent,
    EditAccountComponent,
    AccountDetailsComponent,
    LogInComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      extendedTimeOut: 2000,
      easeTime: 500,
      resetTimeoutOnDuplicate: true
    })

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
