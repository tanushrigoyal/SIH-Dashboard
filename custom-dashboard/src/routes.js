import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import App from './App';
import Login from './login';

class Routes extends Component {
    render() {

        return (

            <Router>
            <Switch>
            <Route exact path='/login' component={Login}/>
            <Route path='/home' component={App}/>
            <Redirect from="/" to="/login" />
              </Switch>
              </Router>
        );
    }
}

export default Routes;
