/* eslint-disable react/prefer-stateless-function */
import { AppBar as AppBarBase, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

class TopNav extends React.Component {
  render = (): React.ReactNode => {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">AWS Amplify</Typography>
        </Toolbar>
      </AppBar>
    );
  };
}

const AppBar = styled(AppBarBase).attrs({
  position: 'static',
})`
  margin-bottom: 20px;
`;

export default TopNav;
