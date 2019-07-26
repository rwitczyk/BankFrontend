import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transfer} from '../../Models/Transfer';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CancelTransferService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  cancelTransfer(transfer: Transfer) {
    this.http.post('https://bankrobloxback.herokuapp.com/api/transfers/cancel', transfer).subscribe(
      value => {this.toastr.success('Pomyślnie anulowano przelew'); } ,
      error => {this.toastr.error('Przelew juz został wykonany!'); });
  }
}
