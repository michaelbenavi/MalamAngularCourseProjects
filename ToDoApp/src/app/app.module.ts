import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoChildComponent } from './components/todo-child/todo-child.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
