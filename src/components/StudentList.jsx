import React, { Component } from 'react';
import studentApi from '../api/studentApi';
import {Link} from 'react-router-dom';
import { Checkmark } from 'react-checkmark'
import { XCircleFill} from 'react-bootstrap-icons';


class StudentList extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            students: []
        }

    }


    componentDidMount(){
        studentApi.getStudents().then((res) => {
            this.setState({students: res.data});
        });
    }


    render() {
        return (
            <div style={{marginTop: "50px"}}>   
                <h2 className="text-center"> Student List</h2>
                <div className='row'>
                    <Link to="/add-Student" className="btn" style={{marginTop: "10px", backgroundColor:"#ebeb14", color:"white"}}> Add New Student</Link>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Belt Rank</th>
                                <th>Active</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key={student.id}>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td>{student.email}</td>
                                            <td>{student.phone}</td>
                                            <td>{student.belt}</td>
                                            <td>{student.isActive ? <Checkmark size="medium" color='#ebeb14'/> : <div className='container' ><XCircleFill style={{display: "inline-block", width: "100%", height: "24px"}}/></div>}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        
                    </table>

                </div>
            </div>
        );
    }
}

export default StudentList;