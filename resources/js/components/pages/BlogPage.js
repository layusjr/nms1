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

const BlogPage = () =>{
    const [blogs, setBLogs] = useState([]);


 const fetchBlog = () => fetch('http://127.0.0.1:8000/posts/index').then((data) => data.json());
    
const getBlogs = async () =>{
    const users = await fetchBlog();
    console.log(JSON,stringify(blogs.data, null,2));
    setBLogs(users.data)
}

useEffect(() =>{
    getBlogs();
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
          <TableRow>
            <TableCell>Blog Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Date Posted</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BlogPage;
if(document.getElementById('indexblog')){
    ReactDOM.render(<BlogPage/>, document.getElementById('indexblog'));
}

