
import { Component, OnInit } from "@angular/core";
import { toDoItem } from "/IRONHACK/labs/lab-angular-todo/todo/src/app/MODELS/toDoitem.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
[x: string]: any;
  toDoList: toDoItem[] =[];
  toDoName: string;
  toDoIsDone: boolean;
  toDoIsPostponed: boolean;

  constructor(){
    this.toDoName = '';
    this.toDoIsDone = false;
    this.toDoIsPostponed = false;
    this.toDoList.push( new toDoItem("Study", false, false));
    

  }

  addItem(): void{
    const newTask = new toDoItem(this.toDoName, this.toDoIsDone, this.toDoIsPostponed);
    this.toDoList.push(newTask);
    this.toDoName = '';
    this.toDoIsDone = false;
    this.toDoIsPostponed = false;
  }
  updateTask(task: { isDone: boolean; }): void{
    if(task.isDone === false){
      task.isDone = true;
    }
    else{
      task.isDone = false;
    }
   }
   postponeTask(task: { isPostponed: boolean; }): void{
    
    if(task.isPostponed === false){
      task.isPostponed = true;
    
    }else{
      task.isPostponed = false;
    }
   }
  
   deleteTask(task: any): void{
    console.log(task);
    const indexTask=this.toDoList.indexOf(task);
    this.toDoList.splice(indexTask, 1)
   }
   cleanAll(list: any): void{
    for (let task of list){
      if(task.isDone === true){
        const indexTask=this.toDoList.indexOf(task);
        this.toDoList.splice(indexTask, 1)
      }
    }
   }

  ngOnInit(): void {}
}
