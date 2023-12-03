import React, { Component } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import studentApi from '../api/studentApi';

class AddStudent extends Component {

    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone:"",
            addStudentComplet: false,
            cancelForm: false
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePhoneHandler = (event) => {
        this.setState({phone: event.target.value});
    }

    saveStudent =(e) =>{
        e.preventDefault();
        let Student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            belt: "WB",
            isActive: true
        }
        console.log('The added student is ' + JSON.stringify(Student));
        studentApi.addStudent(Student).then(res =>{
            <link to="/"></link>
        });
    }

    cancel = () => {
        this.setState({cancelForm: true});
    }

    

    render() {
        
        return (
            <div>
                
                <div className="container" style={{marginTop: "50px"}}>
                    <div className='row'>
                        <div className="card col-md-6 offset-md-3 offest-md-3">
                            <h1 className="text-center">Add New Student</h1>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name = "firstName" className="form-control"
                                        value ={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name = "lastName" className="form-control"
                                        value ={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address:</label>
                                        <input placeholder="Email" name = "email" className="form-control"
                                        value ={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number:</label>
                                        <input placeholder="Phone" name = "phone" className="form-control"
                                        value ={this.state.phone} onChange={this.changePhoneHandler}/>
                                    </div>

                                    <button className="btn" onClick={this.saveStudent} style={{marginTop: "10px", backgroundColor:"#ebeb14", color:"white"}}>Add Student</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px", marginTop: "10px"}}>Cancel</button>
                                    {/* <Link to="/" className="btn btn-danger" style={{marginLeft: "10px", marginTop: "10px"}}> Cancel</Link> */}
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default AddStudent;