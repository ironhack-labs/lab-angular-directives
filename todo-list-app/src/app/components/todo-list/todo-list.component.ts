import { Component } from '@angular/core';
import { ToDoTask } from "../../models/todo-task.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent{
  toDoList: ToDoTask[] = [];
  toDoName: string;
  toDoTime: number;
 
  ngOnInit(): void {}
 
  constructor() {
    this.toDoName = "";
    this.toDoTime = 0;
  }
 
  addToDo() {
    const task = new ToDoTask(this.toDoName, this.toDoTime);
    this.toDoList.push(task);
    this.toDoName = "";
    this.toDoTime = 0;
  }
}
