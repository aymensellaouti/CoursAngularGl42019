import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo/services/todo.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }
  loggerTodo() {
    this.todoService.logger();
  }

}
