import {Component, OnInit} from '@angular/core';
import {BankAccount} from '../BankAccount';
import {Router} from '@angular/router';
import {ListOfAccountsService} from '../list-of-accounts.service';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css']
})
export class ListOfAccountsComponent implements OnInit {
  private accounts: BankAccount[];
  headElements = ['Saldo', 'Waluta', 'Nazwa konta', 'Numer konta', 'Edytuj', 'Usuń'];

  constructor(private router: Router, private accountService: ListOfAccountsService) { }

  ngOnInit() {
    this.accountService.getDetails()
      .subscribe((res: BankAccount[]) => {
        this.accounts = res;
      });
  }

  accountDetails(id: number) {
    this.router.navigate(['/detailsAccount/' + id]);
  }
}
