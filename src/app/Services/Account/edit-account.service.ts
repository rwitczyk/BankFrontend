import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../../Models/BankAccount';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EditAccountService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  editAccount(account: BankAccount, id: string) {
    this.http.post('https://bankrobloxback.herokuapp.com/api/accounts/edit/name/' + id, account).subscribe(
      value => {this.toastr.success('Pomyślnie edytowano konto'); } ,
      error => {this.toastr.error(error.error.message); });
  }
}
