import { CircularProgress, AppBar, Paper,Tabs,Tab,TableCell, Button, Container, Grid, Toolbar, Typography, Box, Avatar, TableHead, TableBody, TableRow } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { data } from 'jquery';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const MyFirstReactPage = () => {
    const [tabvalue, setTabvalue] = useState(0);
    const [users, setUsers] = useState([]);
    const [blogs, setBlogs] = useState([]);

    // const fetchPerson = () => fetch('http://127.0.0.1:8000/rindex').then((data) => data.json());
    //fetch data from api/url
    const fetchUser = () => fetch('http://127.0.0.1:8000/rindex').then((data) => data.json());
    const fetchBlog = () => fetch('http://127.0.0.1:8000/posts/index').then((data) => data.json());

    
    useEffect(() => {
        // onGetRandomPerson()
        console.log('tab is now on', tabvalue);
    }, [tabvalue]);

 
    const getUsers = async () =>{
        const users = await fetchUser();
        console.log(JSON.stringify(users.data, null, 2));
        console.log(users.links)
        // users.data
        setUsers(users.data)
    }   


   const handleChange = (event , newValue) => {
        setTabvalue(newValue);
   }
   
//    const tabChange(index){
//        return(
//            id: 'full-width-tab-${index}',
//            'aria-controls': 'full-width-tabpane;-${index]',
//        );


   useEffect(() => {
    getUsers();
   }, [])

    return(
        <Container>
            <AppBar>
                <Toolbar>
                    <Typography variant='body1'>
                        My First React Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Grid>
                <Paper square>
                    <Tabs
                        value={tabvalue}//value of tabs
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Active"   />
                        <Tab label="Disabled" />
                        <Tab label="Active" id="users"/>
                    </Tabs>
                </Paper>
            </Grid>
            <table name="users" id="users">
                <TableHead>This is Users table</TableHead>
                <TableBody><TableRow>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
                <TableCell>Column3</TableCell>
                </TableRow>
                {
                          
                          users.map((user) => (
                <TableRow>key={user.id}
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.id}</TableCell>
                 
                   <TableCell>{user.email}</TableCell>
                </TableRow>
                 ))
                          } 
                </TableBody>
            </table>

            {/*    {
                          
                            users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                ))
                          } */}

{/* blogblogblog */}
            <table hidden>
                <TableHead>This is Blogs table</TableHead>
                <TableBody><TableRow>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
                <TableCell>Column3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    {
                          
                            users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                ))
                          }
                    
                </TableRow>
                </TableBody>
            </table>
        </Container>
    )
}

export default MyFirstReactPage;

if (document.getElementById('app')) {
  ReactDOM.render(<MyFirstReactPage />, document.getElementById('app'));
}