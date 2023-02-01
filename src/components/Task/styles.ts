import styled from '@mui/styled-engine';

export const Record = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row' as 'row',
  margin: '20px 0',
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
