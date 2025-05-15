import { Component, input, computed, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  allUsersTasks = signal(DUMMY_TASKS);

  userId = input.required<string>();
  userName = input.required<string>();

  selectedUserTasks = computed(() => {
    return this.allUsersTasks().filter((task) => task.userId === this.userId());
  });

  add() {
    throw new Error('Method not implemented.');
  }

  onCompleteTask(id: string) {
    // this.allUsersTasks.set(this.allUsersTasks().filter((task) => task.id !== id));
    this.allUsersTasks.update(v => v.filter((task) => task.id !== id));

    console.log('Task completed:', id);
    console.log('Remaining tasks:', this.allUsersTasks);
  }
}
