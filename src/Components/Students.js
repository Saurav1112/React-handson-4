import React from 'react'
import { Link } from "react-router-dom";
import { Nav } from './Nav';

export function Students() {
  return (
    <>
    <Nav/>
    <div className='Student-Heading'>Students Details</div>
    <Link to={'/AddStudentData'} className='Button-Text'><button className='New-Student-Button'>Add New Student</button></Link>

    <div className='Data-Container'>
    <table>
    <tr className='Table-Head'>
        <td>Name</td>
        <td>Age</td>
        <td>Course</td>
        <td>Batch</td>
        <td>Change</td>
    </tr>
  

    <tr>
        <td>John</td>
        <td>24</td>
        <td>MERN</td>
        <td>October</td>
     <td><Link to={'/UpdateStudentData'}>Edit</Link></td>
    </tr>

    <tr>
        <td>Doe</td>
        <td>25</td>
        <td>MERN</td>
        <td>November</td>
        <td><Link to={'/UpdateStudentData'}>Edit</Link></td>
    </tr>

    <tr>
        <td>Biden</td>
        <td>26</td>
        <td>MERN</td>
        <td>October</td>
        <td><Link to={'/UpdateStudentData'}>Edit</Link></td>
    </tr>

    <tr>
        <td>Barar</td>
        <td>22</td>
        <td>MERN</td>
        <td>September</td>
        <td><Link to={'/UpdateStudentData'}>Edit</Link></td>
    </tr>

    <tr>
        <td>Christ</td>
        <td>23</td>
        <td>MERN</td>
        <td>October</td>
        <td><Link to={'/UpdateStudentData'}>Edit</Link></td>
    </tr>

    <tr>
        <td>Elent</td>
        <td>24</td>
        <td>MERN</td>
        <td>November</td>
        <td><Link to={'/UpdateStudentData'}>Edit</Link></td>
    </tr>

    </table>
    </div>
    </>
  )
}