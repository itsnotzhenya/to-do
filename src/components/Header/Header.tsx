import React from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { Text } from '../Text';
import { Switch } from '../Switch';
import { TextType } from '../../types';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} style={{ background: '#222222' }}>
      <Toolbar>
        <Text content="To Do" type={TextType.PRIMARY_TEXT} />

        <div>
          <IconButton
            size="large"
            aria-label="Settings"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <SettingsIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              '.MuiMenu-paper': {
                backgroundColor: '#282828',
              },
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem>
              <Text content="Show news" type={TextType.SECONDARY_TEXT} />
              <Switch
                sx={{ m: 1 }}
                checked={false}
                onChange={() => console.log('update')}
              />
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
