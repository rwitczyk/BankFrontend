import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transfer} from '../../Models/Transfer';

@Injectable({
  providedIn: 'root'
})
export class ListOfTransfersService {

  constructor(private http: HttpClient) {}

  getTransfersFromNumberAccount(numberAccount: string) {
    return this.http.get<Transfer[]>('https://bankrobloxback.herokuapp.com/transfers/from/' + numberAccount);
  }

  getTransfersToNumberAccount(numberAccount: string) {
    return this.http.get<Transfer[]>('https://bankrobloxback.herokuapp.com/transfers/to/' + numberAccount);
  }
}
