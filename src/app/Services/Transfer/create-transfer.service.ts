import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transfer} from '../../Models/Transfer';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CreateTransferService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  createTransfer(transfer: Transfer) {
    this.http.post('https://bankrobloxback.herokuapp.com/api/transfer/new', transfer).subscribe(
      value => {this.toastr.success('Wykonano przelew'); } ,
      error => {this.toastr.error(error.error.message); });
  }
}
