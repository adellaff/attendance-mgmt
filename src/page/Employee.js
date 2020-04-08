import React, { Component } from 'react';
import { Table, Segment, Button, Input, Grid, Icon, Header, Divider, Modal, Image } from "semantic-ui-react";
import Nav from "./Nav";
import AddEmployee from './AddEmployee';
import axios from 'axios';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeData: [],
            employee: {
                firstName: '',
                lastName: '',
                gender: '',
                photos: '',
                phone: '',
                familyName: '',
                familyNumber: '',
                bloodType: '',
                hiredDate: '',
                department: {
                    deptId: '',
                    departementName: '',
                },
                status: ''
            }
        }
    }
    getDataId = e => {
        axios
            .get(`http://192.168.43.122:4000/employee/${e.target.value}`)
            .then(res => {
                this.setState({
                    employee: res.data
                })
                console.log(res)
            });

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
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                            <Table.HeaderCell>Blood Type</Table.HeaderCell>
                            <Table.HeaderCell>Hired Date</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Family Name</Table.HeaderCell>
                            <Table.HeaderCell>Family Number</Table.HeaderCell>
                            <Table.HeaderCell>Departement</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    {this.state.employeeData.map((dat, index) => {
                        return (

                            <Table.Body key={index}>
                                <Table.Row>
                                    <Table.Cell>{dat.photos}</Table.Cell>
                                    <Table.Cell>{dat.firstName} {dat.lastName}</Table.Cell>
                                    <Table.Cell>{dat.phone}</Table.Cell>
                                    <Table.Cell>{dat.gender}</Table.Cell>
                                    <Table.Cell>{dat.bloodType}</Table.Cell>
                                    <Table.Cell>{dat.hiredDate}</Table.Cell>
                                    <Table.Cell>{dat.status}</Table.Cell>
                                    <Table.Cell>{dat.familyName}</Table.Cell>
                                    <Table.Cell>{dat.familyNumber}</Table.Cell>
                                    <Table.Cell>{dat.department['departmentName']}</Table.Cell>
                                    <Table.Cell>
                                    <Modal trigger={<Button color="green" size='mini' value={dat.employeeId} onClick={this.getDataId}>View </Button>}>
                                        <Modal.Content>
                                        <div>
                                            <Divider horizontal>
                                                <Header as='h4'>
                                                     <Icon name='user' />
                                                     Employee Profile
                                                </Header>
                                            </Divider>
                                                <Grid>
                                                    <Grid.Column width={4}>
                                                        <Image src={this.state.employee.photos}  />
                                                    </Grid.Column>
                                                        <Grid.Column width={9}>
                                                            <Header as='h5'>Name</Header>
                                                            {this.state.employee.firstName} {this.state.employee.lastName}
                                                            <Header as='h5'>Phone</Header>
                                                            {this.state.employee.phone}
                                                            <Header as='h5'>Gender</Header>
                                                            {this.state.employee.gender}
                                                            <Header as='h5'>Blood Type</Header>
                                                            {this.state.employee.bloodType}
                                                            <Header as='h5'>Hired Date</Header>
                                                            {this.state.employee.hiredDate}
                                                            <Header as='h5'>status</Header>
                                                            {this.state.employee.status}
                                                            <Header as='h5'>Family Related</Header>
                                                            {this.state.employee.familyName} {this.state.employee.familyNumber} 
                                                            <Header as='h5'>Departement Name</Header>
                                                            {this.state.employee.deptId}
                                                        </Grid.Column>
                                                    
                                                    </Grid>
                                                    
                                                    
                                        </div>
                                        </Modal.Content>
                                            <Modal.Actions>
                                            <Button color='red'>
                                                <Icon name='file pdf'/> Export
                                            </Button>
                                            <Button color='black'>
                                                <Icon name='qrcode'/> Generate
                                            </Button>
                                            </Modal.Actions>
                                    </Modal>
                                    </Table.Cell>
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