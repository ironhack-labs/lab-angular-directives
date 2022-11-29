import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: TodoItem[] = [];
  itemName: string;
  

  ngOnInit(): void {}


  constructor(){
    this.itemName = "";    
    this.todoList.push(new TodoItem("work", false, false));
    this.todoList.push(new TodoItem("clean", false, false));
    this.todoList.push(new TodoItem("sport", false, false));
    
  }

  addTodoItem() {
    const item = new TodoItem(this.itemName, false, false);
    this.todoList.push(item);
    this.itemName = "";    
  }

  addTodoDone(i: number) {   
    
    if(this.todoList[i].isDone === true){
      this.todoList[i].isDone = false;
    }
    else {
      this.todoList[i].isDone = true;
    }   
    
  } 

  addTodoPostpone(i: number){
    if(this.todoList[i].isPostpone === true){
      this.todoList[i].isPostpone === false;
    }else {
      this.todoList[i].isPostpone === true;
    }
  }

  

}
