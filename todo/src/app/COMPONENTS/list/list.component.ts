
import { Component, OnInit } from "@angular/core";
import { toDoItem } from "/IRONHACK/labs/lab-angular-todo/todo/src/app/MODELS/toDoitem.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  toDoList: toDoItem[] =[];
  toDoName: string;
  toDoIsDone: boolean;

  constructor(){
    this.toDoName = '';
    this.toDoIsDone = false;
    this.toDoList.push( new toDoItem("Study", false));
    

  }

  addItem(): void{
    const newTask = new toDoItem(this.toDoName, this.toDoIsDone);
    this.toDoList.push(newTask);
    this.toDoName = '';
    this.toDoIsDone = false;
  }
  updateTask(task: { isDone: boolean; }): void{
    task.isDone = true;
    
  }

  ngOnInit(): void {}
}
