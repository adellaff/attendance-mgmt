import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Employee from './page/Employee';
import Attendance from './page/Attendance';
import Login from './page/Login';

const AppRoute = () => (
    <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/employee" component={Employee}/>
        <Route path="/attendance" component={Attendance}/>
        <Route path="/login" component={Login}/>
    </BrowserRouter>
)
export default AppRoute;