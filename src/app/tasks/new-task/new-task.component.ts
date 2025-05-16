import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  cancel = output<string>();
  create = output<NewTask>();

  title = signal('');
  summary = signal('');
  dueDate = signal('');

  onCancel() {
    this.cancel.emit(this.userId());
  }

  onCreate() {
    this.create.emit({
      userId: this.userId(),
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    });
  }
}
