import { Component } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoList: TodoItem[] = [];
  todoName: string;  

  constructor() {
    this.todoName = "";    
  }

  addTodo() {
    const item = new TodoItem(this.todoName);
    this.todoList.push(item);
    this.todoName = "";
  }

  isCompleted(i:number) {
    if(this.todoList[i].isCompleted) {
      this.todoList[i].isCompleted = false;
    } else {
      this.todoList[i].isCompleted = true;
    } 
  }

  isPostponed(i:number) {
    this.todoList[i].isPostponed = true;
  }

  deleteAll() {
    this.todoList.splice(0, this.todoList.length);
  }

  delete(i:number) {
    this.todoList.splice(i, 1);
  }

  removeCompleted() {
    this.todoList = this.todoList.filter(element => element.isCompleted === false);
  }

  restorePostponed() {
    console.log(this.todoList)
    for(let i = 0; i < this.todoList.length; i++) {
      this.todoList[i].isPostponed = false
    }

    console.log(this.todoList)
  }

  isSelected() {

  }

}
