import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private hero: string;

  constructor() { }

  ngOnInit() {
    this.hero = 'siema';
  }

}
