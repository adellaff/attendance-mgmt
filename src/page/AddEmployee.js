// import React, { Component } from 'react';
// import "semantic-ui-css/semantic.min.css";
// import { Form, Button, Divider, Icon, Header } from "semantic-ui-react";
// import axios from 'axios';

// const GenderOptions = [
//     { key: 'm', text: 'Male', value: 'male' },
//     { key: 'f', text: 'Female', value: 'female' },
//   ]

// const BloodType = [
//     {key: 'a', text: 'A', value: 'a'},
//     {key: 'b', text: 'B', value: 'b'},
//     {key: 'o', text: 'O', value: 'o'},
//     {key: 'ab', text: 'AB', value: 'ab'}
// ]

// const statusOptions = [
//     { key: 'y', text: 'Active', value: 'active' },
//     { key: 'n', text: 'Inactive', value: 'inactive' },
// ]


// class AddEmployee extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
// 			employeeId: '',
//             firstName: '',
// 			lastName: '',
// 			gender: '',
// 			photos: '',
//             phone: '',
//             familyName: '',
//             familyNumber:'',
//             bloodType: '',
//             hiredDate: '',
//             deptId:'',
//             status:''
// 		}
//     }
//     changeHandler = e => {
// 		this.setState({ [e.target.name]: e.target.value })
//     }
//     submitHandler = e => {
// 		e.preventDefault()
// 		console.log(this.state)
// 		axios
// 			.post('${process.env.REACT_APP_WS_URL}employee', this.state)
// 			.then(response => {
// 				console.log(response)
// 			})
// 			.catch(error => {
// 				console.log(error)
// 			})
// 	}
//     render() {
//         const { employeeId, firstName, lastName,gender,photos,phone,familyName,familyNumber,bloodType,hiredDate,
//             deptId , status } = this.state
//         return (
//             <div>
//                 <Divider horizontal>
//                     <Header as='h4'>
//                         <Icon name='user' />
//                         Add New Employee
//                     </Header>
//                 </Divider>
//                 <Form>
//                 <Form.Field>
//                         <label>Id </label>
//                         <input name="employeeId" value={employeeId}  onChange={this.changeHandler} />
//                     </Form.Field>
//                     <Form.Field>
//                         <label>Photo </label>
//                         <input type='file'name="photos" value={photos}  onChange={this.changeHandler} />
//                     </Form.Field>
//                     <Form.Field>
//                         <label>First Name </label>
//                         <input placeholder='First Name' name="firstName" value={firstName}  onChange={this.changeHandler} />
//                     </Form.Field>
//                     <Form.Field>
//                         <label>Last Name </label>
//                         <input placeholder='First Name' name="lastName" value={lastName}  onChange={this.changeHandler}/>
//                     </Form.Field>
//                     <Form.Field>
//                         <label>Phone </label>
//                         <input placeholder='First Name' name="phone" value={phone}  onChange={this.changeHandler}/>
//                     </Form.Field>
//                     <Form.Select
//                         fluid
//                         label='Gender'
//                         name="gender"
//                         options={GenderOptions}
//                         placeholder='Gender'
//                         value={gender}
//                         onChange={this.changeHandler}                       

//                     />
                    // <Form.Select
                    //     fluid
                    //     label='Blood Type'
                    //     name="bloodType"
                    //     options={BloodType}
                    //     placeholder='Blood Type'
                    //     value={bloodType}
                    //     onChange={this.changeHandler}
                    // />
//                     <Form.Select
//                         fluid
//                         label='Status'
//                         name="status"
//                         options={statusOptions}
//                         placeholder='Blood Type'
//                         value={status}
//                         onChange={this.changeHandler}
//                     />                 
//                     <Form.Field>
//                         <label>Hired Date </label>
//                         <input placeholder='Hired Date' name="hiredDate" value={hiredDate} onChange={this.changeHandler}/>
//                     </Form.Field>
//                     <Form.Field>
//                         <label>Family Name </label>
//                         <input placeholder='Family Name' name="familyName" value={familyName}  onChange={this.changeHandler} />
//                     </Form.Field>
//                     <Form.Field>
//                         <label>Family Number </label>
//                         <input placeholder='Family Name' name="familyNumber" value={familyNumber}  onChange={this.changeHandler} />
//                     </Form.Field>
//                     <Button onClick={this.submitHandler} value="Submit">Submit</Button>
//                 </Form>
//             </div>

//         );
//     }
// }
// export default AddEmployee;

import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Form,  Divider, Icon, Header } from "semantic-ui-react";
import axios from 'axios';
import {DateInput } from 'semantic-ui-calendar-react';

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {
                firstName: '',
                lastName: '',
                gender: '',
                photos: '',
                phone: '',
                status: '',
                familyName: '',
                familyNumber: '',
                bloodType: '',
                hiredDate: '',
                deptId: ''                
            },
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this);
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
	}

    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:4000/employee', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
    render() {
        return (
            <div>
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='user' />
                        Add New Employee
                    </Header>
                </Divider>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field>
                        <label>Photos </label>
                        <input type="file" placeholder='photos' name="photos" value={this.photos}  onChange={this.changeHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label>First Name </label>
                        <input placeholder='First Name' name="firstName" value={this.firstName}  onChange={this.changeHandler} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name </label>
                        <input placeholder='Last Name' name="lastName" value={this.lastName}  onChange={this.changeHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Phone </label>
                        <input placeholder='Phone Number' name="phone" value={this.phone}  onChange={this.changeHandler}/>
                    </Form.Field>
                    <Form.Field label='Gender' value={this.gender} control='select' name="gender" onChange={this.changeHandler}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </Form.Field>
                    <Form.Field label='Blood Type' value={this.bloodType} control='select' name="bloodType" onChange={this.changeHandler}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </Form.Field > 
                    <DateInput 
                        label='Hired Date'
                        name="hiredDate"
                        placeholder="Hired Date"
                        value={this.hiredDate}
                        iconPosition="left"
                        onChange={this.changeHandler}
                    />
                    <Form.Field label='Status' value={this.status} control='select' name="status" onChange={this.changeHandler}>
                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                    </Form.Field>
                     <Form.Field>
                       <label>Family Name</label>
                       <input placeholder='Name' name='familyName' value={this.familyName}  onChange={this.changeHandler}/>
                     </Form.Field>
                     <Form.Field>
                       <label>Family Number</label>
                       <input placeholder='Number' name='familyNumber' value={this.familyNumber}  onChange={this.changeHandler}/>
                     </Form.Field>
                     <Form.Field>
                        <label>Dept Id</label>
                        <input placeholder='Dept Id' name="deptId" value={this.deptId}  onChange={this.changeHandler}/>
                    </Form.Field>
                <input type="submit" value="Submit Data" className="btn btn-primary"/>
                </Form>
            </div>

        );
    }
}
export default AddEmployee;