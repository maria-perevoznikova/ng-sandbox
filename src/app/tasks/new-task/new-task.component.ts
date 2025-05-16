import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  cancel = output<string>();

  title = '';
  summary = '';
  dueDate = '';
  
  onCancel() {
    this.cancel.emit(this.userId());
  }
}
