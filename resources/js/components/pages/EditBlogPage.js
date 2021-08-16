import {Card,CardContent,CardActions,CardBody,TextField, CircularProgress, AppBar, Paper,Tabs,Tab,TableCell, Button, Container, Grid, Toolbar, Typography, Box, Avatar, TableHead, TableBody, TableRow, CardHeader, TextareaAutosize } from '@material-ui/core';
import { Add as AddIcon, KeyboardReturnSharp, SettingsInputSvideoRounded} from '@material-ui/icons';
import { data, type } from 'jquery';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    root: {
        maxWidth: 700,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      content:{
        // backgroundColor: greeen,
      },
    //   blogpost: {
    //     maxWidth: sm,
    //   },
});

const EditBlogPage = (props) => {
    const idP = props;
    const [viewUser, setviewUser] = useState();
    const [id, setId] = useState(19);
    const [blogs, setBlogs] = useState(null);

    const classes = useStyles();

    const fetchUser = async () => (
        fetch(`/posts/showID/${idP}`).then((data) => console.log(data.blogs_data))
    )

    // const fetchData = async () => {
    //     fetch(`/posts/showID/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('data.blogs_data', data)
    //             setBlogs(data.blogs_data)
    //         }).catch((err) => {
    //             console.error('this is the error', err);
    //         });
    // };

    const getUser = async () => {
        const user = await fetchUser();
        console.log(user);
        // console.log(JSON.stringify(user.data,null, 5));
        // console.log(user.link)
        // setviewUser(user.data)
        // fetch('/posts/show{$id}')
        //     .then(response => response.json())
        //     .then((data) => {
        //     setviewUser(user.data)
        //     console.log('1231232')
        // });
        // const users = await fetchUser();
    }

    // const bull = <span className={classes.bullet}>•</span>;
     
    // useEffect(() => {
    //     fetchData();
    //     getUser();
    // }, [])

    

     return (
         <div>
             <Card className={classes.root} variant="outlined" align="center">
                    <CardHeader>
                        <Typography>Sample Blogs</Typography>    
                    </CardHeader>
                    {/* <CardContent>
                        {
                            blogs && (
                                <div key = {blogs.id}>
                                    
                                    <Typography>Blog Title:{blogs.title}</Typography>
                                    <Typography>Blog:{blogs.blogpost}</Typography>
                                </div>
                            )
                        }
                     </CardContent>    */}
                     <CardContent align="center" className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Blog Title
        </Typography>
        <TextField id="name" label="" variant="outlined" style={{ width: "100%" }} />
        <Typography className={classes.blogpost} color="textSecondary" gutterBottom>
         Blog content
        </Typography>
        <TextareaAutosize
             variant="outlined"
             margin="normal"
             required
            
             minRows='15'
             id="blogpost"
             placeholder="Blog Content"
             name="blogpost"
             minRows='10'
             style={{ width: "100%" }}/>
       <div>
            <Button color="primary" variant="contained">Save</Button> 
            <Button color="" variant ="contained" >Cancel</Button>
       </div>
      </CardContent>
                </Card>
            
         </div>
    );
}

export default EditBlogPage;

if(document.getElementById('editblog')){
    ReactDOM.render(<EditBlogPage/>, document.getElementById('editblog'));
}