import { Component } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoList: TodoItem [] = [];
  todo: string;
  postponedList: TodoItem [] = [];
  

  constructor() {

    this.todo = "";    
  }

  addTodo() {
    const item = new TodoItem(this.todo);
    this.todoList.push(item);
    this.todo = "";
  }

  isPostponed(i:number) {
    this.todoList[1].isPostponed === true;
  }

  deleteTodos() {

  }

  removeCompleted() {

  }

  restorePostponed() {

  }



}
