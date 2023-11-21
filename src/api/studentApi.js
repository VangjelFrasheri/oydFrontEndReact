import axios from "axios";
const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1";

class StudentApi {

    getStudents(){
        var studentListPath = "/students";
        return axios.get(STUDENT_API_BASE_URL+studentListPath);
    }

    addStudent(student){
        var addStudentPath="/addStudent";
        return axios.post(STUDENT_API_BASE_URL+addStudentPath, student);
    }
}

export default new StudentApi()