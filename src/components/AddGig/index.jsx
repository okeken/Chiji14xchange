import React from 'react'
import './index.css'

function index() {
    return ( 
        <div className='gigs-section py-3 max-width-main'>
        <div className='d-flex justify-content-between'>
        <div className =''>
          <span className='gig-text'>Gigs</span>
        </div>
        <div className ='gig-btn-positioning' >
            <button className='btn-gig'>New gig 
        <span className='plus'> +  </span>
        </button>
        </div>        
      </div>
      </div>
    )
}

export default index
