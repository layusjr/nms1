import {Card,CardContent,CardActions,CardBody,TextField, CircularProgress, AppBar, Paper,Tabs,Tab,TableCell, Button, Container, Grid, Toolbar, Typography, Box, Avatar, TableHead, TableBody, TableRow, CardHeader } from '@material-ui/core';
import { Add as AddIcon, KeyboardReturnSharp, SettingsInputSvideoRounded } from '@material-ui/icons';
import { data, type } from 'jquery';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    root: {
        minWidth: 275,
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
});

const ShowBlogPage = () => {
    const [viewUser, setviewUser] = useState();
    const [id, setId] = useState(19);
    const [blogs, setBlogs] = useState(null);

    const classes = useStyles();

    const fetchUser = async () => (
        fetch(`/posts/showID/${id}`).then((data) => console.log(data.blogs_data))
    )

    const fetchData = async () => {
        fetch(`/posts/showID/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('data.blogs_data', data)
                setBlogs(data.blogs_data)
            }).catch((err) => {
                console.error('this is the error', err);
            });
    };

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

    const bull = <span className={classes.bullet}>•</span>;
     
    useEffect(() => {
        fetchData();
        getUser();
    }, [])

    

     return (
         <div>
             <Card className={classes.root} variant="outlined">
                    <CardHeader>
                        <Typography>Sample Blogs</Typography>    
                    </CardHeader>
                    <CardContent>
                        {
                            blogs && (
                                <div key = {blogs.id}>
                                    
                                    <Typography>Blog Title:{blogs.title}</Typography>
                                    <Typography>Blog:{blogs.blogpost}</Typography>
                                </div>
                            )
                        }
                     </CardContent>   
                </Card>
            
         </div>
    );
}

export default ShowBlogPage;

if(document.getElementById('showblog')){
    ReactDOM.render(<ShowBlogPage/>, document.getElementById('showblog'));
}