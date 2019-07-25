import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../../Models/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class ListOfAccountsService {
  constructor(private http: HttpClient) {}

  getListOfAccounts() {
    return this.http.get<BankAccount[]>('https://bankrobloxback.herokuapp.com/accounts');
  }
}
