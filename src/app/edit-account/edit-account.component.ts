import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountDetailsService} from '../Services/Account/account-details.service';
import {EditAccountService} from '../Services/Account/edit-account.service';
import {BankAccount} from '../Models/BankAccount';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  id: string;
  account: BankAccount;

  constructor(private route: ActivatedRoute, private editAccountService: EditAccountService,
              private accountDetailsService: AccountDetailsService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.accountDetailsService.getDetails(this.id)
      .subscribe((res: BankAccount) => {
        this.account = res;
      });
  }

  saveNewNameOfAccount(newName: string) {
    if (newName.length > 3) {
      this.account.name = newName;
      // console.log(this.account);
      this.editAccountService.editAccount(this.account, this.id);
    }
    else {
      this.toastr.error('Źle wypełniony formularz!');
    }
  }
}
