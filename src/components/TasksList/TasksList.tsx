import React from 'react';
import { TasksList as StyledTasksList, TaskCard } from './styles';

export type Task = {
  id: number;
  title: string;
  isDone: boolean;
  date: Date;
  description?: string;
};

type TasksListProps = {
  tasks: Task[];
};

export const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <StyledTasksList>
      {tasks.map((task) => (
        <TaskCard key={task.id}>{task.title}</TaskCard>
      ))}
    </StyledTasksList>
  );
};
