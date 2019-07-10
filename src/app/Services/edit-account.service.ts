import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BankAccount} from '../Models/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class EditAccountService {
  private headersObject: HttpHeaders;

  prepareHeader() {
    this.headersObject = new HttpHeaders();
    this.headersObject.append('Content-Type', 'application/json');
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Authorization', 'Basic ' + btoa('admin:password'));
  }

  constructor(private http: HttpClient) {
  }

  editAccount(account: BankAccount, id: string) {
    this.prepareHeader();
    this.http.post('/api/accounts/edit/name/' + id, account, {headers: this.headersObject}).subscribe();
  }
}
