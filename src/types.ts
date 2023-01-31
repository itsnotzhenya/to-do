export type Task = {
  id: number;
  title: string;
  isDone: boolean;
  date: Date;
  description?: string;
};

export type TasksListProps = {
  tasks: Record<string, Task[]>;
};

export type TaskRecord = [key: string, data: Task[]];

export type TaskCardProps = {
  task: TaskRecord;
};
