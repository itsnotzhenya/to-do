import React from 'react';
import { Priority } from '../../types';
import { High, Medium, Low, Line as DefaultLine } from './styles';

type LineProps = {
  priority?: Priority;
};

export const Line = ({ priority }: LineProps) => {
  switch (priority) {
    case 'high':
      return <High />;
    case 'medium':
      return <Medium />;
    case 'low':
      return <Low />;
    default:
      return <DefaultLine />;
  }
};
