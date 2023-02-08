import styled from '@mui/styled-engine';
import { Typography } from '@mui/material';

export const PrimaryText = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: 'bolder',
  color: '#f4f4f4',
}));

export const SecondaryText = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: '400',
  color: '#f4f4f4',
}));

export const Description = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: '400',
  color: 'rgba(255, 255, 255, 0.6)',
  margin: '0',
}));
