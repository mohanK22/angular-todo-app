import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  // Toggle
  onToggle(todo) {
    // console.log('toggle');
    // UI Update
    todo.completed = !todo.completed;

    // Server Update
    this.todoService.toggleCompleted(todo).subscribe(todo => 
    console.log(todo));
  }

  // Delete
  onDelete(todo) {
    //console.log('delete');
    this.deleteTodo.emit(todo);
  }

}
