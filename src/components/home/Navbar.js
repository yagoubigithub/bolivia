import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authAction'
class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <button onClick={()=>this.props.signOut()}>Logout</button>
        );
    }
}
const mapDipatchToProps = (dispatch)=>{

   
    return{
        signOut : ()=>dispatch(signOut())
    }
}
 
export default connect(null, mapDipatchToProps)(Navbar);