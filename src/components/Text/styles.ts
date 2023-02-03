import styled from '@mui/styled-engine';

export const PrimaryText = styled('h1')(() => ({
  fontStyle: 'normal',
  fontWeight: '400',
  color: '#f4f4f4',
  fontSize: '36px',
  lineHeight: '43px',
}));

export const SecondaryText = styled('h2')(() => ({
  fontStyle: 'normal',
  fontWeight: '400',
  color: '#f4f4f4',
  fontSize: '24px',
  lineHeight: '28px',
}));

export const Description = styled('h3')(() => ({
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '17px',
  color: 'rgba(255, 255, 255, 0.6)',
  margin: '0',
}));
