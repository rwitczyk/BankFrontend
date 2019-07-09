import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BankAccountEntity} from '../BankAccountEntity';
import {AccountDetailsService} from '../account-details.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  private account: BankAccountEntity;
  private id: string;

  constructor(private route: ActivatedRoute, private accountService: AccountDetailsService) {
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.accountService.getDetails(this.id)
      .subscribe((res: BankAccountEntity) => {
        this.account = res;

        console.log(this.account.currency);
      });
  }
}
