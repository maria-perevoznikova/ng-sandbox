import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  add() {
    throw new Error('Method not implemented.');
  }
  userId = input.required<string>();
  userName = input.required<string>();
}
