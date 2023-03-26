import { Component } from '@angular/core';

export interface TodoItem {
  name: string,
  checked: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  input: any;

  todoList: TodoItem[] = [
    {
      name: 'Hit the gym',
      checked: false
    },
    {
      name: 'Pay bills',
      checked: true
    },
    {
      name: 'Meet George',
      checked: true
    }
  ];
}
