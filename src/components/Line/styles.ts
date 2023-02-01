import styled from '@mui/styled-engine';

export const Line = styled('div')(() => ({
  height: '40px',
  width: '5px',
  marginRight: '14px',
  borderRadius: '3px',
  background: '#A9A9A9',
}));

export const High = styled(Line)(() => ({
  background: '#FF0000',
}));

export const Medium = styled(Line)(() => ({
  background: '#FFEB33',
}));

export const Low = styled(Line)(() => ({
  background: '#366EFF',
}));
