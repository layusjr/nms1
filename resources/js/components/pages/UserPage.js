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
import {DialogActions, Dialog, DialogContent,DialogTitle,TextField} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { SettingsBackupRestoreSharp } from '@material-ui/icons';
import { stringify } from 'postcss';
// import { Button } from 'bootstrap';
import {Button,Link,Theme} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HeaderNav from './HeaderNav';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  buttonAction:{
    padding: 2,
  },
  });

const UserPage = () =>{
    const classes = useStyles();

    const [users, setUser] = useState([]);
    const [editDialog, setEditDialog] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);

    const [ editName, setEditName ] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editRoles, setEditRoles] = useState('');
    const [ editId, setEditId] = useState('');

    const [showName, setShowName] = useState('');
    const [showEmail, setShowEmail] = useState('');
    const [showRoles, setShowRoles] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [ showId, setShowId] = useState('');
    
    const [deleteName, setDeleteName] = useState('');
    const [deleteId, setDeleteId] = useState('');

    const fetchUser = () => fetch('http://127.0.0.1:8000/rindex')
      .then((data) => data.json());
    
    const getUsers = async () => {
    const users = await fetchUser();
      setUser(users.data)
     }

     const deleteUser = (id) => {
      fetch('http://127.0.0.1:8000/api/admin/delete', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          id:id,
         
        }),
      }).then((data) => data.json()).then((data) => {
        console.log('deleted', data);
      }).catch((err) => {
        console.error(err);
      });
    };

     const save = (id) => {
       fetch('http://127.0.0.1:8000/api/admin/update',{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          id:id,
          name:editName,
          email:editEmail,
          roles:editRoles,
        }),
            
      }).then((data) => data.json()).then((data) => {
        console.log('updated', data);
      }).catch((err) => {
        console.error(err);
      });
     };

    const edit = (data, editState) => {
      setEditId(data.id);
      setEditName(data.name);
      setEditEmail(data.email);
      setEditRoles(data.roles);
      setEditDialog(editState);
    };

    const show = (data, showState) => {
      setShowId(data.id);
      setShowName(data.name);
      setShowEmail(data.email);
      setShowRoles(data.roles);
      setShowPassword(data.password);
      setShowDialog(showState);
    };

    const destroy = (data, deleteState) => {
      setDeleteId(data.id);
      setDeleteName(data.name);
      setDeleteDialog(deleteState);
    };

    const refresh = () => {
      window.location.reload();
    }

    useEffect(() =>{    
    getUsers();
          }, [])

  return (
    <div>
      <HeaderNav/> 
      <TableContainer component={Paper}>

{/* SHOW DIALOG  */}
         <Dialog
        open={showDialog}
        onClose={()=>setShowDialog(false)}
        fullWidth
        >
        <DialogTitle id="max-width-dialog-title">Profile</DialogTitle>
        <DialogContent>

          
        <TextField
            id="outlined"
            label="User Id"
            value={showId}
            onChange={(event) => setShowId(event.target.value)}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            />
          
          <TextField
            id="outlined"
            label="Title"
            value={showName}
            onChange={(event) => setShowName(event.target.value)}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            />
          <TextField
            id="outlined"
            label="Email"
            value={showEmail}
            onChange={(event) => setShowEmail(event.target.value)}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            />
  
            <TextField
            id="outlined"
            label="User Type"
            value={showRoles}
            onChange={(event) => setShowRoles(event.target.value)}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            /> 
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setShowDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
        {/* EDIT DIALOG */}
      <Dialog
        open={editDialog}
        onClose={()=>setEditDialog(false)}
        fullWidth
        >
        <DialogTitle id="max-width-dialog-title">Edit Profile</DialogTitle>
        <DialogContent>
          
        <TextField
            id="outlined"
            label="ID"
            value={editId}
            onChange={(event) => setEditId(event.target.value)}
            fullWidth
            disabled
            style={{
              display:'none'
            }}
            />
          <TextField
            id="outlined"
            label="Name"
            value={editName}
            onChange={(event) => setEditName(event.target.value)}
            fullWidth
            />
            <TextField
            id="outlined"
            label="Email"
            value={editEmail}
            onChange={(event) => setEditEmail(event.target.value)}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            />
          <TextField
            id="outlined"
            label="User Type"
            value={editRoles}
            onChange={(event) => setEditRoles(event.target.value)}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            />
        </DialogContent>
        <DialogActions>
        <Button onClick={()=>{
          save(editId);
          setEditDialog(false);
          refresh();
        }}>Save</Button>
          <Button onClick={()=>setEditDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* DELETE DIALOG */}
      <Dialog
        open={deleteDialog}
        onClose={()=>setDeleteDialog(false)}
        fullWidth
        >
        <DialogTitle id="max-width-dialog-title">Blog Delete</DialogTitle>
        <DialogContent>
          <TextField
          id="filled"
          label = "Name"
          fullWidth
          value={deleteName}
          InputProps={{
            readOnly: true,
          }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            deleteUser(deleteId),
            setDeleteDialog(false);
            // refresh();
          }}>Delete</Button>
          <Button onClick={()=>setDeleteDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog> 

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <Button align="center">Users List</Button>
            {/* <Link align="center">Users List</Link> */}
            
          </TableRow>
        </TableHead>
        <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        <TableBody>{ 
             users.map((user) => (
               <TableRow component="th" key ={user.id}>
                 <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.created_at}</TableCell>
                
                <TableCell className="classes.buttonAction">
                <Button variant="contained"  onClick={() => show(user,true)} startIcon={<VisibilityIcon/>}>Show</Button>
                <Button variant="contained" color="primary" onClick={() => edit(user,true)} startIcon={<EditIcon/>}>EDit</Button>
                {/* <Button variant="contained" color="primary" href={`/posts/edit/${blog.id}`} startIcon={<EditIcon/>}>EDit</Button> */}
                <Button variant="contained" color="secondary" onClick={() => destroy(user,true)}   startIcon={<DeleteIcon/>} >Delete</Button>
                </TableCell>
             </TableRow>
           
           ) )
          }
         
           
            
          
        </TableBody>
      </Table>
    </TableContainer>
          </div>
  );
}

export default UserPage;
if(document.getElementById('userindex')){
    ReactDOM.render(<UserPage/>, document.getElementById('userindex'));
}

