import React from 'react';
import styled from '@mui/styled-engine';
import { CardRow, Switch, TaskRow, Text, Line } from '../SharedComponents';
import { Task, TextType } from '../../types';

type TaskProps = {
  task: Task;
  updateTaskStatus: (id: string, isDone: boolean) => void;
};

const Block = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const TaskItem = ({ task, updateTaskStatus }: TaskProps) => (
  <CardRow>
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
  </CardRow>
);
