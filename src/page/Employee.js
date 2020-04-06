import React, { Component } from 'react';
import { Table, Segment, Button, Input, Grid, Icon, Header, Divider, Modal } from "semantic-ui-react";
import Nav from "./Nav";
import AddEmployee from './AddEmployee';

class Employee extends Component {
    constructor(props){
        super(props);
        this.state = {
            employeeData: []
        }
    }
    componentDidMount(){
        fetch("http://192.168.43.122:4000/employee")
        .then(response => response.json())
        .then(res =>{
            this.setState({
                employeeData: res
            })
        } );
    }
    render() {
        return (
            <div>
                <Nav />
                <Segment basic>
                    <Header as='h2' icon textAlign='center'>
                        <Icon color="red" name='users' circular />
                        <Header.Content>Employees</Header.Content>
                    </Header>
                    <Divider clearing></Divider>
                </Segment>
                <Grid container columns={2} stackable>
                    <Grid.Column>
                        <Modal trigger={<Button primary icon labelPosition="left" size='tiny'><Icon name='add' />Add Employee </Button>}>
                           <Modal.Content>
                                <AddEmployee />
                           </Modal.Content>
                        </Modal>
                        <Button color='teal' icon labelPosition="left" size='tiny'><Icon name='filter' />Filter</Button>

                    </Grid.Column>
                    <Grid.Column verticalAlign="right">
                        <Input size='mini' icon='search' placeholder='Search...' />
                    </Grid.Column>
                </Grid>
                <Table size="small" color="red" inverted celled fixed singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Photo</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Phone</Table.HeaderCell>
                            <Table.HeaderCell>Blood Type</Table.HeaderCell>
                            <Table.HeaderCell>Salary</Table.HeaderCell>
                            <Table.HeaderCell>Hired Date</Table.HeaderCell>
                            <Table.HeaderCell>Departement</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                {this.state.employeeData.map((dat, index)=>{
                    return (
                                  
                    <Table.Body key={index}>
                        <Table.Row>
                            <Table.Cell>{dat.photos}</Table.Cell>
                            <Table.Cell>{dat.firstName} {dat.lastName}</Table.Cell>
                            <Table.Cell>{dat.phone}</Table.Cell>
                            <Table.Cell>{dat.bloodGroup}</Table.Cell>
                            <Table.Cell>{dat.salary}</Table.Cell>
                            <Table.Cell>{dat.hiredDate}</Table.Cell>
                            <Table.Cell>{dat.department['departmentName']}</Table.Cell>
                            <Table.Cell>{dat.active}</Table.Cell>
                            <Table.Cell><Button color='green' size='mini'>EDIT</Button></Table.Cell>
                        </Table.Row>
                    </Table.Body>      
                    );
                })}
                </Table>
            </div>
        )
    }
}
export default Employee;