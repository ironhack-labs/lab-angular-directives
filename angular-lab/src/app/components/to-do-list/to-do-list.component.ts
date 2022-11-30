import { Component } from '@angular/core';
import { task } from 'src/app/models/task.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  taskList: task[] = [];
  postponedTasks: task[] = [];
  taskName: string;
  taskTime: number;
  taskCompleted: boolean;
  taskPostponed: boolean;

  ngOnInit(): void {}

  constructor() {
    this.taskName = '';
    this.taskTime = 0;
    this.taskCompleted = false;
    this.taskPostponed = false;
  }

  addtask() {
    const newTask = new task(
      this.taskName,
      this.taskCompleted,
      this.taskPostponed
    );
    this.taskList.push(newTask);
    this.taskName = '';
    this.taskTime = 0;
  }

  greenCompleteds(task: { completed: boolean }) {
    !task.completed ? (task.completed = true) : (task.completed = false);
  }

  removeBtn(task: { name: string }) {
    //This removes all tasks with the same name, it would be good to use a loop to remove just the first ocurrence, some id/idx system, etc to improve this functionality
    this.taskList = this.taskList.filter((item) => item.name !== task.name);
  }

  postponeBtn(i: number) {
    this.postponedTasks.push(this.taskList.splice(i, 1)[0]);
  }

  removeCompleted() {
    this.taskList = this.taskList.filter((item) => item.completed !== true);
    console.log(this);
  }

  restorePosponed() {
    for (let i = 0; i < this.postponedTasks.length; i++) {
      this.taskList.push(this.postponedTasks[i]);
    }
    this.postponedTasks = [];
  }
}
