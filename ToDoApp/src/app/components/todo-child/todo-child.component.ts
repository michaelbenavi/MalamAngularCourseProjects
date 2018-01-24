import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.css']
})
export class TodoChildComponent implements OnInit {

  constructor(private todoSrv: TodoService) { }
  todos: Todo[];
  ngOnInit() {
    this.todos = this.todoSrv.todos;
  }

}
