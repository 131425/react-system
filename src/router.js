import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './page/Login';
import Home from './page/Home';
import Buttons from './page/Ui/buttons.js';
import NotFound from './page/NotFound';

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          {/* 因为 render 不要返回 所以不需要加 {}  */}
          <Route path="/" render={() =>
            <Admin>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/ui/buttons" component={Buttons} />
                <Route component={NotFound}/>
              </Switch>
            </Admin>
          } />
          <Route path="/login" component={Login} />
        </App>
      </HashRouter>
    )
  }
}