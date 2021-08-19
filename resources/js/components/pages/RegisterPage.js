
import React, { useEffect, useState } from 'react';
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
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { SettingsOverscanOutlined } from '@material-ui/icons';
import { set } from 'lodash';

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

const RegisterPage = (props) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");

  const onNameChange = e => setName(e.target.value);
  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e =>setPassword(e.target.value);
  const onRolesChange = e => setRoles(e.target.value);

  const handleSubmit = e =>{
    e.preventDefault();
  
    const data = {name, email, password, roles,};

    // const token = document.head.querySelector('meta{name="csrf-token"]');

    const requestOptions = {
      method: "POST",
      headers:   {
         "Content-Type": "application/json",
      "X-Requested-With": 'XMLHttpRequest',
    },
    body:JSON.stringify({
      // name:props.name,
      // id:props.id,
      // title:title,
      // blogpost:blogpost,
      name:name,
      email:email,
      password:password,
      roles:roles,
    })
  };

    fetch("http://127.0.0.1:8000/api/admin/store", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res))
      // .then(res => window.location.replace('userpage'))
      .catch((err) => console.error());
};
return (
  <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate>
     
          <TextField
          value={name}
          onChange={onNameChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoFocus
            />
             <TextField
              value={email}
              onChange={onEmailChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            />
          <TextField
           value={password}
           onChange={onPasswordChange}
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
          <div>
          <FormLabel component="legend"
           value={roles}
           onChange={onRolesChange}
          >Roles</FormLabel>
        <RadioGroup aria-label="gender" name="role"  onChange={handleSubmit}>
        <FormControlLabel value="author" control={<Radio />} label="Author" />
        <FormControlLabel value="reader" control={<Radio />} label="Reader" />
      </RadioGroup>
      </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            
              <Link href="http://127.0.0.1:8000/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
}
  
  export default RegisterPage;
  if (document.getElementById('signup')) {
    ReactDOM.render(<RegisterPage />, document.getElementById('signup'));
  }