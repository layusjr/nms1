// import { CircularProgress,Modal, AppBar, Paper,Tabs,Tab,TableCell,Card,CardContent, Button, Container, Grid, Toolbar, Typography, Box, Avatar, TableHead, TableBody, TableRow, TextField, CardHeader } from '@material-ui/core';

// import { Add as AddIcon } from '@material-ui/icons';
// import { data } from 'jquery';
// import { makeStyles } from '@material-ui/core/styles';
// import React, { Fragment, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import { fontFamily } from '@material-ui/system';

// const useStyles = makeStyles((theme) => ({
//         root: {
            
//             backgroundColor: 'blue',  
//     },
    
//     card: {
//         minWidth: 150,
        
//       },
//     text: {
       
//         marginTop: theme.spacing(2),   
//         width: '100%'
//                 },  
//     Paper:{
//         margin:3,
//           } ,   
    
//     buttons:{
//         width:'100%',
//         marginTop: theme.spacing(1),
//     },
//     button:{
//         width:'100%',
//     },
//     header:{
//         width:'100%',
//         fontFamily:'Raleway', 
//         fontDisplay:'swap',
//     },
  
// }));

// export default function LoginPage(){
//     const classess = useStyles();
    
//     return(
//         <Container maxWidth="xs" fixed="bool">
//         <div>
//             <div item md={4}></div>
//         {/* <Box className={classess.box} > */}

//      <Card className={classess.card} >
    
//     {/* <Box className={classess.box} display='flex' justifyContent='center'> */}
//        <div>
//             <form>
//                 {/* <div><TextField id="standart-basic" label="Standard"/></div>
//                     */}
                    
//                    <h1 className={'classes.header'} justifyContent='center'>Login Page</h1> 
//                 <div ><TextField className={classess.text}  id="outlined-basic" label="Email/Username" variant="filled" fullWidth/></div>
//                 <div><TextField className={classess.text} id="outlined-basic" label="Password" variant="filled" type="password" fullWidth/></div>
//              </form>
//              <div>
//                  <div className={classess.buttons}>
//                  <Button className={classess.button} variant="outlined" color="primary">Login</Button>
//              <Button className={classess.button} variant="outlined" color="Primary">Register</Button>
//                  </div>
             
             

//              </div>
//         </div>
//     {/* </Box> */}
     
//         {/* <Grid container>
//             <Grid item md={6} sm={8} xs={12}>
//                 <Paper variant='outlined'>
//                     Conten 1
//                 </Paper>
//             </Grid>
//             <Grid item md={6} sm={4} xs={12}>
//                 <Paper variant='outlined'>
//                     Conten 2
//                 </Paper>
//             </Grid>

//             <Grid item md={6} sm={8} xs={12}>
//                 <Paper variant='outlined'>
//                     Conten 3
//                 </Paper>
//             </Grid>

//             <Grid item md={6} sm={4} xs={12}>
//                 <Paper variant='outlined'>
//                     Conten 4
//                 </Paper>
//             </Grid>

//         </Grid> */}
//         {/* </Box> */}
//        </Card>
//         {/* </Box> */}
//         </div>
//         </Container>       
//     );
// }






// // export default LoginPage;

// if (document.getElementById('app1')) {
//   ReactDOM.render(<LoginPage />, document.getElementById('app1'));
// }



import React from 'react';
import ReactDOM from 'react-dom';
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

function Copyright() {
  return ( 
      <Typography hidden>Copy Right</Typography>
  );
}

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

export default function LoginPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

if (document.getElementById('app1')) {
  ReactDOM.render(<LoginPage />, document.getElementById('app1'));
}