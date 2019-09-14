import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { signIn } from "../../store/actions/authAction";
import { connect } from "react-redux";
class SignIn extends Component {
    state = {  }

    handelClick = (e) => {

      e.preventDefault();
      const email = this.email.value;
      const password = this.password.value;
     // this.props.deleteAuthErr();
      this.setState({progress : true});
      this.props.signIn(email, password);
  
    };
    render() { 
      const { authErr } = this.props;
        return (
        <React.Fragment>    
        
        <form onSubmit={this.handelClick} >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <input
                ref={input => (this.email = input)}
                className="login-input"
                type="email"
                name="email"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <input
                ref={input => (this.password = input)}
                className="login-input"
                type="password"
                name="password"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                type="submit"
                size="small"
                variant="contained"
              >
                تسجيل الدخول
              </Button>
            </Grid>
          </Grid>
          <span style={{ color: "#F77" }}>{authErr ? authErr : " "}</span>
        </form>
    </React.Fragment>  );
    }
}
const mapStateToProps = state => {
 
  return {
    authErr: state.auth.authErr
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
  };
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);