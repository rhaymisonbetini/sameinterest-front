import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components

import Index from './components/index/Index';
import Login from './components/login/Login';
import Register from './components/register/Register';

export default function Routes() {


    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/index" component={Index} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>

    )

}