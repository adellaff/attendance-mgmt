import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Nav from "./Nav";
import {
    Button,
    Segment,
    Icon,
    Divider,
    Search,
    Header,
    Grid,
} from 'semantic-ui-react';

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Segment placeholder>
                    <Grid columns={2} stackable textAlign='center'>
                        <Divider vertical>Or</Divider>

                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name='user' color="red" /> Find Employee
                                </Header>

                                <Search placeholder='Search Employee...' />
                            </Grid.Column>

                            <Grid.Column>
                                <Header icon>
                                    <Icon name='users' color="red" /> Employees
                                </Header>
                                <Button onClick={e => window.location.href = "/employee"} inverted color="red">View Employees</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
export default Home;