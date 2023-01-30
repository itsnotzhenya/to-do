import React from 'react';
import { IconButton } from '@mui/material';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { Header as StyledHeader, Title } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <Title>To Do</Title>
      <IconButton aria-label="Settings">
        <SettingsIcon />
      </IconButton>
    </StyledHeader>
  );
};
