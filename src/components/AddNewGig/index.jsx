import React from 'react'
import './index.css'

function index() {
    return (
        <div className='container '>
            <span className='gig-intro'> New gig  </span>
            <div className ='row add-new-gig-container mt-3'>
                <div className='col-lg-2 col-6 gig-add-details-control mx-lg-4 my-2'>
                     <ul>
                         <li>
                         Basic Data
                         </li>
                         <li className ='active'>
                         Renumeration
                         </li>
                     </ul>
                </div>

        <div className='col-lg-6 gig-details mx-lg-4 p-lg-4'>
           Salary
        <form>
  <div class="row form-row">
    <div class="col-lg-6 mt-2">
      <input type="text" class="form-control" placeholder="minmum" />
    </div>
    <div class="col-lg-6  mt-2">
      <input type="text" class="form-control" placeholder="maximum" />
    </div>
  </div>

  <div className='d-flex justify-content-end'>
      <button type='button' className='back-btn mx-2'>Back</button>
      <button  type ='button' className='btn-gig'>Add gig 
        </button>
  </div>
</form>

        </div>
            
            </div>
        </div>
    )
}

export default index
