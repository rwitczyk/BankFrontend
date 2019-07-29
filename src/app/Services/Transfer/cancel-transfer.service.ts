import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transfer} from '../../Models/Transfer';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancelTransferService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  cancelTransfer(transfer: Transfer) {
    this.http.post(`${environment.backendUrlHeroku}/api/transfers/cancel`, transfer).subscribe(
      value => {this.toastr.success('Pomyślnie anulowano przelew'); } ,
      error => {this.toastr.error('Przelew juz został wykonany!'); });
  }
}
