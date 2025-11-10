import {InjectionToken, Provider} from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export type TaskStatusDisplayOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  displayText: string;
}[];

export const TASK_STATUS_DISPLAY_OPTIONS = new InjectionToken<TaskStatusDisplayOptions>('task-status-display-options');

export const taskStatusDisplayOptions: TaskStatusDisplayOptions = [
  { value: 'open', taskStatus: 'OPEN', displayText: 'Open' },
  { value: 'in-progress', taskStatus: 'IN_PROGRESS', displayText: 'In Progress' },
  { value: 'done', taskStatus: 'DONE', displayText: 'Completed' },
];

export const taskStatusDisplayOptionsProvider: Provider =
  { provide: TASK_STATUS_DISPLAY_OPTIONS, useValue: taskStatusDisplayOptions }
