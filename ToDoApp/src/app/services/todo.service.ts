import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }

  lastId: number = 0;
  todos: Todo[] = [];

  addToDo(todo:Todo) {
    if (!todo.id) {
      todo.id= ++this.lastId;
    }
    this.todos.push(todo);
  }

  deleteTodoById(id:number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos;
  }

  getAllTodos():Todo[] {
    return this.todos;
  }


  updateToDoById(id:number,values:Object ={}):Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo,values);
    return todo;
    }

  getTodoById(id:number):Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }


  toggleTodoComplete(todo:Todo) {
    const updateTodo = this.updateToDoById(todo.id,{
      complete:!todo.complete
    });
    return updateTodo;
  }

}
