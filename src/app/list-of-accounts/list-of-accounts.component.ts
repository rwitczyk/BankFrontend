import { Component, OnInit } from '@angular/core';
import {Account} from '../Account';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css']
})
export class ListOfAccountsComponent implements OnInit {
  private accounts: Account[];
  headElements = ['IDAccount', 'Balance', 'Currency', 'Name', 'Number account'];
  constructor() { }

  ngOnInit() {
    this.accounts = [
      {id: 1, balance: '1000', currency: 'PLN', name: 'Robert', numberAccount: '1234'}
    ];
  }

}
