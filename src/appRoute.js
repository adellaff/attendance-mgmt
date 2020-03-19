import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import Employee from './page/Employee';
import Attendance from './page/Attendance';

const AppRoute = () => (
    <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/home" component={Home} />
        <Route path="/employee" component={Employee}/>
        <Route path="/attendance" component={Attendance}/>
    </BrowserRouter>
)
export default AppRoute;