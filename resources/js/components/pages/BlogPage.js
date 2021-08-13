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
import {Container,Button} from '@material-ui/core';
import { SettingsBackupRestoreSharp } from '@material-ui/icons';
import { stringify } from 'postcss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const BlogPage = () =>{
    const [blogs, setBLogs] = useState([]);


    const fetchData = async () => {
      fetch('/posts/indexs')
      .then(response => response.json())
      .then(data => {
        setBLogs(data.blogs_data)
      });
  };

  useEffect(() => {
      fetchData();
  }, [])

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        </TableHead>
        <TableRow>
        <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        
        <TableBody>{ 
        
             blogs.map((blog) => (
             <TableRow component="th" key ={blog.id}>
                 
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.user_name}</TableCell>
                <TableCell>{blog.created_at}</TableCell>
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

export default BlogPage;
if(document.getElementById('indexblog')){
    ReactDOM.render(<BlogPage/>, document.getElementById('indexblog'));
}

