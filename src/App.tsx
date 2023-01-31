import React from 'react';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { groupBy } from './utils';
import { Task, Priority } from './types';
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
      priority: Priority.Default,
    },
    {
      id: 2,
      title: 'Buy dog food',
      description: 'Treats & Dental Sticks',
      date: today,
      isDone: false,
      priority: Priority.Medium,
    },
    {
      id: 3,
      title: 'Call Mom',
      description: 'After 6pm',
      date: today,
      isDone: false,
      priority: Priority.High,
    },
    {
      id: 4,
      title: 'Call Dad',
      description: undefined,
      date: tomorrow,
      isDone: false,
      priority: Priority.High,
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
