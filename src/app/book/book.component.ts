import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  x = 0;
  constructor() { }
    imgUrl = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
    forgot = true;

    toggleForgot() {
      this.forgot = !this.forgot;
      this.x += 1;
    }
  ngOnInit() {
  }

}
