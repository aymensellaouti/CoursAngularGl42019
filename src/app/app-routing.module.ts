import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo/todo.component';
import {FirstComponent} from './first/first.component';
import {DetailTodoComponent} from './todo/detail-todo/detail-todo.component';
import {CvComponent} from './cv/cv/cv.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvComponent},
  {path: 'todo/:name', component: DetailTodoComponent},
  {path: 'first', component: FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
