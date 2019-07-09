import { Component, OnInit } from '@angular/core';
import {BankAccountEntity} from '../BankAccountEntity';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css']
})
export class ListOfAccountsComponent implements OnInit {
  private accounts: BankAccountEntity[];
  headElements = ['Saldo', 'Waluta', 'Nazwa konta', 'Numer konta', 'Edytuj', 'Usuń'];
  constructor() { }

  ngOnInit() {
    this.accounts = [
      {balance: '1000', currency: 'PLN', name: 'Robert', numberAccount: '1234'}
    ];
  }

  editAccount(account: Account) {
  }
}
