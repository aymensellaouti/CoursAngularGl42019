import {Injectable} from '@angular/core';
import {Todo} from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      new Todo('Vendredi', 'arriver à l\'heure')
    ];
  }

  logger() {
    console.log(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index < 0) {
      alert('Todo innexistant');
    } else {
      this.todos.splice(index, 1);
    }
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  findTodoByName(name) {
    return this.todos.find((todo) => todo.title === name);
  }

}
