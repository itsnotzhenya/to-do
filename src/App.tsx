import React from 'react';
import { Container } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { TasksContextProvider } from './components/TasksContextProvider';
import { NewsContextProvider } from './components/NewsContextProvider';
import { Ticker } from './components/Ticker/Ticker';
import { Wrapper } from './styles';

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
