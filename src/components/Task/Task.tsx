import React from 'react';
import { Switch } from '@mui/material';
import { Task as TaskType } from '../../types';
import { Line } from '../Line';
import { Record, TaskRow, Title, Description, Block } from './styles';

type TaskProps = {
  task: TaskType;
};

export const TaskItem = ({ task }: TaskProps) => {
  const handleChange = () => {
    console.log('changed');
  };

  return (
    <Record>
      <Block>
        <Line priority={task.priority} />
        <TaskRow>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
        </TaskRow>
      </Block>
      <Switch
        checked={task.isDone}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Record>
  );
};
