import {Component, OnInit} from '@angular/core';
import {BankAccount} from '../Models/BankAccount';
import {Router} from '@angular/router';
import {ListOfAccountsService} from '../Services/list-of-accounts.service';
import {DeleteAccountService} from '../Services/delete-account.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css']
})
export class ListOfAccountsComponent implements OnInit {
  private accounts: BankAccount[];
  headElements = ['Saldo', 'Waluta', 'Nazwa konta', 'Numer konta', 'Edytuj', 'Usuń'];

  constructor(private router: Router, private accountService: ListOfAccountsService, private deleteAccountService: DeleteAccountService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.accountService.getListOfAccounts()
      .subscribe((res: BankAccount[]) => {
        this.accounts = res;
      });
  }

  accountDetails(id: number) {
    this.router.navigate(['/detailsAccount/' + id]);
  }

  deleteAccount(id: number) {
    event.stopPropagation(); // aby nie przechodzilo na inny komponent po wcisnieciu button 'Delete'
    this.deleteAccountService.deleteAccount(id)
      .subscribe(
        value => {
          this.toastr.success('Pomyślnie usunięto konto');
        },
        error => {
          this.toastr.error('Błąd usuwania konta');
        });

    window.location.reload();
  }
}
