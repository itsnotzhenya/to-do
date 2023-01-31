import { Card } from '@mui/material';
import styled from '@mui/styled-engine';

export const TasksList = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column' as 'column',
}));

export const TaskCard = styled(Card)(() => ({
  fontColor: '#fff',
  marginBottom: '32px',
}));
