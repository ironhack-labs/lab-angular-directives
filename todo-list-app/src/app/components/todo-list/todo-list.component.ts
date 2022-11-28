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
  toDoCompleted: boolean;
 
  ngOnInit(): void {}
 
  constructor() {
    this.toDoName = "";
    this.toDoTime = 0;
    this.toDoCompleted = false;
  }
 
  addToDo() {
    const task = new ToDoTask(this.toDoName, this.toDoTime, this.toDoCompleted);
    this.toDoList.push(task);
    this.toDoName = "";
    this.toDoTime = 0;
  }

  makeGreen(task : {completed:boolean}) : void {
    if (task.completed === false ) {
      task.completed = true;
    } else {
      task.completed = false;
    }
    
  }
}
