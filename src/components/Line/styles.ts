import styled from '@mui/styled-engine';

export const Line = styled('div')(() => ({
  height: '40px',
  width: '5px',
  marginRight: '14px',
  borderRadius: '3px',
  background: '#366EFF',
}));

export const High = styled(Line)(() => ({
  background: '#FF0000',
}));

export const Medium = styled(Line)(() => ({
  background: '#FFEB33',
}));
