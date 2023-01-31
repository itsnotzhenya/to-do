import React from 'react';
import { Priority } from '../../types';
import { High, Medium, Line as DefaultLine } from './styles';

type LineProps = {
  priority: Priority;
};

export const Line = ({ priority }: LineProps) => {
  return priority === Priority.High ? (
    <High />
  ) : priority === Priority.Medium ? (
    <Medium />
  ) : (
    <DefaultLine />
  );
};
