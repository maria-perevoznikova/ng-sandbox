import { Component, input, computed } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  allUsersTasks = DUMMY_TASKS;

  userId = input.required<string>();
  userName = input.required<string>();

  selectedUserTasks = computed(() => {
    return this.allUsersTasks.filter((task) => task.userId === this.userId());
  });

  add() {
    throw new Error('Method not implemented.');
  }

  onCompleteTask(id: string) {
    console.log('Task completed:', id);
  }
}
