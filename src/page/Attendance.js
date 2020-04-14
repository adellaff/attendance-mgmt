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
import axios from 'axios';

class Attendance extends Component {
    constructor(props){
        super(props)
            this.state = {
                reportData: []
            }
        
    }

    componentDidMount(){
        axios
        .get(`${process.env.REACT_APP_WS_URL}/report`)
        .then(res => {
            this.setState({
                reportData: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <Nav />
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column width="2">
                            <Segment basic>
                                <Header as='h3' icon textAlign='center'>
                                    <Icon color="red" name='addres book' circular />
                                    <Header.Content>Attendance Management</Header.Content>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width="14">
                            <Segment>
                            <Table size="small" celled fixed singleLine>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Name</Table.HeaderCell>
                                            <Table.HeaderCell>Arrival</Table.HeaderCell>
                                            <Table.HeaderCell>Leaving</Table.HeaderCell>
                                            <Table.HeaderCell>Date</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    {this.state.reportData.map((dat, index) => {
                                        return (
                                            <Table.Body key={index}>
                                                <Table.Cell>{dat.employee['firstName']}</Table.Cell>
                                                <Table.Cell>{dat.inTime}</Table.Cell>
                                                <Table.Cell>{dat.outTime}</Table.Cell>
                                                <Table.Cell>{dat.dateReport}</Table.Cell>
                                            </Table.Body>
                                        );
                                    })}
                                </Table>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid> 
            </div>
        )
    }
}
export default Attendance;