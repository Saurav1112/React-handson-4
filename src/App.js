import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { ContactUs } from './Components/ContactUs';
import { Home } from './Components/Home';
import { Students } from './Components/Students';
import { Error } from "./Components/Error";
import { AddStudentData } from './Components/AddStudentData';
import { UpdateStudentData } from './Components/UpdateStudentData';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/AddStudentData' element={<AddStudentData/>}/>
        <Route path='/UpdateStudentData' element={<UpdateStudentData/>}/>
        <Route path='/' element ={<Home/>}/>
        <Route path='/Students' element ={<Students/>}/>
        <Route path='/ContactUS' element ={<ContactUs/>}/>
        <Route path='/*' element={<Error/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
