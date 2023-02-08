import React from 'react';
import { Collapse } from '@mui/material';
import { TaskItem } from '../Task';
import { CardItem } from '../Task/CardItem';
import { dateToEpoch, getFormattedDate } from '../../utils';
import { Task } from '../../types';
import { StyledCard } from './styles';

type FutureTasksProps = {
  tasks: Task[];
  updateTaskStatus: (id: string, isDone: boolean) => void;
};

export const FutureTasks = ({ tasks, updateTaskStatus }: FutureTasksProps) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const dateToDo = dateToEpoch(tasks[0].date);
  let tomorrow = dateToEpoch(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  return (
    <StyledCard>
      <CardItem
        title={
          dateToDo === tomorrow
            ? 'Tomorrow Tasks'
            : `${getFormattedDate(dateToDo)} Tasks`
        }
        isExpanded={open}
        onClick={handleClick}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </Collapse>
    </StyledCard>
  );
};
