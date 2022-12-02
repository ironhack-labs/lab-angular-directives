
import { Component, OnInit } from "@angular/core";
import { takeLast } from "rxjs";
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
  updateTask(task: { isDone: boolean; isPostponed: boolean; }): void{
    if(task.isDone === false && task.isPostponed === false){
      task.isDone = true;
      console.log(task)
    }
    else{
      task.isDone = false;
    }
   }
   postponeTask(task: { isPostponed: boolean; isDone: boolean}): void{
    
    
    if(task.isPostponed === false){
      task.isPostponed = true;
      task.isDone = false;
      
      
    
    }else{
      task.isPostponed = false;
      task.isDone = false;
    }
   }
  
   deleteTask(task: any): void{
    
    const indexTask=this.toDoList.indexOf(task);
    this.toDoList.splice(indexTask, 1)
   }
   cleanAll(): void{
    
    
    const updatedList = this.toDoList.filter((task: { isDone: boolean; })=> task.isDone === false)
    
    console.log(updatedList)
    this.toDoList = updatedList;
   }

   restoreAll(list: any): void{
    
    for(let task of list){
     
      if(task.isPostponed === true){
        task.isPostponed = false;
        task.isDone = false;
      }
    }
   }

  ngOnInit(): void {}
}
