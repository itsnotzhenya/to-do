import React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styled from '@mui/styled-engine';

const Outer = styled('div')(() => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  background: '#fff',
}));

export const ArrowUp = () => {
  return (
    <Outer>
      <ExpandLess />
    </Outer>
  );
};

export const ArrowDown = () => {
  return (
    <Outer>
      <ExpandMore />
    </Outer>
  );
};
