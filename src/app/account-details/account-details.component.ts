import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BankAccount} from '../Models/BankAccount';
import {AccountDetailsService} from '../Services/account-details.service';
import {ListOfTransfersService} from '../Services/list-of-transfers.service';
import {Transfer} from '../Models/Transfer';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  private account: BankAccount;
  private transfers: Transfer[];
  private id: string;
  headElements = ['Na numer konta', 'Kwota przelewu', 'Waluta', 'Data utworzenia przelewu', 'Data zaksiegowania przelewu', 'Status przelewu'];

  constructor(private route: ActivatedRoute, private accountService: AccountDetailsService, private listOfTransfers: ListOfTransfersService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.accountService.getDetails(this.id)
      .subscribe((res: BankAccount) => {
        this.account = res;

        // console.log(this.account.currency);

        this.listOfTransfers.getTransfers(this.account.numberAccount)
          .subscribe((resTransfers: Transfer[]) => {
            this.transfers = resTransfers;

            // console.log(this.transfers);
          });
      });
  }
}
