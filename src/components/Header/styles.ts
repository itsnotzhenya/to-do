import { styled } from '@mui/material/styles';

export const Title = styled('h1')(() => ({
  fontFamily: `'Actor', sans-serif`,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: '43px',
  color: '#f4f4f4',
  margin: '0',
}));

export const Header = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '20px',
}));
