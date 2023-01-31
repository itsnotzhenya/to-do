import React from 'react';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { groupBy } from './utils';
import { Task } from './types';
import { Wrapper } from './styles';

export const App = () => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const tasks: Array<Task> = [
    {
      id: 1,
      title: 'Clean the room',
      description: undefined,
      date: today,
      isDone: false,
    },
    {
      id: 2,
      title: 'Buy dog food',
      description: 'Treats & Dental Sticks',
      date: today,
      isDone: false,
    },
    {
      id: 3,
      title: 'Call Mom',
      description: 'After 6pm',
      date: today,
      isDone: false,
    },
    {
      id: 4,
      title: 'Call Dad',
      description: undefined,
      date: tomorrow,
      isDone: false,
    },
  ];

  const groupedTasks = groupBy(
    tasks,
    (task) => `${task.date.getDate()} ${task.date.getMonth()}` as string
  );

  return (
    <Wrapper>
      <Container>
        <Header />
        <TasksList tasks={groupedTasks} />
      </Container>
    </Wrapper>
  );
};
