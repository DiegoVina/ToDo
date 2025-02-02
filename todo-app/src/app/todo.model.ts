export class Todo{
    id: number;

    text: string;
    
    isCompleted: boolean;

    constructor(id: number, text: string, isCompleted: boolean = false){
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
    }
}