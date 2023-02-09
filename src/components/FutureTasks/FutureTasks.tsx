import React from 'react';
import styled from '@mui/styled-engine';
import { Collapse } from '@mui/material';
import { TaskItem } from '../TaskItem';
import { ArrowDown, ArrowUp } from '../Icons/Arrows';
import { Card, CardRow, TaskRow, Text, Line } from '../SharedComponents';
import { Task, TextType } from '../../types';
import { dateToEpoch, getFormattedDate } from '../../utils';

type FutureTasksProps = {
  tasks: Task[];
  updateTaskStatus: (id: string, isDone: boolean) => void;
};

const Block = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const FutureTasks = ({ tasks, updateTaskStatus }: FutureTasksProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const dateToDo = dateToEpoch(tasks[0].date);
  let tomorrow = dateToEpoch(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  return (
    <Card>
      <CardRow>
        <Block>
          <Line />
          <TaskRow>
            <Text
              content={
                dateToDo === tomorrow
                  ? 'Tomorrow Tasks'
                  : `${getFormattedDate(dateToDo)} Tasks`
              }
              type={TextType.SECONDARY_TEXT}
            />
          </TaskRow>
        </Block>
        {isOpen ? (
          <ArrowUp handleClick={handleClick} />
        ) : (
          <ArrowDown handleClick={handleClick} />
        )}
      </CardRow>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </Collapse>
    </Card>
  );
};
