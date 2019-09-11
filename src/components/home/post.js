import React, { Component } from 'react';
import PostContent from './post_content';


import {connect} from 'react-redux';
import { getPosts } from '../../store/actions/postAction';
class Post extends Component {
    state = {  
        posts : []
    }
    componentDidMount(){
        
        this.props.getPosts(1);
    }
    render() { 
        return (  
            <React.Fragment>
                <PostContent />
                
            </React.Fragment>
        );
    }
}
 
const mapActionsToProps = (dispatch)=>({
    getPosts : (part)=>dispatch(getPosts(part))
})
export default connect(null,mapActionsToProps)(Post);