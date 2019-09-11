import React, { Component } from "react";
import "./App.css";
import "./post.css";
import booksImage from "./images/books.jpg";

import Navbar from "./components/firstPage/Navbar";
import { Close } from "@material-ui/icons";
import Dashboard from "./components/home/Dashboard";
import {connect} from 'react-redux';
import { Button, Grid, Hidden, IconButton } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import SignUp from "./components/auth/SignUp";

class App extends Component {
  state = {
    dialog : true
  }
  handelDialogClose = () =>{
    this.setState({dialog :  ! this.state.dialog})
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        {auth.uid !== undefined ? (
          <div>
            <Dashboard />
          </div>
        ) : (
          <div style={{backgroundColor : "var(--primary)", height : "100vh",width : "100vw",overflow :"hidden"}}>
            <Navbar />
            <Dialog fullWidth onClose={this.handelDialogClose} open={this.state.dialog}>
            <div style={{width : '100%'}}>
            <IconButton onClick={this.handelDialogClose}>
              <Close />
            </IconButton>

            </div>
              <SignUp />
            </Dialog>
            <Grid container spacing={0} style={{height : "88vh" }}>
              <Grid item md={8} xs={12} style={{textAlign : "center",overflowY : "auto !important"}}>
                <p className="description" dir="rtl">
                  العلم هو الوسيلة التي يرتفع من خلالها الإنسان ويصل إلى أعلى
                  المراتب، فالعلم هو سلاح في هذا الزمن والذي نحارب به الجهل، وبه
                  نحقق أحلامنا ونتقدم إلى الأمام، فصاحب العلم يساهم في تقدم
                  مجتمعه وتطوره،
                </p>
                <Button className="sign-up-btn" onClick={this.handelDialogClose}>سجل الان</Button>
              </Grid>
              <Hidden smDown>
                <Grid item md={4}>
                  <img
                    src={booksImage}
                    alt={"books image"}
                    style={{ maxWidth: "100%" ,height : "95vh",width : "100%"}}
                    
                  />
                </Grid>
              </Hidden>

             <br /> <br />
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(App);
