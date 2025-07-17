import { Component, input, computed, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  userName = input.required<string>();
  isAddingTask = signal(false);

  // tasksService is initialized via dependency injection
  constructor(private tasksService: TasksService) {}

  get userTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddingTask() {
    this.isAddingTask.set(true);
    console.log('Adding a new task for user:', this.userId());
  }

  onCloseNewTask() {
    this.isAddingTask.set(false);
    console.log('Finish adding a task for user:', this.userId());
  }
}
