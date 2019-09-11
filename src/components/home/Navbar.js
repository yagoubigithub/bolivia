import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";
import { Grid, Hidden, Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <Grid container>
          <Hidden mdDown>
            <Grid item md={6}>
             <Link className="nav-link" to="/"><h1 className="fb_title_name">Bolivia</h1></Link> 
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12} >
            <Link className="nav-link" to="/"><h1 className="fb_title_name" style={{ textAlign: "center" }} >
                Bolivia
              </h1></Link>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={6} style={{display :"flex",justifyContent : "center",alignItems: "center"}}>
            <input type="text" placeholder="ابحث"  dir="rtl" style={{padding : 6}} />
            <Button variant="outlined" style={{color :  "white",marginRight : 4}}>ابحث</Button>
           <Button><Link className="nav-link" to="/create-article" >اكتب مقالة</Link></Button>
            <Button  onClick={this.props.signOut}> <Link className="nav-link" to="/" >خروج</Link></Button>
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
