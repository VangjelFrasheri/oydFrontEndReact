import './App.css';
import StudentList from './components/StudentList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddStudent from './components/AddStudent';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import SharedLayout from './components/SharedLayout';

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<SharedLayout/>}>
    <Route index element={<StudentList/>}/>
    <Route path='/add-student' element = {<AddStudent/>} />
    <Route path='/*' element = {<ErrorPage/>} />
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
