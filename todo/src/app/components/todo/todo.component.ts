import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: TodoItem[] = [];
  todoPostone: TodoItem[] = [];
  itemName: string;
  todoIsDone: boolean;
  todoIsPostpone: boolean; 


  constructor(){
    this.itemName = "";  
    this.todoIsDone = false;
    this.todoIsPostpone = false;  
    this.todoList.push(new TodoItem("work", false, false));
    
    
  }

  addTodoItem() {
    const item = new TodoItem(this.itemName, this.todoIsDone, this.todoIsPostpone);
    this.todoList.push(item);
    this.itemName = "";
    this.todoIsDone = false;
    this.todoIsPostpone = false;    
  }  
  

  addTodoDone(item: {isDone: boolean}): void {   
    console.log("addTodoDone calling")
    
    if(item.isDone === true){
      item.isDone = false;
    }
    else {
      item.isDone = true;
    }   
    
  } 

  

  addTodoPostpone(item: any,index:number): void {
    console.log("addTodoPostpone calling")

    if(item.isPostpone === true){
      item.isPostpone = false;
    } else {
      item.isPostpone = true;
    }

    this.todoPostone.push(item);
    this.todoList.splice(index, 1);

    //const notPostponed = this.todoList.filter((item)=> item.isPostpone === false)    
    //this.todoList = notPostponed;    
  } 

  bringBackPostponed(): void {  
       
    for (const item of this.todoPostone){
      item.isPostpone = false;
      this.todoList.push(item);
    }
    this.todoPostone.splice(0);
  }


  deleteTodo(item: any): void {
    console.log("deleteTodo calling")

    const position = this.todoList.indexOf(item);
    this.todoList.splice(position, 1)
  }

  

  cleanCompleted(): void {    
    const notCompleted = this.todoList.filter((item)=> item.isDone === false)
    this.todoList = notCompleted;
  } 

  restoreCompleted(): void {
    
  }

  

  ngOnInit(): void {}
 
}
