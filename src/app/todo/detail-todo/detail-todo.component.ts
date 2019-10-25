import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoService} from '../services/todo.service';
import {Todo} from '../Model/todo';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
  todo: Todo;
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.todo = this.todoService.findTodoByName(params.name);
      }
    );
  }

}
