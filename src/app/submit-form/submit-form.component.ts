import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Response } from '@angular/http';
import { TodoService } from '../services/todo.service';
import ToDo from '../models/todo.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  public newTodo: ToDo = new ToDo()
  @Output() resetForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    todosList: ToDo[] = [];

  ngOnInit() {


  }

  create(obj : NgForm) {

   console.log("ngform" , obj);
   if(!obj.invalid){
    console.log("this new todo" ,this.newTodo );
    this.todoService.createTodo(this.newTodo)
    .subscribe((res) => {
      console.log(" this.todosList" , this.todosList);
      console.log('res' ,res)
      this.todosList.push(res.data)
      this.newTodo = new ToDo();
      obj.reset;
      // setTimeout(function(){ this.resetForm.emit(false);}, 1000)
      this.resetForm.emit(false);
    })
   }else{return;}
 
  }

}
