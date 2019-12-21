import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Editor from '../components/Editor'
import Article from '../components/Article';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/editor" component={Editor} />
        <Route path="/article/:id" component={Article} />
      </Switch>
    </Router>
  );
};
