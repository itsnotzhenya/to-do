import React, { useContext } from 'react';
import { TasksContext } from '../TasksContextProvider';
import { TodayTasks } from '../TodayTasks';
import { FutureTasks } from '../FutureTasks';
import { TaskRecord } from '../../types';
import { groupBy, dateToEpoch } from '../../utils';
import { List } from './styles';

export const TasksList = () => {
  const { tasks, updateTaskStatus } = useContext(TasksContext);
  const groupedTasks = groupBy(tasks, (task) => task.date.toString());
  const tasksByDate = Object.entries(groupedTasks);

  const today = dateToEpoch(new Date());

  return (
    <List>
      {tasksByDate.map((record: TaskRecord) => {
        const [date, tasks] = record;
        const dateToDo = dateToEpoch(new Date(date));

        if (dateToDo === today)
          return (
            <TodayTasks
              key={date}
              tasks={tasks}
              updateTaskStatus={updateTaskStatus}
            />
          );

        return (
          <FutureTasks
            key={date}
            tasks={tasks}
            updateTaskStatus={updateTaskStatus}
          />
        );
      })}
    </List>
  );
};
