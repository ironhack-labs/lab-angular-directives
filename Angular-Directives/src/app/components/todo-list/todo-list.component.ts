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

  constructor() {
    this.itemName = '';
    this.isCompleted = false;
    this.toDosList.push(new ToDoItem("Clean the kitchen", false));
    this.toDosList.push(new ToDoItem("Buy food", false));
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

  postpone(i: number) {
    let savedItem = this.toDosList[i]
    this.toDosList.splice(i, 1)
    setTimeout(() => {
      this.toDosList.splice(i, 0, new ToDoItem(savedItem.name, savedItem.completed));
    }, 5000);
  }

  delete(i: number) {
    this.toDosList.splice(i, 1)
  }
}





