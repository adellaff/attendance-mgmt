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
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {
        isLoading: false,
        value: '',
        employee: []
    }
    handleResultSelect = (e, { employee }) => this.setState({ value: employee.firstName })
    handleChange = (e, {value}) => {
        this.setState({
            isLoading: true, value
        })
        
    };
    getEmployee = employeeName => {
        fetch(`${process.env.REACT_APP_WS_URL}/employee/?firtsName=${employeeName}`)
        .then(response => response.json())
        .then(res => {
            this.setState({
                employee: res.employee
            })
            console.log(res.employee)
        });
    };

    handleSearch = () => {
        this.getEmployee(this.state.searchValue);
    };
    

    render() {
        const {isLoading, employee, searchValue}=this.state
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

                                <Search loading={isLoading} results={employee} name="employeeName" placeholder='Search Employee...' onResultSelect={this.handleSearch} onSearchChange={e => this.handleChange(e)} value={this.state.value}/>
                                
                            </Grid.Column>

                            <Grid.Column>
                                <Header icon>
                                    <Icon name='users' color="red" /> Employees
                                </Header>
                                <Button as = {Link} to ='/employee' inverted color="red">View Employees</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                
            </div>
            
        )
    }
}
export default Home;