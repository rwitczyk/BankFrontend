import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  logInUser(login: string, password: string) {
    if (login === 'admin' && password === 'password') {
      this.router.navigate(['/home/']);
    }
  }
}
