import {Component, OnInit} from '@angular/core';
import {CreateTransferService} from '../Services/create-transfer.service';
import {Transfer} from '../Models/Transfer';
import {ListOfAccountsService} from '../Services/list-of-accounts.service';
import {BankAccount} from '../Models/BankAccount';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {
  private newTransfer: Transfer;
  private accounts: BankAccount[];
  private listOfNumberAccounts: string[] = [];
  constructor(private createTransferService: CreateTransferService, private listOfAccountsService: ListOfAccountsService) {
  }

  ngOnInit() {
    this.listOfAccountsService.getListOfAccounts().subscribe((res: BankAccount[]) => {
      this.accounts = res;
      for (let i = 0; i < this.accounts.length; i++) {
        this.listOfNumberAccounts[i] = this.accounts[i].numberAccount;
        console.log(this.accounts[i].numberAccount);
      }
    });
  }

  createNewTransfer(fromNumberAccount: string, toNumberAccount: string, balance: string) {
    this.newTransfer = new Transfer();
    this.newTransfer.fromNumberAccount = fromNumberAccount;
    this.newTransfer.toNumberAccount = toNumberAccount;
    this.newTransfer.balance = balance;
    this.createTransferService.createTransfer(this.newTransfer);
  }
}

