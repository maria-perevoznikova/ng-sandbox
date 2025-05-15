import { Component, input } from '@angular/core';

export type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();

  complete() {
    throw new Error('Method not implemented.');
  }
}
