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

export enum Priority {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
  Default = 'default',
}
