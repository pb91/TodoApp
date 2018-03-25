import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HiglighterDirective } from './higlighter.directive';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { EventListComponent } from './event-list/event-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HiglighterDirective,
    SubmitFormComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
