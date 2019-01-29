import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  username = 'input your name';
  constructor() {
  }
  name = '';
  isHighLight = Boolean(this.name.length % 2 === 0);
  showEvent(event) {
    this.name = event.target.value;
  }

  ngOnInit() {
  }


}
