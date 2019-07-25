import {Component, OnInit} from '@angular/core';
import {CreateTransferService} from '../Services/Transfer/create-transfer.service';
import {Transfer} from '../Models/Transfer';
import {ListOfAccountsService} from '../Services/Account/list-of-accounts.service';
import {BankAccount} from '../Models/BankAccount';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {
  newTransfer: Transfer;
  accounts: BankAccount[];
  listOfNumberAccounts = [];
  transferForm: FormGroup;

  constructor(private createTransferService: CreateTransferService, private listOfAccountsService: ListOfAccountsService,
              private toastr: ToastrService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.listOfAccountsService.getListOfAccounts().subscribe((res: BankAccount[]) => {
      this.accounts = res;
      for (let i = 0; i < this.accounts.length; i++) {
        this.listOfNumberAccounts[i] = this.accounts[i].numberAccount;
        //   console.log(this.accounts[i].numberAccount);
      }
    });

    this.transferForm = this.fb.group({
      balanceBeforeChangeCurrency: ['', [Validators.pattern('^[0-9]*([.][0-9]{1,2})?'), Validators.required]],
      fromNumberAccount: [''],
      toNumberAccount: [''],
      toExternalNumberAccount: [''],
      email: ['', Validators.email]
    });
  }

  createNewTransfer() {
    if (this.transferForm.get('balanceBeforeChangeCurrency').hasError('pattern') ||
      this.transferForm.get('balanceBeforeChangeCurrency').hasError('required') || this.transferForm.get('email').hasError('email')) {
      this.toastr.error('Źle wypełniony formularz');
    }
    else {
      if (this.transferForm.value.fromNumberAccount !== this.transferForm.value.toNumberAccount) {
        this.newTransfer = new Transfer();
        this.newTransfer.fromNumberAccount = this.transferForm.value.fromNumberAccount;
        this.newTransfer.toNumberAccount = this.transferForm.value.toNumberAccount;
        this.newTransfer.transferToBank = 0;
        if (this.newTransfer.toNumberAccount.length < 1) {
          this.newTransfer.toNumberAccount = this.transferForm.value.toExternalNumberAccount;
          this.newTransfer.transferToBank = 1;
        }
        this.newTransfer.balanceAfterChangeCurrency = this.transferForm.value.balanceAfterChangeCurrency;
        this.newTransfer.balanceBeforeChangeCurrency = this.transferForm.value.balanceBeforeChangeCurrency;
        console.log(this.newTransfer);
        this.createTransferService.createTransfer(this.newTransfer);
      } else {
        this.toastr.error('Nie mozesz wykonać przelewu na to samo konto!');
      }
    }
  }
}

