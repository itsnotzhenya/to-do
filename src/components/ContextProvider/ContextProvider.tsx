import React, { useState, useCallback, createContext } from 'react';
import { nanoid } from 'nanoid';
import { Priority, Task } from '../../types';

type Props = {
  children: JSX.Element;
};

type ContextType = {
  tasks: Array<Task>;
  updateTaskStatus: (id: string, isDone: boolean) => void;
};

export const Context = createContext<ContextType>({
  tasks: [],
  updateTaskStatus: () => {},
});

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const initialValue: Array<Task> = [
  {
    id: nanoid(),
    title: 'Clean the room',
    description: undefined,
    date: today,
    isDone: false,
    priority: 'low',
  },
  {
    id: nanoid(),
    title: 'Buy dog food',
    description: 'Treats & Dental Sticks',
    date: today,
    isDone: false,
    priority: 'high',
  },
  {
    id: nanoid(),
    title: 'Call Mom',
    description: 'After 6pm',
    date: today,
    isDone: false,
    priority: 'medium',
  },
  {
    id: nanoid(),
    title: 'Call Dad',
    description: undefined,
    date: tomorrow,
    isDone: false,
    priority: 'medium',
  },
  {
    id: nanoid(),
    title: 'Cook the dinner',
    description: undefined,
    date: tomorrow,
    isDone: false,
  },
];

export const ContextProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState(initialValue);

  const updateTaskStatus = useCallback(
    (id: string, isDone: boolean) => {
      const newTasks = tasks.map((task) => {
        if (id === task.id) {
          return { ...task, isDone };
        }
        return task;
      });
      setTasks(newTasks);
    },
    [tasks, setTasks]
  );

  return (
    <Context.Provider value={{ tasks, updateTaskStatus }}>
      {children}
    </Context.Provider>
  );
};
