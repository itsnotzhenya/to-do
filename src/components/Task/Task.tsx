import React from 'react';
import { Switch } from '@mui/material';
import { Task as TaskType } from '../../types';
import { Line } from '../Line';
import { Text } from '../Text';
import { TextType } from '../../types';
import { Record, TaskRow, Block } from './styles';

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
          <Text content={task.title} type={TextType.SECONDARY_TEXT} />
          <Text content={task.description} type={TextType.DESCRIPTION} />
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
