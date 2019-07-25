import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../../Models/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  constructor(private http: HttpClient) {}

  getDetails(id: string) {
    return this.http.get<BankAccount>('https://bankrobloxback.herokuapp.com/accounts/id/' + id);
  }
}
