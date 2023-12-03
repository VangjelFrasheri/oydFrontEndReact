import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import studentApi from '../api/studentApi';

const AddStudents = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const changeFirstNameHandler = (event) => {
        let firstName = event.target.value
        setFirstName(firstName);
    }

    const changeLastNameHandler = (event) => {
        let lastName = event.target.value
        setLastName (lastName);
    }

    const changeEmailHandler = (event) => {
        let email = event.target.value
        setEmail(email);
    }

    const changePhoneHandler = (event) => {
        setPhone(event.target.value);
    }

    const saveStudent =(e) =>{
        e.preventDefault();
        let Student = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            belt: "WB",
            isActive: true
        }
        console.log('The added student is ' + JSON.stringify(Student));
        studentApi.addStudent(Student).then(res =>{
            navigate("/");
        });
    }

    const cancel = () => {
        navigate("/");
    }

    return(
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
                                value ={firstName} onChange={changeFirstNameHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <input placeholder="Last Name" name = "lastName" className="form-control"
                                value ={lastName} onChange={changeLastNameHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Email Address:</label>
                                <input placeholder="Email" name = "email" className="form-control"
                                value ={email} onChange={changeEmailHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input placeholder="Phone" name = "phone" className="form-control"
                                value ={phone} onChange={changePhoneHandler}/>
                            </div>

                            <button className="btn" onClick={saveStudent} style={{marginTop: "10px", backgroundColor:"#ebeb14", color:"white"}}>Add Student</button>
                            <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px", marginTop: "10px"}}>Cancel</button>
                            {/* <Link to="/" className="btn btn-danger" style={{marginLeft: "10px", marginTop: "10px"}}> Cancel</Link> */}
                        </form>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
    );
}

export default AddStudents;