import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ListOfAccountsComponent} from './list-of-accounts/list-of-accounts.component';
import {MakeTransferComponent} from './make-transfer/make-transfer.component';
import {AddAccountComponent} from './add-account/add-account.component';
import {EditAccountComponent} from './edit-account/edit-account.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {LogInComponent} from './log-in/log-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LogInComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'accounts', component: ListOfAccountsComponent},
  { path: 'newTransfer', component: MakeTransferComponent},
  { path: 'newAccount', component: AddAccountComponent},
  { path: 'editAccount/:id', component: EditAccountComponent},
  { path: 'detailsAccount/:id', component: AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
