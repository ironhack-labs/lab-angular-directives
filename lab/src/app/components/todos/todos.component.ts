import { Component } from '@angular/core';
import { TodoList } from 'src/models/todo-list.modal';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: TodoList[] = [];
  postponeTodos: TodoList[] = [];
  newTodo: string;
  isComplete: boolean;
  doValue: string;
  displayCard: string;

  constructor() {
    this.newTodo = '';
    this.isComplete = false;
    this.doValue = 'Done';
    this.displayCard = '';
    // this.todos.push(new TodoList('papas', false));
    // this.todos.push(new TodoList('asd', false));
    // this.todos.push(new TodoList('qwe', false));
  }

  /* -----  Methods ---- */
  addTask(): void {
    const item = new TodoList(this.newTodo, this.isComplete);
    if (this.newTodo === '') {
      alert('enter a task');
    } else {
      this.todos.push(item);
      this.newTodo = '';
    }
  }

  deleteTask(i: number): void {
    this.todos.splice(i, 1);
  }

  isDoneTask(i: any): void {
    this.isComplete = !this.isComplete;
    let task = this.todos[i];
    if (this.isComplete) {
      task.isDone = true;
    } else {
      task.isDone = false;
    }
  }

  postponeTask(i: any): void {
    let task = this.todos[i];
    const item = new TodoList(task.name, task.isDone);
    this.postponeTodos.push(item);
    this.deleteTask(i);
  }

  restoreTask(): void {
    for (const i of this.postponeTodos) {
      this.todos.push(i);
    }
    this.postponeTodos = [];
  }

  clearDoneTask(): void {
    const newArr: TodoList[] = this.todos.filter((element) => {
      return element.isDone == false;
    });
    this.todos = [];
    this.todos = newArr;
  }
}
