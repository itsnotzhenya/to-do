import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import grey from '@mui/material/colors/grey';
import { Text } from '../Text';
import { TaskItem } from '../Task';
import { Task, TextType } from '../../types';
import { Row, StyledCard } from './styles';

type TodayTasksProps = {
  tasks: Task[];
  updateTaskStatus: (id: string, isDone: boolean) => void;
};

export const TodayTasks = ({ tasks, updateTaskStatus }: TodayTasksProps) => {
  return (
    <>
      <Row>
        <Checkbox
          defaultChecked
          sx={{
            color: grey[100],
            '&.Mui-checked': {
              color: grey[100],
            },
          }}
        />
        <Text content="Today Tasks:" type={TextType.SECONDARY_TEXT} />
      </Row>
      <StyledCard>
        {tasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </StyledCard>
    </>
  );
};
