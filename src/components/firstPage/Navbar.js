import React from 'react'
import { Grid, Hidden } from "@material-ui/core";
import SignIn from '../auth/SignIn';
export default function Navbar() {
    return (
        <nav className="navbar">
        <Grid container>
         
            <Grid item md={6} xs={12}>
              <h1 className="fb_title_name">Bolivia</h1>
            </Grid>
        
         

          <Grid item xs={12} md={6}>
           <SignIn /> 

          </Grid>
        </Grid>
      </nav>
    )
}
