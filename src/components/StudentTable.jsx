import { Checkmark } from 'react-checkmark'
import { XCircleFill} from 'react-bootstrap-icons';


const StudentTable  = (props) => {

    const students = props.studentList;

    return(
        <div>
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
                                students.map(
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

export default StudentTable;