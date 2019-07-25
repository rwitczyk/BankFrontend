import {Component, OnInit} from '@angular/core';
import {AddAccountService} from '../Services/Account/add-account.service';
import {BankAccount} from '../Models/BankAccount';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  bankAccount: BankAccount;
  listOfCurrencies = ['PLN', 'USD', 'GBP', 'EUR', 'CZK', 'CHF', 'ISK'];
  constructor(private addAccountService: AddAccountService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  createNewAccount(nameOfAccount: string, currency: string) {
    if (nameOfAccount.length > 3) {
      this.bankAccount = new BankAccount();

      this.bankAccount.name = nameOfAccount;
      this.bankAccount.balance = '0';
      this.bankAccount.currency = currency;
      this.bankAccount.numberAccount = '';
      for (let i = 0; i < 26; i++) {
        this.bankAccount.numberAccount += this.getRandomIntInclusive(1, 9).toString();
      }
      this.addAccountService.addAccount(this.bankAccount);
      console.log(this.bankAccount);
    }
    else{
      this.toastr.error('Źle wypełniony formularz');
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
