import { Card } from '@mui/material';
import styled from '@mui/styled-engine';

export const TaskCard = styled(Card)(() => ({
  fontColor: '#fff',
  marginBottom: '32px',
  background: '#282828',
  boxShadow:
    '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
  borderRadius: '40px',
  padding: '14px 35px',
}));

export const Record = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row' as 'row',
  marginBottom: '16px',
}));

export const Title = styled('h2')(() => ({
  fontFamily: '"Actor", sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '28px',

  color: '#F4F4F4',
}));

export const Description = styled('p')(() => ({
  fontFamily: '"Actor", sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '17px',

  color: 'rgba(255, 255, 255, 0.6)',
}));

export const TaskRow = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column' as 'column',
}));

export const Row = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row' as 'row',
  alignItems: 'center',
  marginLeft: '20px',
}));

export const Block = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));
