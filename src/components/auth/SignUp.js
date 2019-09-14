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
    this.props.signUp("email","password","url");
  }
  onChangeImage = (images) =>{
 
    this.setState({image : images[0]})
     
    }
    render() {
        const { authErr } = this.props;
        return (
            <Card style={{padding : 10}}>
                <form onSubmit={this.handelClick} >
          <Grid container spacing={2}>
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
            <UploadImages onChange={this.onChangeImage} placeholder="Add profile Image" />
              {/*
              
              
              */}
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