import {Component, computed, inject, signal} from '@angular/core';

import {TaskItemComponent} from './task-item/task-item.component';
import {TasksService} from "../tasks.service";
import {
  TASK_STATUS_DISPLAY_OPTIONS,
  taskStatusDisplayOptionsProvider
} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [taskStatusDisplayOptionsProvider]
})
export class TasksListComponent {
  private tasksService = inject(TasksService);
  taskStatusDisplayOptions = inject(TASK_STATUS_DISPLAY_OPTIONS);
  private selectedFilter = signal<string>('all');

  tasks = computed(() => {
    const filter = this.selectedFilter();
    const taskStatus = this.taskStatusDisplayOptions.find(option => option.value === filter)?.taskStatus;

    if (taskStatus) {
      return this.tasksService.allTasks().filter(task => task.status === taskStatus);
    }
    return this.tasksService.allTasks();
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
