import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../../Models/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  constructor(private http: HttpClient) {}

  getDetails(id: string) {
    return this.http.get<BankAccount>('https://bankrobloxback.herokuapp.com/api/accounts/id/' + id);
  }
}
