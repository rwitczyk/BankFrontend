import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BankAccount} from './BankAccount';

@Injectable({
  providedIn: 'root'
})
export class ListOfAccountsService {
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

  getDetails() {
    this.prepareHeader();
    return this.http.get<BankAccount[]>('/api/accounts', {headers: this.headersObject});
  }
}
