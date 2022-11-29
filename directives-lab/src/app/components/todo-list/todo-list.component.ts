import { Component } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoList: TodoItem [] = [];
  todoName: string;
  postponedList: TodoItem [] = [];
  

  constructor() {

    this.todoName = "";    
  }

  addTodo() {
    const item = new TodoItem(this.todoName);
    this.todoList.push(item);
    this.todoName = "";
  }

  isCompleted(i:number) {
    this.todoList[i].isCompleted = true;   
  }

  isPostponed(i:number) {
    this.todoList[i].isPostponed = true;
    this.postponedList.push(this.todoList[i]);
    console.log(this.postponedList);
    
  }

  deleteTodos() {
    this.todoList.splice(0, this.todoList.length);
  }

  removeCompleted() {
    this.todoList.forEach(element => {
      if(element.isCompleted === true) {
        this.todoList.pop();
      }      
    });

  }

  restorePostponed() {
    return this.postponedList;
  }

  isSelected() {

  }



}
