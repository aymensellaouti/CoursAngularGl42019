import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo/todo.component';
import {FormsModule} from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailTodoComponent } from './todo/detail-todo/detail-todo.component';
import {ListComponent} from './cv/list/list.component';
import {ItemComponent} from './cv/item/item.component';
import {DetailComponent} from './cv/detail/detail.component';
import {CvComponent} from './cv/cv/cv.component';
import {NgStyleComponent} from './directive/ng-style/ng-style.component';
import {NgClassComponent} from './directive/ng-class/ng-class.component';
import {HighlightDirective} from '../highlight.directive';
import {DefaultImagePipe} from './default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FirstComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailTodoComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    CvComponent,
    NgStyleComponent,
    NgClassComponent,
    HighlightDirective,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
