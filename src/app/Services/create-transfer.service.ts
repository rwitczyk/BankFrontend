import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transfer} from '../Models/Transfer';

@Injectable({
  providedIn: 'root'
})
export class CreateTransferService {
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

  createTransfer(transfer: Transfer) {
    this.prepareHeader();
    this.http.post('/api/transfer/new', transfer, {headers: this.headersObject}).subscribe();
  }
}
