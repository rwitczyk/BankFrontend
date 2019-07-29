import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../../Models/BankAccount';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListOfAccountsService {
  constructor(private http: HttpClient) {}

  getListOfAccounts() {
    return this.http.get<BankAccount[]>(`${environment.backendUrlHeroku}/api/accounts`);
  }
}
