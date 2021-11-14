import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";


import './Register.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    },
  }));  

const Register = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("type");
    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = React.useState({email: "", password: ""});

    const setEmail = (event) => {
      if (event.target.value) {
        setState({email: event.target.value, password: state.password});
      }
    }

    const setPassword = (event) => {
      if (event.target.value) {
        setState({email: state.email, password: event.target.value});
      }
    }

    const autenthicate = () => {
        axios.post("http://localhost:4200/api/v1/users/login", {
          username: state.email,
          password: state.password
        }).then(response => {
          localStorage.setItem("token", response.data.response.token);
          localStorage.setItem("id", response.data.response.id);
          localStorage.setItem("type", response.data.response.userType);
          history.replace("/main");
        }).catch(error => {
          console.log(error)
          alert('Ceva nu a mers bine! Asigura-te ca datele introduse sunt corecte si ca ti-ai activat contul!')
        });
    };

    return (
        <div className="center">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="email" label="Emailul meu" variant="outlined" onChange={setEmail}/>
                <br />
                <TextField id="password" autoComplete="false" label="Parola mea" variant="outlined" type="password" onChange={setPassword}/>
            </form>
            <Button className={classes.root} color="primary" onClick={autenthicate}>Autentifica-ma!</Button>
        </div>
    );
};

export default Register;