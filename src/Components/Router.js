import React from "react";
//to remove '#' in url, use 'BrowserRouter' same with 'HashRouter'
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header"
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Detail from "Routes/Detail";
import Collection from "Routes/Collection";

// <Redirect from="*" to="/" />: if none of them match, then redirect to home("/")
// <Switch>: render only one route at a time,if dont add this always redirect to home("/")

export default () => (
    <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/search" component={ Search } />
        <Route path="/tv" component={ TV } />
        <Route path="/movie/:id" exact component={ Detail } />
        <Route path="/show/:id" component={ Detail } />
        <Route path="/collection/:id" component={ Collection } />
        <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

