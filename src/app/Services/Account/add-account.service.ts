import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../../Models/BankAccount';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AddAccountService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  addAccount(account: BankAccount) {
    this.http.post('https://bankrobloxback.herokuapp.com/api/accounts/add', account).subscribe(
      value => {
        this.toastr.success('Pomyślnie dodano konto');
      },
      error => {
        this.toastr.error(error.error.message);
      });
  }
}
