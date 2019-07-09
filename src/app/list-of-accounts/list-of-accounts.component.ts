import {Component, OnInit} from '@angular/core';
import {BankAccountEntity} from '../BankAccountEntity';
import {Router} from '@angular/router';
import {ListOfAccountsService} from '../list-of-accounts.service';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css']
})
export class ListOfAccountsComponent implements OnInit {
  private accounts: BankAccountEntity[];
  headElements = ['Saldo', 'Waluta', 'Nazwa konta', 'Numer konta', 'Edytuj', 'Usuń'];

  constructor(private router: Router, private accountService: ListOfAccountsService) { }

  ngOnInit() {
    this.accountService.getDetails()
      .subscribe((res: BankAccountEntity[]) => {
        this.accounts = res;
      });
  }

  accountDetails(id: number) {
    this.router.navigate(['/detailsAccount/' + id]);
  }
}
