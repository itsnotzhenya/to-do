import React from 'react';
import styled from '@mui/styled-engine';
import Checkbox from '@mui/material/Checkbox';
import grey from '@mui/material/colors/grey';
import { TaskItem } from '../TaskItem';
import { Card, Text } from '../SharedComponents';
import { Task, TextType } from '../../types';

type TodayTasksProps = {
  tasks: Task[];
  updateTaskStatus: (id: string, isDone: boolean) => void;
};

const Row = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row' as 'row',
  alignItems: 'center',
  marginLeft: '20px',
  marginBottom: '15px',
}));

export const TodayTasks = ({ tasks, updateTaskStatus }: TodayTasksProps) => {
  const allDone = tasks.every((task) => task.isDone);

  return (
    <>
      <Row>
        <Checkbox
          checked={allDone}
          sx={{
            color: grey[100],
            '&.Mui-checked': {
              color: grey[100],
            },
          }}
        />
        <Text content="Today Tasks:" type={TextType.SECONDARY_TEXT} />
      </Row>
      <Card>
        {tasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </Card>
    </>
  );
};
