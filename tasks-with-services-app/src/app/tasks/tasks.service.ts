import {Injectable} from "@angular/core";
import {Task, TaskStatus} from "./task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {

  private tasks: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getTasks() {
    return this.tasks;
  }

  addTask(title: string, description: string) {
    const newTask = {
      id: this.generateId(),
      title,
      description,
      status: 'OPEN' as const
    }
    this.tasks = [...this.tasks, newTask];
    this.saveTasks();
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, status } : task
    );
    this.saveTasks();
  }

  private generateId() {
    return new Date().getTime().toString();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
