import { Todo } from './../interfaces/todo';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { task: 'eat dinner', completed: false },
    { task: 'workout', completed: false },
    { task: 'wake up', completed: true },
  ];

  searchTerm: string = '';
  constructor() {}
  ngOnInit(): void {}

  addTask = (form: NgForm): void => {
    const newTodo: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(newTodo);
    form.reset();
  };

  removeTask = (index: number): void => {
    this.todos.splice(index, 1);
  };

  completeTask = (index: number): void => {
    this.todos[index].completed = true;
  };

  filterTasks = (): Todo[] => {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        const currentTerm = todo.task.toLowerCase().trim();
        return currentTerm.includes(this.searchTerm.toLowerCase().trim());
      });
    }
  };

  setSearchTerm = (form: NgForm): void => {
    this.searchTerm = form.value.search;
  };
}
