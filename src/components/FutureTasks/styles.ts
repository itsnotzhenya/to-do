import styled from '@mui/styled-engine';
import Card from '@mui/material/Card';

export const StyledCard = styled(Card)(() => ({
  color: '#fff',
  marginBottom: '32px',
  background: '#282828',
  boxShadow:
    '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
  borderRadius: '40px',
  padding: '0 35px',
}));
