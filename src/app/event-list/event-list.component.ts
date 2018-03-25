import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { TodoService } from '../services/todo.service';
import ToDo from '../models/todo.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  todosList: ToDo[] = [];
 
  editTodos: ToDo[] = [];

  ngOnInit(): void {
    this.todoService.getToDos()
      .subscribe(todos => {
        this.todosList = todos
        console.log(todos)
      })
  }


 

  editTodo(todo: ToDo) {
    console.log(todo)
    if (this.todosList.includes(todo)) {
      if (!this.editTodos.includes(todo)) {
        this.editTodos.push(todo)
      } else {
        this.editTodos.splice(this.editTodos.indexOf(todo), 1)
        this.todoService.editTodo(todo).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editTodo(todo)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  doneTodo(todo: ToDo) {
    todo.status = true;
    this.todoService.editTodo(todo).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editTodo(todo)
      console.error('Update Unsuccesful')
    })
  }

  deleteTodo(todo: ToDo) {
    this.todoService.deleteTodo(todo._id).subscribe(res => {
      this.todosList.splice(this.todosList.indexOf(todo), 1);
    })
  }


}
