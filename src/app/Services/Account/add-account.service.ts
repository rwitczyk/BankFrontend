import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../../Models/BankAccount';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddAccountService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  addAccount(account: BankAccount) {
    this.http.post(`${environment.backendUrlHeroku}/api/accounts/add`, account).subscribe(
      value => {
        this.toastr.success('Pomyślnie dodano konto');
      },
      error => {
        this.toastr.error(error.error.message);
      });
  }
}
