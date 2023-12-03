import React, { Component } from 'react';
import studentApi from '../api/studentApi';
import {Link} from 'react-router-dom';
import StudentTable from './StudentTable';


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
                <StudentTable studentList= {this.state.students}/>
            </div>
        );
    }
}

export default StudentList;