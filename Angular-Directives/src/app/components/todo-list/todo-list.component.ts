import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToDoItem } from "../../models/toDo-item.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoListComponent implements OnInit {
  toDosList: ToDoItem[] = []
  itemName: string;
  isCompleted: boolean;
  savedItems: ToDoItem[] = []

  constructor() {
    this.itemName = '';
    this.isCompleted = false;
    this.toDosList.push(new ToDoItem("Clean the kitchen", false));
    this.toDosList.push(new ToDoItem("Buy food", false));
    this.toDosList.push(new ToDoItem("Walk the dog", false));
    this.toDosList.push(new ToDoItem("Mine code", false));
  }

  ngOnInit(): void { }

  addItem(): void {
    this.toDosList.push(new ToDoItem(`${this.itemName}`, false))
    this.itemName = ''
    this.isCompleted = false
  }

  setIsCompleted() {
    this.isCompleted = !this.isCompleted
  }

  deleteCompleted() {
    this.toDosList = this.toDosList.filter(el => el.completed === false)
  }

  postpone(i: number) {
    this.savedItems.push(new ToDoItem(this.toDosList[i].name, this.toDosList[i].completed))
    this.toDosList.splice(i, 1)
  }

  delete(i: number) {
    this.toDosList.splice(i, 1)
  }

  retrievePostponed() {
    this.savedItems.forEach((el) => {
      this.toDosList.push(new ToDoItem(el.name, el.completed))
    })
  }
}





