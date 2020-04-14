import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Form,  Divider, Icon, Header, Loader, Button } from "semantic-ui-react";
import axios from 'axios';


class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
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
                status: '',
                deptId: ''                
            },
        }
    }
    
    changeHandler = (e) => {
        let newEmployee = {...this.state.employee}
        newEmployee[e.target.name]= e.target.value
        this.setState({ 
            employee: newEmployee 
        },()=>console.log(this.state.employee))
    }

    submitHandler = e => {
        e.preventDefault()
        this.setState({
            isLoading:true
        }); 
		axios
			.post('http://192.168.43.122:4000/employee', this.state.employee)
            .then(res=> {
                if(res.status === 200){
                    window.location.reload()
                }else{
                    this.setState({
                        noData: true
                    })
                }
            })
			
            setTimeout(()=>{
                this.setState({isLoading:false})
            }, 2000)
    }    
    render() {
        const {isLoading} = this.state
        return (
            
            <div>
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='user' />
                        Add New Employee
                    </Header>
                </Divider>
                <Form >
                    <Form.Field>
                        <label>Photos </label>
                        <input type="file" placeholder='photos' name="photos" value={this.photos}  onChange={this.changeHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label>First Name </label>
                        <input placeholder='First Name' name="firstName" value={this.firstName}  onChange={this.changeHandler} required />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name </label>
                        <input placeholder='Last Name' name="lastName" value={this.lastName}  onChange={this.changeHandler} required/>
                    </Form.Field>
                    <Form.Field>
                        <label>Phone </label>
                        <input placeholder='Phone Number'  name="phone" value={this.phone}  onChange={this.changeHandler} type="number" inputMode="numeric" required/>
                    </Form.Field>
                    <Form.Field label='Gender' value={this.gender} control='select' name="gender" onChange={this.changeHandler} required>
                        <option value=""> </option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </Form.Field>
                    <Form.Field label='Blood Type' value={this.bloodType} control='select' name="bloodType" onChange={this.changeHandler} required>
                        <option value=""> </option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </Form.Field > 
                    <Form.Field>
                        <label>Hired Date</label>
                        <input name="hiredDate" placeholder="Hired Date" value={this.hiredDate} onChange={this.changeHandler} data-parser='date' required/>
                    </Form.Field> 
                    <Form.Field label='Status' value={this.status} control='select' name="status" onChange={this.changeHandler} required>
                        <option value=""> </option>
                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                    </Form.Field>
                     <Form.Field>
                       <label>Family Name</label>
                       <input placeholder='Name' name='familyName' value={this.familyName}  onChange={this.changeHandler} required/>
                     </Form.Field>
                     <Form.Field>
                       <label>Family Number</label>
                       <input placeholder='Number' name='familyNumber' value={this.familyNumber}  onChange={this.changeHandler} type="number" inputMode="numeric" required/>
                     </Form.Field>
                     <Form.Field label="Department" placeholder='Deptartment' control="select" name="deptId" value={this.deptId}  onChange={this.changeHandler} required>
                     <option value=""> </option>
                     <option value="1">Staff Operation</option>
                     <option value="2">Planner</option>
                     <option value="4">Human Resource</option>
                     <option value="5">IT </option>
                     
                    </Form.Field>
                    {/* <input type="submit" value="Add Employee" className="btn btn-primary" disabled={isLoading}/> */}
                    
                    <Button onClick={this.submitHandler} disabled={isLoading}>Add Employee</Button>
                    {isLoading && <Loader active inline='centered' /> }
                    
                
                </Form>
            </div>

        );
    }
}
export default AddEmployee;