import React from 'react';
import { Switch } from '../Switch';
import { Task as TaskType } from '../../types';
import { Line } from '../Line';
import { Text } from '../Text';
import { TextType } from '../../types';
import { Record, TaskRow, Block } from './styles';

type TaskProps = {
  task: TaskType;
  updateTaskStatus: (id: string, isDone: boolean) => void;
};

export const TaskItem = ({ task, updateTaskStatus }: TaskProps) => (
  <Record>
    <Block>
      <Line priority={task.priority} />
      <TaskRow>
        <Text
          content={task.title}
          type={TextType.SECONDARY_TEXT}
          stroked={task.isDone}
        />
        <Text content={task.description} type={TextType.DESCRIPTION} />
      </TaskRow>
    </Block>
    <Switch
      sx={{ m: 1 }}
      checked={task.isDone}
      onChange={() => updateTaskStatus(task.id, !task.isDone)}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  </Record>
);
