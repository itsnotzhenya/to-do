import React from 'react';
import { Switch, Checkbox } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TaskCardProps, Task } from '../../types';
import { Line } from '../Line';
import {
  TaskCard as StyledCard,
  Record,
  TaskRow,
  Row,
  Title,
  Description,
  Block,
} from './styles';

export const TaskCard = ({ task }: TaskCardProps) => {
  const dateToday = new Date();
  const today = `${dateToday.getDate()} ${dateToday.getMonth()}`;

  const dateToDo = task[0];
  const toDo = task[1];

  const handleChange = () => {
    console.log('changed');
  };

  return (
    <>
      {dateToDo === today && (
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
          <Title>Today Tasks:</Title>
        </Row>
      )}
      <StyledCard>
        {toDo.map((task: Task) => (
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
        ))}
      </StyledCard>
    </>
  );
};
