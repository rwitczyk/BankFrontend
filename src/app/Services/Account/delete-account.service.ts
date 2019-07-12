import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {

  constructor(private http: HttpClient) {}

  deleteAccount(id: number) {
    return this.http.get('api/accounts/delete/' + id);
  }
}
