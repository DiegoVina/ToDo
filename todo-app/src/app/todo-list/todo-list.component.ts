import { Component } from "@angular/core";
import { TodoService } from "../todo.service";
import { Todo } from "../todo.model";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
    todos: Todo[] = [];
    newTodoText: string = '';

    constructor(private todoService: TodoService) {}

    ngOnInit(): void{
        this.todos = this.todoService.getTodos();
    }

    addTodo(): void{
        if (this.newTodoText.trim()){
            this.todoService.addTodo(this.newTodoText.trim());
            this.newTodoText = ''; //Resets input field
            this.todos = this.todoService.getTodos(); //Updates the list
        }
    }

    toggleTodoCompletion(id: number): void{
        this.todoService.toggleTodoCompletion(id);
        this.todos = this.todoService.getTodos();
    }

    deleteTodo(id: number): void{
        this.todoService.deleteTodo(id);
        this.todoService.getTodos();
    }

    clearCompleted(): void{
        this.todoService.clearCompleted();
        this.todos = this.todoService.getTodos();
    }
}