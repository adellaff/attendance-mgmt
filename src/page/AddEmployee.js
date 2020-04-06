import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Form, Button, Divider, Icon, Header } from "semantic-ui-react";

const GenderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

const BloodType = [
    {key: 'a', text: 'A', value: 'a'},
    {key: 'b', text: 'B', value: 'b'},
    {key: 'o', text: 'O', value: 'o'},
    {key: 'ab', text: 'AB', value: 'ab'}
]

const status = [
    { key: 'y', text: 'Active', value: 'active' },
    { key: 'n', text: 'Inactive', value: 'inactive' },
  ]
class AddEmployee extends Component {
    render() {
        return (
            <div>
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='user' />
                        Add New Employee
                    </Header>
                </Divider>
                <Form>
                    <Form.Field>
                        <label>First Name </label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name </label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone </label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Select
                        fluid
                        label='Gender'
                        options={GenderOptions}
                        placeholder='Gender'
                    />
                    <Form.Select
                        fluid
                        label='Blood Type'
                        options={BloodType}
                        placeholder='Blood Type'
                    />
                    <Form.Field>
                        <label>Salary</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Hired Date </label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Select
                        fluid
                        label='Status'
                        options={status}
                        placeholder='Active / Inactive'
                    />
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>

        );
    }
}
export default AddEmployee;