import styled from '@mui/styled-engine';
import { Typography } from '@mui/material';

export const PrimaryText = styled(Typography)(() => ({
  fontFamily: "'Actor', sans-serif",
  fontStyle: 'normal',
  fontWeight: 'bolder',
  color: '#f4f4f4',
}));

export const SecondaryText = styled(Typography)(() => ({
  fontFamily: "'Actor', sans-serif",
  fontStyle: 'normal',
  fontWeight: '400',
  color: '#f4f4f4',
}));

export const Description = styled(Typography)(() => ({
  fontFamily: "'Actor', sans-serif",
  fontStyle: 'normal',
  fontWeight: '400',
  color: 'rgba(255, 255, 255, 0.6)',
  margin: '0',
}));
