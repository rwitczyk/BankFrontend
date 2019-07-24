import {Component, OnInit} from '@angular/core';
import {GetUsersFromMagdaService} from '../Services/User/get-users-from-magda.service';
import {UserMagda} from '../Models/UserMagda';

@Component({
  selector: 'app-show-users-from-magda',
  templateUrl: './show-users-from-magda.component.html',
  styleUrls: ['./show-users-from-magda.component.css']
})
export class ShowUsersFromMagdaComponent implements OnInit {

  private usersMagda: UserMagda[];
  private headElements = ['id', 'Numer konta', 'Saldo', 'Waluta', 'Właściciel'];

  constructor(private getUsersFromMagdaService: GetUsersFromMagdaService) {
  }

  ngOnInit() {
    this.getUsersFromMagdaService.getAllUsersFromMagdaApi().subscribe(value => {
      console.log(value);
      this.usersMagda = value;
    });
  }

}
