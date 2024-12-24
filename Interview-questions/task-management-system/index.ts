// Task Management System LLD in TypeScript

// Enums for Priority and Status
enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

enum Status {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

// User Entity
class User {
  id: string;
  name: string;
  email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Task Entity
class Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  status: Status;
  assignedUser?: User;
  reminder?: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority,
    status: Status,
    assignedUser?: User,
    reminder?: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.assignedUser = assignedUser;
    this.reminder = reminder;
  }
}

// Task Management System
class TaskManagementSystem {
  private tasks: Map<string, Task> = new Map();
  private users: Map<string, User> = new Map();

  // Create a new user
  createUser(id: string, name: string, email: string): User {
    const user = new User(id, name, email);
    this.users.set(id, user);
    return user;
  }

  // Create a new task
  createTask(
    id: string,
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority,
    status: Status,
    assignedUserId?: string,
    reminder?: Date,
  ): Task {
    const assignedUser = assignedUserId
      ? this.users.get(assignedUserId)
      : undefined;
    const task = new Task(
      id,
      title,
      description,
      dueDate,
      priority,
      status,
      assignedUser,
      reminder,
    );
    this.tasks.set(id, task);
    return task;
  }

  // Update a task
  updateTask(id: string, updates: Partial<Task>): Task | undefined {
    const task = this.tasks.get(id);
    if (!task) {
      throw new Error('Task not found');
    }

    Object.assign(task, updates);
    return task;
  }

  // Delete a task
  deleteTask(id: string): boolean {
    return this.tasks.delete(id);
  }

  // Search and filter tasks
  searchTasks(filter: Partial<Omit<Task, 'id'>>): Task[] {
    const filterKeys = Object.keys(filter) as (keyof Task)[];

    return Array.from(this.tasks.values()).filter((task) =>
      filterKeys.every(
        (key) => filter[key] === undefined || task[key] === filter[key],
      ),
    );
  }

  // Mark a task as completed
  markTaskAsCompleted(id: string): Task | undefined {
    const task = this.tasks.get(id);
    if (!task) {
      throw new Error('Task not found');
    }

    task.status = Status.COMPLETED;
    return task;
  }

  // View task history
  viewTaskHistory(userId: string): Task[] {
    return Array.from(this.tasks.values()).filter(
      (task) =>
        task.assignedUser?.id === userId && task.status === Status.COMPLETED,
    );
  }
}

// Example Usage
const system = new TaskManagementSystem();
const user1 = system.createUser('1', 'John Doe', 'john@example.com');
const user2 = system.createUser('2', 'Jane Smith', 'jane@example.com');

const task1 = system.createTask(
  '1',
  'Finish report',
  'Complete the annual report',
  new Date('2024-12-31'),
  Priority.HIGH,
  Status.PENDING,
  user1.id,
);

const task2 = system.createTask(
  '2',
  'Team meeting',
  'Attend the project kickoff meeting',
  new Date('2024-12-25'),
  Priority.MEDIUM,
  Status.IN_PROGRESS,
  user2.id,
);

console.log('All Tasks:', system.searchTasks({}));
console.log(
  'High Priority Tasks:',
  system.searchTasks({ priority: Priority.HIGH }),
);
system.updateTask('1', { description: 'hweyey' });
system.markTaskAsCompleted('1');
console.log('Task History for User1:', system.viewTaskHistory(user1.id));
