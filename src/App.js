import React, { Component } from "react";
import "./App.css";
import './post.css';
import Navbar from "./components/firstPage/Navbar";
import { connect } from "react-redux";
import Dashboard from "./components/home/Dashboard";
class App extends Component {
  render() {
    const { auth } = this.props;
    return <div>{auth.uid !== undefined ? <Dashboard /> : <Navbar />}</div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(App);
