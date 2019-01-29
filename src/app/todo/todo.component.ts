import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  input = '';
  // inputs(event: any) {
  //   this.input = event.target.value;
  // }
  todos = [
    {name: "1", completed: false, id: Math.random() * 1000},
    {name: 2, completed: false, id: Math.random() * 1000},
    {name: 3, completed: false, id: Math.random() * 1000}
  ];
  add() {
    this.todos.unshift({name: this.input, completed: false, id: Math.random() * 1000})
    this.input = '';
  }
  del(id) {
    for(let i in this.todos) {
      if(this.todos[i].id === id) {
        this.todos.splice(parseInt(i), 1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
