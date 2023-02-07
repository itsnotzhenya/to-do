import React from 'react';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { ContextProvider } from './components/ContextProvider';
import { Ticker } from './components/Ticker/Ticker';
import { Wrapper } from './styles';

export const App = () => {
  return (
    <ContextProvider>
      <Wrapper>
        <Container>
          <Header />
          <TasksList />
        </Container>
        <Ticker />
      </Wrapper>
    </ContextProvider>
  );
};
