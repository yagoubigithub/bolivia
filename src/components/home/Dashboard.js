import React from "react";
import Navbar from "./Navbar";
import Post from "./post";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import createArticle from "../create-article/create-article";
export default function Dashboard() {
  return (
    <div>
    
     
      <BrowserRouter>
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Post} />
            <Route path="/create-article" component={createArticle} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
