import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { PathNotFound } from '../components/common'

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route component={PathNotFound} />
            </Switch>
    )
    }
}

export default Routes;