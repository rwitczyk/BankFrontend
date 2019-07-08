import { Component, OnInit } from '@angular/core';
import {BankAccount} from '../BankAccount';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css']
})
export class ListOfAccountsComponent implements OnInit {
  private accounts: BankAccount[];
  headElements = ['ID Konta', 'Saldo', 'Waluta', 'Nazwa konta', 'Numer konta', 'Edytuj', 'Usuń'];
  constructor() { }

  ngOnInit() {
    this.accounts = [
      {id: 1, balance: '1000', currency: 'PLN', name: 'Robert', numberAccount: '1234'}
    ];
  }
}
