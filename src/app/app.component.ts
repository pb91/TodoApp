import { Response } from '@angular/http';
import { TodoService } from './services/todo.service';
import ToDo from './models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }
  toggelForm : boolean = false;
  toggelList : boolean = false;
  color:string = '';


  ngOnInit(): void {
 
  }
  changeStyle($event){
    console.log("$event" , $event);
    this.color = $event.type == 'mouseover' ? 'logo-hover' : '';
  }

  toggle(str){
    if(str == "L"){
      this.toggelForm = false;
      this.toggelList = ! this.toggelList 
    }else{
 
      this.toggelList = false;
      this.toggelForm = !this.toggelForm;
    }
  }

}
