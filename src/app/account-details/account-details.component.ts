import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BankAccountEntity} from '../BankAccountEntity';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  private account: BankAccountEntity;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  private headersObject: HttpHeaders;
  private id: string;

  prepareHeader() {
    this.headersObject = new HttpHeaders();
    this.headersObject.append('Content-Type', 'application/json');
    this.headersObject.append('Access-Control-Allow-Origin', '*');
    this.headersObject.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.headersObject.append('Authorization', 'Basic ' + btoa('admin:password'));
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  getDetails() {
    this.prepareHeader();
    this.http.get<BankAccountEntity>('/api/accounts/id/' + this.id, {headers: this.headersObject})
      .subscribe((res: BankAccountEntity) => {
        console.log(res);
        this.account = res;
        console.log(this.account.currency);
      });
  }

}
