import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {
  private headersObject: HttpHeaders;

  private prepareHeaders() {
    this.headersObject = new HttpHeaders();
    this.headersObject.append('Content-Type', 'application/json');
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Authorization', 'Basic ' + btoa('admin:password'));
  }

  constructor(private http: HttpClient) {
  }

  deleteAccount(id: number) {
    this.prepareHeaders();
    return this.http.get('api/accounts/delete/' + id, {headers: this.headersObject});
  }
}
