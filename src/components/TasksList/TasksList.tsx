import React from 'react';
import { TasksListProps } from '../../types';
import { TaskCard } from '../TaskCard';
import { TaskRecord } from '../../types';
import { TasksList as StyledTasksList } from './styles';

export const TasksList = ({ tasks }: TasksListProps) => {
  const taskArray: Array<TaskRecord> = [];

  for (let [key, value] of Object.entries(tasks)) {
    console.log(key, value);
    taskArray.push([`${key}`, value]);
  }

  return (
    <StyledTasksList>
      {taskArray.map((task: TaskRecord) => (
        <TaskCard task={task} />
      ))}
    </StyledTasksList>
  );
};
