import React, { Component } from 'react';
import Nav from './Nav';
import {
    Grid,
    Button,
    Icon,
    Input,
    Divider,
    Segment,
    Header,
    Table,
} from 'semantic-ui-react';

class Attendance extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Segment basic>
                    <Header as='h2' icon textAlign='center'>
                        <Icon color="red" name='addres book' circular />
                        <Header.Content>Attendance Management</Header.Content>
                    </Header>
                    <Divider clearing></Divider>
                </Segment>
                <Grid Container columns={2} stackable>
                    <Grid.Column verticalAlign="left">
                        <Button color='teal' icon labelPosition="left" size='tiny'><Icon name='filter' />Filter</Button>
                    </Grid.Column>
                    <Grid.Column verticalAlign="right">
                        <Input size='mini' icon='search' placeholder='Search...' />
                    </Grid.Column>
                </Grid>
                <Table size="small" color="red" inverted celled fixed singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Time in</Table.HeaderCell>
                            <Table.HeaderCell>Time Out</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>QR Id</Table.HeaderCell>
                            <Table.HeaderCell>NFC Id</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                </Table>
            </div>
        )
    }
}
export default Attendance;