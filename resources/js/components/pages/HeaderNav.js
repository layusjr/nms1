import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    variant: 'text' | 'contained' | 'fab',
    
  },
}));

const HeaderNav = () =>{

    
    
    const classes = useStyles();
    
    return (
        <div className={classes.header}>
      <AppBar position="sticky">
        <Toolbar>
          
          <Button className={classes.title}
          href="/home">
            Home
          </Button>
          <Button className={classes.title}
          href="/react/userpage">
            User List
          </Button>
          <Button  className={classes.title}
          color="inherit">
            Blog List
          </Button>
          <Button
           color="inherit"
          >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  HeaderNav;