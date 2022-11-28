import { Component } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoList: TodoItem[] = [];
  todo: string;
  isCompleted: boolean;
  isPostponed: boolean;
  editing: boolean;
  edited: string;
  index: number;


  constructor(){
    this.todo = "";
    this.isCompleted = false;
    this.isPostponed = false;
    this.editing = false;
    this.edited = "";
    this.index = 0;
  }

  addTodo(){
    if(this.todo === "") return alert("You must write a todo..");
    this.todoList.push(new TodoItem(this.todo, this.isCompleted, this.isPostponed));
    this.todo = "";

  }
  completeTodo(i: number){
    if(this.todoList[i].isCompleted) this.todoList[i].isCompleted = false;
    else{this.todoList[i].isCompleted = true;}
  }

  postponeTodo(i: number){
    this.todoList[i].isPostponed = true;
  }

  removeAll(){
    this.todoList.splice(0, this.todoList.length)
  }

  removeTodo(i: number){
    this.todoList.splice(i, 1);
  }

  removeCompleted(){
    for(let i=this.todoList.length-1; i>=0; i--){
      console.log(i)
      if(this.todoList[i].isCompleted){
        this.todoList.splice(i, 1)
      }
    }  
  }

  restorePostponed(){
    for(let td of this.todoList){
      if(td.isPostponed){
        td.isPostponed = false;
      }
    }
  }

  editTodo(i: number){
    this.todoList[i].todo = this.edited;
    this.editing = false;
    this.edited = "";
  }

  getIndex(i: number){
    this.index = i;
    this.editing = true;
  }
}
