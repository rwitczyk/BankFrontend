import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {

  constructor(private http: HttpClient) {}

  deleteAccount(id: number) {
    return this.http.get(`${environment.backendUrlHeroku}/api/accounts/delete/` + id);
  }
}
