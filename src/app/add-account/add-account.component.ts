import {Component, OnInit} from '@angular/core';
import {AddAccountService} from '../Services/Account/add-account.service';
import {BankAccount} from '../Models/BankAccount';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  private bankAccount: BankAccount;
  constructor(private addAccountService: AddAccountService) { }

  ngOnInit() {
  }

  createNewAccount(nameOfAccount: string, currency: string) {
    this.bankAccount = new BankAccount();

    this.bankAccount.name = nameOfAccount;
    this.bankAccount.balance = '0';
    this.bankAccount.currency = currency;
    this.bankAccount.numberAccount = this.getRandomIntInclusive(1111, 9999);
    this.addAccountService.addAccount(this.bankAccount);
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
