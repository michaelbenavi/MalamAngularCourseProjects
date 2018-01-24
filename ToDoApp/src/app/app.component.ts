import { TodoService } from './services/todo.service';
import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private todoSrv: TodoService) {

  }

   newTodo: Todo = new Todo();
   addTodo() {
    this.todoSrv.addToDo(this.newTodo);
    this.newTodo = new Todo();
   }

   toggleTodoComplete(todo) {
    this.todoSrv.toggleTodoComplete(todo);
   }

   removeTodo(todo) {
    this.todoSrv.deleteTodoById(todo.id);

   }

   get todos(){
     return this.todoSrv.getAllTodos();
   }




}
