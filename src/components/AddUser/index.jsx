import React from 'react'
import MultiSelect from '../MultiSelect'
import './index.css'

function index() {
    return (
        <div className='container '>

<span className='gig-intro'> New gig  </span>
            <div className ='row add-new-gig-container mt-3'>
                <div className='col-lg-2 gig-add-details-control mx-lg-4 '>
                     <ul>
                         <li className ='active'>
                         Basic Data
                         </li>
                         <li >
                         Renumeration
                         </li>
                     </ul>
                </div>

        <div className='col-lg-6 gig-details mx-lg-4 p-lg-4'>
        <form>
  <div className ="row mb-3">
    <div className ="col-lg-6 mt-2">
    <label for="exampleFormControlInput1" className ="form-label">Role</label>
      <input type="text" className ="form-control" placeholder="minmum" />
    </div>
    <div className ="col-lg-6  mt-2">
    <label for="exampleFormControlInput1" className ="form-label">Company</label>
      <input type="text" className ="form-control" placeholder="maximum" />
    </div>
  </div>
        Location
  <div className ="row mb-2">
    <div className ="col-lg-6 mt-2">
    <select className ="selects" aria-label="Default select example">
  <option selected>Country</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div className ="col-lg-6 mt-2">
    <select className =" selects" aria-label="Default select example">
  <option selected>State/Region</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
  </div>

<div className='my-4'> 
Add tags
<MultiSelect />
</div>
<div className='d-flex suggested-tags'>
    Suggested tags: 
    <ul className='d-flex'>
        <li>full time</li>
        <li>contract </li>
        <li>part time</li>
    </ul>
    </div>
  <div className='d-flex justify-content-end'>
      <button type='button' className='back-btn mx-2'>Cancel</button>
      <button  type ='button' className='btn-gig'>Continue 
        </button>
  </div>
</form>

        </div>
            
            </div>
        </div>
    )
}

export default index
