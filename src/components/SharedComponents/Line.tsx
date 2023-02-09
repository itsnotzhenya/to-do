import React from 'react';
import styled from '@mui/styled-engine';
import { Priority } from '../../types';

type LineProps = {
  priority?: Priority;
};

const BaseLine = styled('div')(() => ({
  height: '40px',
  width: '5px',
  marginRight: '14px',
  borderRadius: '3px',
  background: '#A9A9A9',
}));

const High = styled(BaseLine)(() => ({
  background: '#FF0000',
}));

const Medium = styled(BaseLine)(() => ({
  background: '#FFEB33',
}));

const Low = styled(BaseLine)(() => ({
  background: '#366EFF',
}));

export const Line = ({ priority }: LineProps) => {
  switch (priority) {
    case 'high':
      return <High />;
    case 'medium':
      return <Medium />;
    case 'low':
      return <Low />;
    default:
      return <BaseLine />;
  }
};
