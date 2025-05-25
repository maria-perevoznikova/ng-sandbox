import { DUMMY_TASKS } from './dummy-tasks';
import { NewTask } from './new-task/new-task.model';

class TasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTask) {
    this.tasks = [...this.tasks, { ...task, id: this.generateNewId() }];
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  private generateNewId(): string {
    // todo improve
    return new Date().getTime().toString();
  }
}

export default TasksService;
