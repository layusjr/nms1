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
import {Container,Button, DialogContent, TextField, DialogActions, Typography, InputBase} from '@material-ui/core';
import { Label, SettingsBackupRestoreSharp, TextFieldsOutlined } from '@material-ui/icons';
import { stringify } from 'postcss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { data } from 'jquery';
import EditBlogPage from './EditBlogPage';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { response } from 'express';
import { thisExpression } from '@babel/types';

const BlogPage = () =>{
    const [ blogs, setBlogs ] = useState([]);
    const [ editDialog, setEditDialog ] = useState(false);
    const [ showDialog, setShowDialog ] = useState(false);
    
    const [ editTitle, setEditTitle ] = useState('');
    const [ editPost, setEditPost ] = useState('');
    const [ editId , setEditId ] = useState('');

    const [ showTitle, setShowTitle ] = useState('');
    const [ showPost, setShowPost ] = useState('');
    const [ showId , setShowId ] = useState('');

    const fetchBlog = () => fetch('http://127.0.0.1:8000/indexs') 
    .then((data) => data.json());
  
  const getBlogs = async () => {
  const blogs = await fetchBlog();
  //  console.log(JSON,stringify(blogs.data, null,2));
  setBlogs(blogs.data)
      }
  const edit = (data, editState) => {
    setEditId(data.id);
    setEditTitle(data.title);
    setEditPost(data.blogpost);
    setEditDialog(editState);
  };

  const show = (data, showState) => {
    setShowId(data.id);
    setShowTitle(data.title);
    setShowPost(data.blogpost);
    setShowDialog(showState);
  };

  const deleteBlog = (id) => {
    // debugger;
    const { blogs } = this.useState;
    const apiUrl = BaseapiUrl +"" + id;

    fetch(apiUrl,{ method: 'DELETE'}.then(async response => {
      const data = await response.json();

      if(!response.ok){
        const errpr = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      this.SettingsBackupRestoreSharp({
        blog: blogs.filter(blog => blog.id !== id)
      });
      alert('Delete Successfull');
    })
    .catch(error =>{
      alert(' There was an error!');
      console.error('There was an error!', error);
    }));
  
  }

  useEffect(() => {
    getBlogs();
  }, [])

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

  const save = () => {

  } 
  const deleteHandler = (i, e) =>{
    e.preventDefault();
    this.props.onDelete(this.props.blogsp[i].id);
  };

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Dialog
        open={editDialog}
        onClose={()=>setEditDialog(false)}
        fullWidth
      >
        <DialogTitle id="max-width-dialog-title">Edit Posts</DialogTitle>
        <DialogContent>
          
          <TextField
            id="outlined"
            label="Title"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
            fullWidth
          />
          <TextField
            id="outlined"
            label="Content"
            value={editPost}
            onChange={(event) => setEditPost(event.target.value)}
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={save}>Save</Button>
          <Button onClick={()=>setEditDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
{/* show Dialog box */}
      <Dialog
        open={showDialog}
        onClose={()=>setShowDialog(false)}
        fullWidth
      >
        <DialogTitle id="max-width-dialog-title">Blog Posts</DialogTitle>
        <DialogContent>
          <TextField
          id="filled"
          label = "Title"
           fullWidth
           value={showTitle}
           InputProps={{
            readOnly: true,
          }}
          />
          <TextField 
            id="filled"
            label=" Content"
            multiline
            fullWidth
            value={showPost}
            InputProps={{
              readOnly: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setShowDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        </TableHead>
        <TableRow>
        <TableCell>Title</TableCell>
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
                <Button variant="contained"  onClick={() => show(blog,true)} startIcon={<VisibilityIcon/>}>Show</Button>
                <Button variant="contained" color="primary" onClick={() => edit(blog,true)} startIcon={<EditIcon/>}>EDit</Button>
                {/* <Button variant="contained" color="primary" href={`/posts/edit/${blog.id}`} startIcon={<EditIcon/>}>EDit</Button> */}
                <Button variant="contained" color="secondary" onCLick={() => this.deleteBlog(id)}   startIcon={<DeleteIcon/>} >Delete</Button>
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
