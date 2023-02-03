import React from 'react';
import { IconButton } from '@mui/material';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { Text } from '../Text';
import { TextType } from '../../types';
import { Header as StyledHeader } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <Text content="To Do" type={TextType.PRIMARY_TEXT} />
      <IconButton aria-label="Settings">
        <SettingsIcon />
      </IconButton>
    </StyledHeader>
  );
};
