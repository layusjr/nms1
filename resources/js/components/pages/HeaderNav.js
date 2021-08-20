import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "inherit",
    // variant: 'text' | 'contained' | 'fab',
    
  },
}));

const HeaderNav = () =>{
    // const logout = () => {
    //   window.localStorage.clear();
    //   window.location.replace('login')
    // }

    const logout = () => (
      fetch('http://127.0.0.1:8000/api/logout') 
        .then((data) => data.json())
    );
    
    const getBlogs = async () => {
      const blogs = await logout();
      setBlogs(blogs.data)
    }
    
    const classes = useStyles();
    
    return (
        <div className={classes.header}>
      <AppBar position="sticky">
        <Toolbar>
          
          <Button className={classes.title}
          startIcon={<HomeIcon/>}
          href="/home">
            Home
          </Button>
          <Button className={classes.title}
          startIcon={<PeopleIcon/>}
          href="/react/userpage">
            User List
          </Button>
          <Button  className={classes.title}
          startIcon={<ListAltOutlinedIcon/>}
          href="/react/indexblog"
         >
            Blog List
          </Button>
          <Button
         
          href='/logout'
           color="inherit"
          >Logout</Button>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  HeaderNav;