import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transfer} from '../../Models/Transfer';

@Injectable({
  providedIn: 'root'
})
export class ListOfTransfersService {

  constructor(private http: HttpClient) {}

  getTransfers(numbertAccount: string) {
    return this.http.get<Transfer[]>('/api/transfers/' + numbertAccount);
  }
}
