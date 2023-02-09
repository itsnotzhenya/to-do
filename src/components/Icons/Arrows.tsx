import React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styled from '@mui/styled-engine';

const Outer = styled('div')(() => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  background: '#fff',
  color: '#282828',
  cursor: 'pointer',
}));

export const ArrowUp = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Outer onClick={handleClick}>
      <ExpandLess />
    </Outer>
  );
};

export const ArrowDown = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Outer onClick={handleClick}>
      <ExpandMore />
    </Outer>
  );
};
