import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);
  userId = input.required<string>();
  close = output<string>();
  title = signal('');
  summary = signal('');
  dueDate = signal('');

  onCancel() {
    this.close.emit(this.userId());
  }

  onCreate() {
    this.tasksService.addTask({
      userId: this.userId(),
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    });
    this.close.emit(this.userId());
  }
}
