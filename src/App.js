import './App.css';
import StudentList from './components/StudentList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddStudent from './components/AddStudent';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import AddStudents from './components/AddStudents';
import CalenderEntry from './components/CalenderEntry';
import WeeklyCalander from './components/WeeklyCalander';


const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<SharedLayout/>}>
    <Route index element={<StudentList/>}/>
    <Route path='/add-student' element = {<AddStudents/>} />
    <Route path='/*' element = {<ErrorPage/>} />
    {/* <Route path='/Lessons' element = {<CalenderEntry day={'Monday'} lessonTime={'7:00 PM'}/>} /> */}
    <Route path='/Lessons' element = {<WeeklyCalander/>} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router= {myRouter}/>

    // <div>
    //   <BrowserRouter>
    //     <div className="container">
    //       <SharedLayout/>
    //       <div className="container">
    //         <Routes>
    //           <Route path='/' element = {<StudentList/>} /> 
    //           <Route path='/students' element = {<StudentList/>} />
    //           <Route path='/add-student' element = {<AddStudent/>} />
    //           <Route path='/*' element = {<ErrorPage/>} />
    //         </Routes>
            
    //       </div>
    //       <Footer/>
    //     </div>
    //   </BrowserRouter>
    // </div>

  );
}

export default App;
