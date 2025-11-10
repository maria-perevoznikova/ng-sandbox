import {Component, computed, inject, input} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Task, TASK_STATUS_DISPLAY_OPTIONS, TaskStatus, taskStatusDisplayOptionsProvider} from '../../task.model';
import {TasksService} from "../../tasks.service";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  providers: [taskStatusDisplayOptionsProvider],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {

  private readonly statusDisplayMapping: Record<TaskStatus, string> = {
    'OPEN': 'Open',
    'IN_PROGRESS': 'Working on it',
    'DONE': 'Completed'
  };

  private tasksService = inject(TasksService);
  private taskStatusDisplayOptions = inject(TASK_STATUS_DISPLAY_OPTIONS);
  task = input.required<Task>();
  taskStatus = computed(() => {
    return this.statusDisplayMapping[this.task().status];
  });

  onChangeTaskStatus(taskId: string, status: string) {
    const newStatus = this.taskStatusDisplayOptions.find(option => option.value === status)?.taskStatus;
    this.tasksService.updateTaskStatus(taskId, newStatus || 'OPEN');
  }
}
