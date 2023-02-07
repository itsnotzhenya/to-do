import React from 'react';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { TasksContextProvider } from './components/TasksContextProvider';
import { NewsContextProvider } from './components/NewsContextProvider';
import { Ticker } from './components/Ticker/Ticker';
import { Wrapper } from './styles';

export const App = () => {
  return (
    <NewsContextProvider>
      <TasksContextProvider>
        <Wrapper>
          <Container>
            <Header />
            <TasksList />
          </Container>
          <Ticker />
        </Wrapper>
      </TasksContextProvider>
    </NewsContextProvider>
  );
};
