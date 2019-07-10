import {Component, OnInit} from '@angular/core';
import {AddAccountService} from '../Services/add-account.service';
import {BankAccount} from '../Models/BankAccount';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  private bankAccount: BankAccount;
  constructor(private addAccountService: AddAccountService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  createNewAccount(nameOfAccount: string, currency: string) {
    this.bankAccount = new BankAccount();

    this.bankAccount.name = nameOfAccount;
    this.bankAccount.balance = '0';
    this.bankAccount.currency = currency;
    this.bankAccount.numberAccount = this.getRandomIntInclusive(1111, 9999);
    this.addAccountService.addAccount(this.bankAccount);

    this.toastr.success('Pomyślnie dodano konto');
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
