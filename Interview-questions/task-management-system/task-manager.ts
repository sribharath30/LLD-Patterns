import { Task, TaskStatus } from "./task";

export class TaskManager{
    private TaskManager: this
    private tasks: Task[];
    private userTaskMap: Record<string,Task[]>;

    private static instance: TaskManager;

    private constructor() {
        this.tasks = [];
        this.userTaskMap = {};
    }

    public static getInstance(): TaskManager {
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }

    public createTask(task: Task, userId: string): void {
        this.tasks.push(task);
        if (!this.userTaskMap[userId]) {
            this.userTaskMap[userId] = [];
        }
        this.userTaskMap[userId].push(task);
    }

    public readTask(taskId: string): Task | undefined {
        return this.tasks.find(task => task.getId() === taskId);
    }

    public updateTask(taskId: string, updatedTask: Partial<Task>): void {
        const task = this.readTask(taskId);
        if (task) {
            Object.assign(task, updatedTask);
        }
    }

    public deleteTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task.getId() !== taskId);
        for (const userId in this.userTaskMap) {
            this.userTaskMap[userId] = this.userTaskMap[userId].filter(task => task.getId() !== taskId);
        }
    }

    public searchTask(query: string): Task[] {
        return this.tasks.filter(task => task.getName().includes(query) || task.getDescription().includes(query));
    }

    public markTaskAsCompleted(taskId: string): void {
        const task = this.readTask(taskId);
        if (task) {
            task.setStatus(TaskStatus.Completed);
        }
    }
}