import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../../Models/BankAccount';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditAccountService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  editAccount(account: BankAccount, id: string) {
    this.http.post(`${environment.backendUrlHeroku}/api/accounts/edit/name/` + id, account).subscribe(
      value => {this.toastr.success('Pomyślnie edytowano konto'); } ,
      error => {this.toastr.error(error.error.message); });
  }
}
