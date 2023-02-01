import React from 'react';
import { Checkbox, Collapse } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TasksListProps, TaskRecord } from '../../types';
import { TaskItem } from '../Task';
import { CardItem } from '../Task/CardItem';
import { TasksList as StyledTasksList, StyledCard } from './styles';
import { Row, Title } from '../Task/styles';

export const TasksList = ({ tasks }: TasksListProps) => {
  const dateToEpoch = (d: Date) => d.setHours(0, 0, 0, 0);

  const tasksByDate = Object.entries(tasks);
  const today = dateToEpoch(new Date());

  const [open, setOpen] = React.useState(false);

  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledTasksList>
      {tasksByDate.map((record: TaskRecord) => {
        const dateToDo = dateToEpoch(new Date(record[0]));
        const tasks = record[1];

        return dateToDo === today ? (
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
              <Title>Today Tasks:</Title>
            </Row>

            <StyledCard>
              {tasks.map((task) => (
                <TaskItem task={task} />
              ))}
            </StyledCard>
          </>
        ) : (
          <StyledCard onClick={handleClick}>
            <CardItem
              title={tomorrow ? 'Tomorrow Tasks' : `${dateToDo} Tasks`}
              isExpanded={open}
            />
            <Collapse in={open} timeout="auto" unmountOnExit>
              {tasks.map((task) => (
                <TaskItem task={task} />
              ))}
            </Collapse>
          </StyledCard>
        );
      })}
    </StyledTasksList>
  );
};
