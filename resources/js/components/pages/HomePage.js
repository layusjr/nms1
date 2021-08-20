import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container,Button, DialogContent, TextField, DialogActions, Typography, InputBase, Grid, ThemeProvider} from '@material-ui/core';
import { Label, SettingsBackupRestoreSharp, TextFieldsOutlined } from '@material-ui/icons';
import { stringify } from 'postcss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { data } from 'jquery';
import EditBlogPage from './EditBlogPage';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import HeaderNav from './HeaderNav';


const useStyles = makeStyles({
    comtainer: {
     
      minWidth: 650,
    },
    show:{
      
      maxWidth: 'lg',
    },
   
  });

  const HomePage = () =>{

return(
    <div> 
        <HeaderNav/>
    <Container    align="center" >
      <Grid  >

       <h1>Welcome User
           </h1>  
      </Grid>
    </Container>
    </div>
)


};

export default HomePage;
if(document.getElementById('homepage')){
  ReactDOM.render(<HomePage/>, document.getElementById('homepage'));
}