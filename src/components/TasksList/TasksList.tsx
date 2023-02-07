import React, { useContext } from 'react';
import { Checkbox, Collapse } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TaskRecord, TextType } from '../../types';
import { TaskItem } from '../Task';
import { CardItem } from '../Task/CardItem';
import { Text } from '../Text';
import { groupBy } from '../../utils';
import { TasksContext } from '../TasksContextProvider';
import { TasksList as StyledTasksList, StyledCard, Row } from './styles';

export const TasksList = () => {
  const { tasks, updateTaskStatus } = useContext(TasksContext);
  const groupedTasks = groupBy(tasks, (task) => task.date.toString());

  const dateToEpoch = (d: Date) => d.setHours(0, 0, 0, 0);

  const tasksByDate = Object.entries(groupedTasks);
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
              <Text content="Today Tasks:" type={TextType.SECONDARY_TEXT} />
            </Row>
            <StyledCard>
              {tasks.map((task) => (
                <TaskItem task={task} updateTaskStatus={updateTaskStatus} />
              ))}
            </StyledCard>
          </>
        ) : (
          <StyledCard>
            <CardItem
              title={tomorrow ? 'Tomorrow Tasks' : `${dateToDo} Tasks`}
              isExpanded={open}
              onClick={handleClick}
            />
            <Collapse in={open} timeout="auto" unmountOnExit>
              {tasks.map((task) => (
                <TaskItem task={task} updateTaskStatus={updateTaskStatus} />
              ))}
            </Collapse>
          </StyledCard>
        );
      })}
    </StyledTasksList>
  );
};
