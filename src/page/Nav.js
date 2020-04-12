import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <Menu stackable inverted>
                    <Menu.Item>
                        <img src={logo} onClick={() => window.location.href = "/"} alt="Sinarmas Logo" />
                    </Menu.Item>
                    <Menu.Item
                        as = {Link} to="/employee"
                    >
                        Employee
                    </Menu.Item>
                    <Menu.Item
                        as = {Link} to="/attendance"
                    >
                        Attendance Management
                    </Menu.Item>
                    <Menu.Item
                        as = {Link} to="/login"
                    >
                        LOGIN
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
export default Nav;