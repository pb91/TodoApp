import { Response } from '@angular/http';
import { TodoService } from './services/todo.service';
import ToDo from './models/todo.model';
import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import {ElementRef , ViewChild} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private todoService: TodoService ,private scrollService: ScrollToService
  ) { }
  toggelForm : boolean = false;
  toggelList : boolean = false;
  color:string = '';
  save: boolean =false;
  @ViewChild('win') win: ElementRef;


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

  scrollTo(){

    let element = this.win.nativeElement.querySelector(".scroll");
    console.log("element" , element);
    this.scrollService.scrollTo(element);
  }

  formClose(){
    this.save = true;
    this.toggelForm = !this.toggelForm;

    setTimeout(()=>{
      this.save =false
    } , 5000)

  }

  

}
