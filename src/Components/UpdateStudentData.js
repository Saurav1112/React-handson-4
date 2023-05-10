import React from 'react'
import { Link } from 'react-router-dom'

export function UpdateStudentData() {
  return (
    <>
    <div>

<form className='Form-Container'>
<input type='text' placeholder='Name' className='Form-Data'/>
<input type='text' placeholder='Age' className='Form-Data'/>
<input type='text' placeholder='Course' className='Form-Data'/>
<input type='text' placeholder='Batch' className='Form-Data'/>

<div className='Submit-Data-Buttons'>
    <Link to={'/Students'}><button className='Cancel-Button'>Cancel</button></Link>
    <button className='Submit-Button'>Update</button>
</div>
</form>



    </div>
    </>
  )
}