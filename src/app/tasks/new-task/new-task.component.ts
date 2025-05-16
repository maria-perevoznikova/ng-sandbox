import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  cancel = output<string>();

  onCancel() {
    this.cancel.emit(this.userId());
  }
}
