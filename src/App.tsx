import React from 'react';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { Wrapper } from './styles';

export const App = () => {
  const tasks = [
    {
      id: 1,
      title: 'Clean the room',
      description: undefined,
      date: new Date(),
      isDone: false,
    },
    {
      id: 2,
      title: 'Buy dog food',
      description: 'Treats & Dental Sticks',
      date: new Date(),
      isDone: false,
    },
    {
      id: 3,
      title: 'Call Mom',
      description: 'After 6pm',
      date: new Date(),
      isDone: false,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Header />
        <TasksList tasks={tasks} />
      </Container>
    </Wrapper>
  );
};
