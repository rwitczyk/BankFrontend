import {Component, OnInit} from '@angular/core';
import {CreateTransferService} from '../Services/create-transfer.service';
import {Transfer} from '../Models/Transfer';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {
  private newTransfer: Transfer;
  constructor(private createTransferService: CreateTransferService) {
  }

  ngOnInit() {
  }

  createNewTransfer(fromNumberAccount: string, toNumberAccout: string, balance: string) {
    this.newTransfer = new Transfer();
    this.newTransfer.fromNumberAccount = fromNumberAccount;
    this.newTransfer.toNumberAccount = toNumberAccout;
    this.newTransfer.balance = balance;
    this.createTransferService.createTransfer(this.newTransfer);
  }
}

