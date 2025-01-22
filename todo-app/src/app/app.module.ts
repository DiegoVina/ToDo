import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoService } from "./todo.service";

@NgModule({
    declarations: [
        TodoListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [TodoService]
})

export class AppModule {}