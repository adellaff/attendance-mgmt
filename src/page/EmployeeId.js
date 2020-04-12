import React, { Component } from 'react';
import {Header, Divider, Grid, Icon, Image} from 'semantic-ui-react';
import {getDataId} from './Employee';

class EmployeeId extends Component {
    constructor(props){
        super(props);
        this.state = {
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
                department: '',
                status: ''
            }
        }
    }

    getDataJson = async () => {
        const response = await getDataId();
        const data = await response.json();
        this.setState({
            employee: data
        })
        console.log(data)

    }
    render(){
        return(
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
        )
    }
}

export default EmployeeId;