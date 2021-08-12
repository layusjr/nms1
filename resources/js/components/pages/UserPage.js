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
import Container from '@material-ui/core/Container';
import { SettingsBackupRestoreSharp } from '@material-ui/icons';
import { stringify } from 'postcss';
// import { Button } from 'bootstrap';
import {Button,Link,Theme} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const UserPage = () =>{
    const [users, setUser] = useState([]);


 const fetchUser = () => fetch('http://127.0.0.1:8000/rindex').then((data) => data.json());
    
const getUsers = async () =>{
    const users = await fetchUser();
    // console.log(JSON,stringify(users.data, null,2));
    setUser(users.data)
}

useEffect(() =>{
    getUsers();
}, [])

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  buttonAction:{
    padding: 2,
  }
});





  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Users List</TableCell>
            
          </TableRow>
        </TableHead>
        <TableRow>
       
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        <TableBody>{ 
             users.map((user) => (
             <TableRow component="th" key ={user.id}>
                 
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.created_at}</TableCell>
                <TableCell className="classes.buttonAction">
                <Button variant="contained" color="green" href="#" startIcon={<VisibilityIcon/>}>Show</Button>
                <Button variant="contained" color="primary" href="#" startIcon={<EditIcon/>}>EDit</Button>
                <Button variant="contained" color="secondary" href="#" startIcon={<DeleteIcon/>} >Delete</Button>
                </TableCell>
             </TableRow>
        ) )
            }
         
           
            
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserPage;
if(document.getElementById('userindex')){
    ReactDOM.render(<UserPage/>, document.getElementById('userindex'));
}

