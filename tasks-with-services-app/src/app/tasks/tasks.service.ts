import {Injectable, signal} from "@angular/core";
import {Task, TaskStatus} from "./task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
  private readonly tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  addTask(taskData: { title: string, description: string }) {
    const newTask = {
      ...taskData,
      id: this.generateId(),
      status: 'OPEN' as TaskStatus
    }
    this.tasks.set([...this.tasks(), newTask]);
    this.saveTasks();
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    this.tasks.set(this.tasks().map(task => task.id === id ? {...task, status} : task));
    this.saveTasks();
  }

  private generateId() {
    return new Date().getTime().toString();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

}
