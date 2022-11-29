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
  savedItems: ToDoItem[] = [];
  editName: string;

  constructor() {
    this.itemName = '';
    this.editName = ''
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
    console.log('New postponed', this.savedItems)
  }

  delete(i: number) {
    this.toDosList.splice(i, 1)
  }

  //Something weird is happening here :(
  retrievePostponed() {
    this.savedItems.map((el, i) => {
      this.toDosList.push(new ToDoItem(el.name, el.completed))
      this.savedItems.splice(i, 1)
      console.log('FullList', this.savedItems)
    })
  }

  editToDo(i: number) {
    this.toDosList.splice(i, 1)
    this.toDosList.splice(i, 0, new ToDoItem(`${this.editName}`, false))
    this.editName = ''
  }
}
