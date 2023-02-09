import React from 'react';
import { styled } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { TasksContextProvider } from './components/TasksContextProvider';
import { NewsContextProvider } from './components/NewsContextProvider';
import { Ticker } from './components/Ticker/Ticker';

const Wrapper = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  background: '#222222',
}));

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
