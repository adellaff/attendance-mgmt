import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import Employee from './page/Employee';
import Attendance from './page/Attendance';
import Login from './page/Login';

const AppRoute = () => (
    <HashRouter>
        <Route path="/" exact component={App} />
        <Route path="/employee" component={Employee}/>
        <Route path="/attendance" component={Attendance}/>
        <Route path="/login" component={Login}/>
    </HashRouter>
)
export default AppRoute;