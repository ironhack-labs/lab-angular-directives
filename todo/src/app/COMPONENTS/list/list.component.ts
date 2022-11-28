
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  toDoList: string[];
  toDo: string;

  constructor(){
    this.toDoList =[];
    this.toDo = ""
    

  }

  addItem(): void{
    this.toDoList.push(this.toDo)
  }

  ngOnInit(): void {}
}
