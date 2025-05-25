import { Component, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private tasksService = inject(TasksService);
  task = input.required<Task>();

  onCompleteTask() {
    this.tasksService.deleteTask(this.task().id);
  }
}
