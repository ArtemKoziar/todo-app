export interface Task {
  taskName: string;
  expiration?: number;
  estimate?: string;
  done: boolean;
  id: string;
  list: string;
}

export interface TasksArray {
  today: Task[];
  tomorrow: Task[];
  upcoming: Task[];
  someday: Task[];
}
