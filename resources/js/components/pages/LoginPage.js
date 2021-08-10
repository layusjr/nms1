import { CircularProgress,Modal, AppBar, Paper,Tabs,Tab,TableCell,Card,CardContent, Button, Container, Grid, Toolbar, Typography, Box, Avatar, TableHead, TableBody, TableRow, TextField, CardHeader } from '@material-ui/core';

import { Add as AddIcon } from '@material-ui/icons';
import { data } from 'jquery';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { fontFamily } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
        root: {
            
            backgroundColor: 'blue',  
    },
    
    card: {
        minWidth: 150,
        
      },
    text: {
       
        marginTop: theme.spacing(2),   
        width: '100%'
                },  
    Paper:{
        margin:3,
          } ,   
    
    buttons:{
        width:'100%',
        marginTop: theme.spacing(1),
    },
    button:{
        width:'100%',
    },
    header:{
        width:'100%',
        fontFamily:'Raleway', 
        fontDisplay:'swap',
    },
  
}));

export default function LoginPage(){
    const classess = useStyles();
    
    return(
        <Container maxWidth="xs" fixed="bool">
        <div>
            <div item md={4}></div>
        {/* <Box className={classess.box} > */}

     <Card className={classess.card} >
    
    {/* <Box className={classess.box} display='flex' justifyContent='center'> */}
       <div>
            <form>
                {/* <div><TextField id="standart-basic" label="Standard"/></div>
                    */}
                    
                   <h1 className={'classes.header'} justifyContent='center'>Login Page</h1> 
                <div ><TextField className={classess.text}  id="outlined-basic" label="Email/Username" variant="filled" fullWidth/></div>
                <div><TextField className={classess.text} id="outlined-basic" label="Password" variant="filled" type="password" fullWidth/></div>
             </form>
             <div>
                 <div className={classess.buttons}>
                 <Button className={classess.button} variant="outlined" color="primary">Login</Button>
             <Button className={classess.button} variant="outlined" color="Primary">Register</Button>
                 </div>
             
             

             </div>
        </div>
    {/* </Box> */}
     
        {/* <Grid container>
            <Grid item md={6} sm={8} xs={12}>
                <Paper variant='outlined'>
                    Conten 1
                </Paper>
            </Grid>
            <Grid item md={6} sm={4} xs={12}>
                <Paper variant='outlined'>
                    Conten 2
                </Paper>
            </Grid>

            <Grid item md={6} sm={8} xs={12}>
                <Paper variant='outlined'>
                    Conten 3
                </Paper>
            </Grid>

            <Grid item md={6} sm={4} xs={12}>
                <Paper variant='outlined'>
                    Conten 4
                </Paper>
            </Grid>

        </Grid> */}
        {/* </Box> */}
       </Card>
        {/* </Box> */}
        </div>
        </Container>       
    );
}






// export default LoginPage;

if (document.getElementById('app1')) {
  ReactDOM.render(<LoginPage />, document.getElementById('app1'));
}