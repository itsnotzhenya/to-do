export type Task = {
  id: number;
  title: string;
  isDone: boolean;
  date: Date;
  priority: Priority;
  description?: string;
};

export type TasksListProps = {
  tasks: Record<string, Task[]>;
};

export type TaskRecord = [key: string, data: Task[]];

export type TaskCardProps = {
  task: TaskRecord;
};

export enum Priority {
  High = 'high',
  Medium = 'medium',
  Default = 'default',
}
