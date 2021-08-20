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
  table: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    minWidth: 550,
  }, 
});

const BlogPage = () =>{
  const classes = useStyles();

  const [ blogs, setBlogs ] = useState([]);
  const [ editDialog, setEditDialog ] = useState(false);
  const [ showDialog, setShowDialog ] = useState(false);
  const [ deleteDialog, setDeleteDialog ] = useState(false);
  
  const [ editTitle, setEditTitle ] = useState('');
  const [ editPost, setEditPost ] = useState('');
  const [ editId , setEditId ] = useState('');

  const [ showTitle, setShowTitle ] = useState('');
  const [ showPost, setShowPost ] = useState('');
  const [ showId , setShowId ] = useState('');

  const [ deleteTitle, setDeleteTitle ] = useState('');
  const [ deletePost, setDeletePost ] = useState('');
  const [ deleteId , setDeleteId ] = useState('');

  const fetchBlog = () => (
    fetch('http://127.0.0.1:8000/indexs') 
      .then((data) => data.json())
  );
  
  const getBlogs = async () => {
    const blogs = await fetchBlog();
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

  const destroy = (data, deleteState) => {
    setDeleteId(data.id);
    setDeleteTitle(data.title);
    setDeletePost(data.blogpost);
    setDeleteDialog(deleteState);
  };

  const refresh = () => {
    window.location.reload();

  };

  const deleteBlog = (id) => {
    fetch('http://127.0.0.1:8000/api/posts/delete', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        id:id,
        title:editTitle,
        blogpost:editPost
      }),
    }).then((data) => data.json()).then((data) => {
      console.log('deleted', data);
    }).catch((err) => {
      console.error(err);
    });
  };

  const save = (id) => {
    fetch('http://127.0.0.1:8000/api/posts/update', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        id:id,
        title:editTitle,
        blogpost:editPost
      }),
    }).then((data) => data.json()).then((data) => {
      console.log('updated', data);
    }).catch((err) => {
      console.error(err);
    });
  };


  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
    <HeaderNav/>   
    <TableContainer component={Paper}>
      <Button className={classes.add}
      color='primary'
      size='small'
      variant="outlined"
      fullWidth
      href="http://127.0.0.1:8000/react/createpost"
    >Add Blog Post</Button>

{/* EDIT BLOG */}
    <Dialog
        open={editDialog}
        onClose={()=>setEditDialog(false)}
        maxWidth="650"
        >
        <DialogTitle id="max-width-dialog-title" backgroundColor="primary">Edit Posts</DialogTitle>
        <DialogContent>
          
          <TextField
            id="outlined"
            label="Title"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
            multiline
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
        <Button onClick={()=>{
          save(editId),
          setEditDialog(false),
          refresh();
        }}>Save</Button>
          <Button onClick={()=>setEditDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

{/* show Dialog box */}
      <Dialog 
        open={showDialog}
        onClose={()=>setShowDialog(false)}
        maxWidth="700"
        >
        <DialogTitle id="max-width-dialog-title">Blog Posts</DialogTitle>
        <DialogContent >
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

      {/* delete Dialog box */}
      <Dialog
        open={deleteDialog}
        onClose={()=>setDeleteDialog(false)}
        fullWidth
        >
        <DialogTitle id="max-width-dialog-title">Blog Delete</DialogTitle>
        <DialogContent>
          <TextField
          id="filled"
          label = "Title"
          fullWidth
          value={deleteTitle}
          InputProps={{
            readOnly: true,
          }}
          />
          <TextField 
            id="filled"
            label=" Content"
            multiline
            fullWidth
            value={deletePost}
            InputProps={{
              readOnly: true,
            }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            deleteBlog(deleteId),
            setDeleteDialog(false),
            refresh();
          }}>Delete</Button>
          <Button onClick={()=>setDeleteDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        </TableHead>
        <TableRow>
        <TableCell>Blog No.</TableCell>
        <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        
        <TableBody>{ 
           blogs.map((blog) => (
             <TableRow component="th" key ={blog.id}>
                 <TableCell >{blog.id}</TableCell>
                <TableCell style={{width: '30%'}}>{blog.title}</TableCell>
                <TableCell>{blog.user_name}</TableCell>
                <TableCell>{blog.created_at}</TableCell>
                <TableCell className="classes.buttonAction">
                <Button variant="contained"  onClick={() => show(blog,true)} startIcon={<VisibilityIcon/>}>Show</Button>
                <Button variant="contained" color="primary" onClick={() => edit(blog,true)} startIcon={<EditIcon/>}>EDit</Button>
                {/* <Button variant="contained" color="primary" href={`/posts/edit/${blog.id}`} startIcon={<EditIcon/>}>EDit</Button> */}
                <Button variant="contained" color="secondary" onClick={() => destroy(blog,true)}   startIcon={<DeleteIcon/>} >Delete</Button>
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
export default BlogPage;
if(document.getElementById('indexblog')){
  ReactDOM.render(<BlogPage/>, document.getElementById('indexblog'));
}
