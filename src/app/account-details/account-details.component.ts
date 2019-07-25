import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BankAccount} from '../Models/BankAccount';
import {AccountDetailsService} from '../Services/Account/account-details.service';
import {ListOfTransfersService} from '../Services/Transfer/list-of-transfers.service';
import {Transfer} from '../Models/Transfer';
import {CancelTransferService} from '../Services/Transfer/cancel-transfer.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: BankAccount;
  transfersFromNumberAccount: Transfer[];
  transfersToNumberAccount: Transfer[];
  id: string;
  headElementsFrom = ['Na numer konta', 'Kwota przelewu', 'Waluta',
    'Data utworzenia przelewu', 'Data zaksiegowania przelewu', 'Status przelewu', ''];
  headElementsTo = ['Z numeru konta', 'Kwota przelewu', 'Waluta',
    'Data utworzenia przelewu', 'Data zaksiegowania przelewu', 'Status przelewu', ''];

  constructor(private route: ActivatedRoute, private accountService: AccountDetailsService, private listOfTransfers: ListOfTransfersService,
              private cancelTransferService: CancelTransferService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.accountService.getDetails(this.id)
      .subscribe((res: BankAccount) => {
        this.account = res;

        // console.log(this.account.currencyDestinationAccount);

        this.listOfTransfers.getTransfersFromNumberAccount(this.account.numberAccount)
          .subscribe((resTransfersFromNumberAccount: Transfer[]) => {
            this.transfersFromNumberAccount = resTransfersFromNumberAccount;
          });

        this.listOfTransfers.getTransfersToNumberAccount(this.account.numberAccount)
          .subscribe((resTransfersToNumberAccount: Transfer[]) => {
            this.transfersToNumberAccount = resTransfersToNumberAccount;
          });
      });


  }

  cancelTransfer(transfer: Transfer) {
  this.cancelTransferService.cancelTransfer(transfer);
  }
}
