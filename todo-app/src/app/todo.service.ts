import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    private todos: Todo[] = [];
    private nextId = 1;

    constructor(){}

    //Get all to-dos
    getTodos(): Todo[] {
        return this.todos;
    }

    //Add a new to-do
    addTodo(text: string): Todo {
        const newTodo = new Todo(this.nextId++, text);
        this.todos.push(newTodo);
        return newTodo;
    }

    //Toggle completion status of a to-do

    toggleTodoCompletion(id: number): void {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.isCompleted = !todo.isCompleted
        }
    }

    //Delete to-do
    deleteTodo(id:number): void {
        this.todos = this.todos.filter(todo => todo.id !==id);
    }

    //Clear all completed to-dos
    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.isCompleted)
    }
}