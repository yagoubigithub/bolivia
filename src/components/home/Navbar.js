import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";
import { Grid, Hidden, Button } from "@material-ui/core";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <Grid container>
          <Hidden mdDown>
            <Grid item md={6}>
              <h1 className="fb_title_name">Bolivia</h1>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12} >
              <h1 className="fb_title_name" style={{ textAlign: "center" }} >
                Bolivia
              </h1>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={6} style={{display :"flex",justifyContent : "center",alignItems: "center"}}>
            <input type="text" placeholder="ابحث"  />
            <Button style={{color :  "white"}}>ابحث</Button>
            <Button  style={{color :  "white"}}>اكتب مقالة</Button>
            <Button  style={{color :  "white"}} onClick={this.props.signOut}>Logout</Button>
          </Grid>
        </Grid>
      </nav>
    );
  }
}
const mapDipatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDipatchToProps
)(Navbar);
