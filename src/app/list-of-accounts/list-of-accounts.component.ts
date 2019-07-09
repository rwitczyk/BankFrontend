import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankAccountEntity} from '../BankAccountEntity';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css']
})
export class ListOfAccountsComponent implements OnInit {
  private accounts: BankAccountEntity[];
  headElements = ['Saldo', 'Waluta', 'Nazwa konta', 'Numer konta', 'Edytuj', 'Usuń'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.accounts = [
      {id: 1, balance: '1000', currency: 'PLN', name: 'Robert', numberAccount: '1234'}
    ];
  }

  accountDetails(id: number) {
    this.router.navigate(['/detailsAccount/' + id]);
  }
}
