export type Task = {
  id: string;
  title: string;
  isDone: boolean;
  date: Date;
  priority?: Priority;
  description?: string;
};

export type TasksListProps = {
  tasks: Record<string, Task[]>;
};

export type TaskRecord = [key: string, data: Task[]];

export type Priority = 'high' | 'medium' | 'low';

export enum TextType {
  PRIMARY_TEXT = 'primary_text',
  SECONDARY_TEXT = 'secondary_text',
  DESCRIPTION = 'description',
}
