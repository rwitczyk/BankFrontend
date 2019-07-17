import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {BankAccount} from '../Models/BankAccount';
import {Router} from '@angular/router';
import {ListOfAccountsService} from '../Services/Account/list-of-accounts.service';
import {DeleteAccountService} from '../Services/Account/delete-account.service';
import {ToastrService} from 'ngx-toastr';
import {MdbTableDirective} from 'angular-bootstrap-md';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css'],
})
export class ListOfAccountsComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  private accounts: BankAccount[];
  previous: string;
  searchText = '';
  headElements = ['Saldo', 'Waluta', 'Nazwa konta', 'Numer konta', 'Edytuj', 'Usuń'];

  constructor(private router: Router, private accountService: ListOfAccountsService, private deleteAccountService: DeleteAccountService,
              private toastr: ToastrService, private dialog: MatDialog) {}

  ngOnInit() {
    this.accountService.getListOfAccounts()
      .subscribe((res: BankAccount[]) => {
        this.accounts = res;

        this.mdbTable.setDataSource(this.accounts);
        this.accounts = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      });
  }

  openDialog(id: number) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((showSnackBar: boolean) => {
      if (showSnackBar) {
        this.deleteAccount(id);
      }
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

  @HostListener('input') oninput() {
    this.searchItems();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.accounts = this.mdbTable.getDataSource();
      console.log('siema');
    }

    if (this.searchText) {
      this.accounts = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
      console.log('elo');
    }
  }

  onYesClick()
  {

  }
}
