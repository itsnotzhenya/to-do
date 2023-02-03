import styled from '@mui/styled-engine';

export const Record = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row' as 'row',
  margin: '20px 0',
}));

export const TaskRow = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column' as 'column',
}));

export const Block = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));
