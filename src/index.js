import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NewCategory from './pages/NewCategory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainRoute from './pages/MainRoute';

ReactDOM.render(
  <BrowserRouter>
    <MainRoute>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-video" component={NewVideo} />
        <Route exact path="/new-category" component={NewCategory} />
        <Route component={Home} />
      </Switch>
    </MainRoute>
  </BrowserRouter>,
  document.getElementById('root')
);
