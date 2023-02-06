import React, { useState } from 'react';
import { createContext } from 'react';
import { Priority, Task } from '../../types';

type Props = {
  children: JSX.Element;
};

type ContextType = {
  tasks: Array<Task>;
  setTasks: (tasks: Array<Task>) => void;
};

export const Context = createContext<ContextType>({
  tasks: [],
  setTasks: () => {},
});

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const initialValue: Array<Task> = [
  {
    id: 1,
    title: 'Clean the room',
    description: undefined,
    date: today,
    isDone: false,
    priority: Priority.Low,
  },
  {
    id: 2,
    title: 'Buy dog food',
    description: 'Treats & Dental Sticks',
    date: today,
    isDone: false,
    priority: Priority.Low,
  },
  {
    id: 3,
    title: 'Call Mom',
    description: 'After 6pm',
    date: today,
    isDone: false,
    priority: Priority.Low,
  },
  {
    id: 4,
    title: 'Call Dad',
    description: undefined,
    date: tomorrow,
    isDone: false,
    priority: Priority.Low,
  },
];

export const ContextProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState(initialValue);
  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
};
