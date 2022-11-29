import { Component } from '@angular/core';
import { ToDoTask } from "../../models/todo-task.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent{
  toDoList: ToDoTask[] = [];
  toDoPostponedList : ToDoTask[] = [];
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
    if (this.toDoName !== "") {
      const task = new ToDoTask(this.toDoName, this.toDoTime, this.toDoCompleted);
      this.toDoList.push(task);
      this.toDoName = "";
      this.toDoTime = 0;
    } else {
      alert ("You're trying to add an empty task. Please type something :)")
    }
  }

  makeGreen(task : {completed:boolean}) {
    task.completed === false? task.completed = true : task.completed = false;
  }

  remove(task : ToDoTask) {
    this.toDoList = this.toDoList.filter(item => item !== task)
  }

  removeCompleted() {
    this.toDoList = this.toDoList.filter(item => item.completed !== true)
  }

  retrievePosponed() {
    for (let i=0; i<this.toDoPostponedList.length; i++){
      this.toDoList.push(this.toDoPostponedList[i])
    }
    this.toDoPostponedList = []
  }

  postpone(index:number) {
      this.toDoPostponedList.push(this.toDoList.splice(index,1)[0])
  }
}
