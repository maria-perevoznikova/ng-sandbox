import { Component, input, computed, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  allUsersTasks = signal(DUMMY_TASKS);

  userId = input.required<string>();
  userName = input.required<string>();
  isAddingTask = signal(false);

  selectedUserTasks = computed(() => {
    return this.allUsersTasks().filter((task) => task.userId === this.userId());
  });

  onCompleteTask(id: string) {
    // this.allUsersTasks.set(this.allUsersTasks().filter((task) => task.id !== id));
    this.allUsersTasks.update((v) => v.filter((task) => task.id !== id));
    console.log('Task completed:', id);
  }

  onStartAddingTask() {
    this.isAddingTask.set(true);
    console.log('Adding a new task for user:', this.userId());
  }

  onCancelAddingTask() {
    this.isAddingTask.set(false);
    console.log('Cancel adding task for user:', this.userId());
  }
}
