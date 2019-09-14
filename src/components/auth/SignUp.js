import React, { Component } from 'react'
import { Card, Grid, Button } from '@material-ui/core';


//Redux 
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authAction';
//MUT
import  UploadImages  from  'yagoubi-upload-images'

 class SignUp extends Component {
  handelClick = (e) =>{

    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const firstname = this.firstname.value;
    const lastname = this.lastname.value;
  
    const newUser = {
      email : email,
      password : password,
      firstname  : firstname,
      lastname : lastname

    }
    this.props.signUp(newUser);
  }
  
    render() {
        const { authErr } = this.props;
        return (
            <Card style={{padding : 10}}>
                <form onSubmit={this.handelClick} >
          <Grid container spacing={2}>
          <Grid item xs={12} >
              <input
                ref={input => (this.firstname = input)}
                className="login-input"
                type="text"
                name="firstname"
                defaultValue=""
                placeholder="Firstname*"
              />
            </Grid>
            <Grid item xs={12} >
              <input
                ref={input => (this.lastname = input)}
                className="login-input"
                type="text"
                name="lastname"
                defaultValue=""
                placeholder="Lastname*"
              />
            </Grid>
            <Grid item xs={12} >
              <input
                ref={input => (this.email = input)}
                className="login-input"
                type="email"
                name="email"
                defaultValue=""
                placeholder="Email*"
              />
            </Grid>
            <Grid item xs={12} >
              <input
                ref={input => (this.password = input)}
                className="login-input"
                type="password"
                name="password"
                defaultValue=""
                placeholder="Password*"
              />
            </Grid>
            <Grid item xs={12} >
              <input
                ref={input => (this.password = input)}
                className="login-input"
                type="password"
                name="password"
                defaultValue=""
                placeholder="Confirm Password*"
              />
            </Grid>
           
            <Grid item xs={12} >
              <Button
                type="submit"
                size="small"
                variant="contained"
              >
               سجل
              </Button>
            </Grid>
          </Grid>
          <span style={{ color: "#F77" }}>{authErr ? authErr : " "}</span>
        </form>
            </Card>
        )
    }
}
const mapStateToProps = state => {
 
  return {
    authErr: state.auth.authErr
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password) => dispatch(signUp(email, password)),
  };
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);