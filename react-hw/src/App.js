import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import UserSearch from './UserSearch';
import { Following } from './Following';
import { Repositories } from './Repositories';

export default () => (
  <BrowserRouter>
    <div className="App">
      <Route path={'/'} render={props => <UserSearch {...props} />} />
      <Route
        path={'/following/:login'}
        render={props => <Following {...props} />}
      />
      <Route
        path={'/repositories/:login'}
        render={props => <Repositories {...props} />}
      />
    </div>
  </BrowserRouter>
);
