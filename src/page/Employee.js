import React, { Component } from 'react';
import { Table, Segment, Button, Input, Grid, Icon, Header, Divider } from "semantic-ui-react";
import Nav from "./Nav";


class Employee extends Component {
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
                <Grid Container columns={2} stackable>
                    <Grid.Column verticalAlign="left">
                        <Button primary icon labelPosition="left" size='tiny'><Icon name='add' />Add Employee </Button>
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
                            <Table.HeaderCell>QR ID</Table.HeaderCell>
                            <Table.HeaderCell>NFC ID</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell>Shorter description</Table.Cell>
                            <Table.Cell>Shorter description</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
export default Employee;