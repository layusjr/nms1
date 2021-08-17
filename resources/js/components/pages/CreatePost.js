
  
import React,{ useEffect, useState, handleSubmit} from 'react';
import  ReactDOM  from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TextareaAutosize } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
 
const CreatePost = (props) =>{
  const classes = useStyles();

  const [ title, setTitle] = useState("");
  const [blogpost, setBlogpost] = useState("");


  const onTitleChange = e => setTitle(e.target.value);
  const onBlogpostChange = e => setBlogpost(e.target.value);

  const handleSubmit = e =>{
    e.preventDefault();
      
    const data = {title, blogpost};

    const token = document.head.querySelector('meta[name="csrf-token"]');

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": 'XMLHttpRequest',
      },
      body:JSON.stringify({
        name:props.name,
        id:props.id,
        title:setTitle,
        blogpost:setBlogpost,
      })
    };

    fetch("http://127.0.0.1:8000/api/posts/store", requestOptions)
        .then(response => response.json())
        .then(res => console.log(res))
        .catch((err) => console.error());
  };

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
           Create Blog Post
        </Typography>
        <form className={classes.form} noValidate>
         
          
          <TextField 
          
          value={title}
          onChange={onTitleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Blog Title"
            name="title"
            autoComplete="title"
            
            autoFocus
          />
          <TextareaAutosize
          value={blogpost}
            onChange={onBlogpostChange}
            variant="outlined"
             margin="normal"
             required
            
             minRows='15'
             id="blogpost"
             placeholder="Blog Content"
             name="blogpost"
             minRows='10'
             style={{ width: "100%" }}/>
         
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Post
          </Button>

            
         
        </form>
      </div>
    
    </Container>
  );
}

export default CreatePost;
if(document.getElementById('createpost')){
  ReactDOM.render(<CreatePost
    {...Object.assign({}, document.getElementById('createpost').dataset)}
  />, document.getElementById('createpost'));
}