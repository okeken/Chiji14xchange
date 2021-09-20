import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './index.css'
import BriefCaseIcon from '../../assets/svgs/briefcase-icon.svg'
import GlobeIcon from '../../assets/svgs/globe-icon.svg'
import MoveIcon from '../../assets/svgs/move-icon.svg'
import PinIcon from '../../assets/svgs/pin-icon.svg'
import ColorPalette from '../../assets/svgs/color-palette-icon.svg'
import SortIcon from '../../assets/svgs/sort-icon.svg'
import { getUserAsync } from './gigSlice'
import UserTemplate from '../../components/UserTemplate'

function GigTable() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.users)

    const memoizedFunction = React.useCallback(()=> { dispatch(getUserAsync())},[dispatch])

   useEffect(() => {
  memoizedFunction()
     
   }, [memoizedFunction])
    return (
        <UserTemplate 
        loading={data?.status  ==='pending'}
        error ={data.status ==='rejected'}
        >
        <div  className='max-width-main'>
            <div className ='gig-selection'> 
            <div className='d-flex justify-content-between my-3'>
                <div className='gig-section-text gig-section-text-active pb-2'>
                    All gigs <span className='badge-warn active-badge-warn'>3404</span>
                </div>
                <div className='gig-section-text '>
                    My gigs <span className='badge-warn'>1200</span>
                </div>
                <div className='gig-section-text '>Rejected gigs <span className='badge-warn'>100</span></div>
            </div>

            <div className ='row gig-selection-btn-div'>
                <div className='col-lg-2 col-md-4 mb-sm-3 col-6 btn-list-div '>
                    <button className='custom-gig-btn'>Freelance</button>
                </div>
                <div className='col-lg-2 col-md-4 mb-sm-3 col-6 btn-list-div'>
                <button className='custom-gig-btn'>
                    <img src ={MoveIcon} alt='connect'  className='gig-select-icon mx-2'/>
                    Keywords </button>
                </div>
                <div className='col-lg-2 col-md-4 mb-sm-3 col-6 btn-list-div'>
                <button className='custom-gig-btn '>
                    <img src ={PinIcon} alt='connect'  className='gig-select-icon mx-2'/>
                    Location </button>
                </div>
                <div className='col-lg-2 col-md-4 mb-sm-3 col-6 btn-list-div'>
                <button className='custom-gig-btn '>
                    <img src ={GlobeIcon} alt='connect'  className='gig-select-icon mx-2'/>
                    Remote </button>
                </div>
                <div className='col-lg-2 col-md-4 mb-sm-3 col-6 btn-list-div'>
                <button className='custom-gig-btn  active-icon '>
                    <img src ={ColorPalette} alt='connect'  className='gig-select-icon mx-2'/>
                    Design </button>
                </div>
                <div className='col-lg-2 col-md-4 mb-sm-3 col-6 btn-list-div'>
                <button className='custom-gig-btn'>
                    <img src ={BriefCaseIcon} alt='connect'  className='gig-select-icon mx-2'/>
                    Connect</button>
                </div>
            </div>
            </div>
            <div class="table-responsive gig-table">
  <table class="table borderless gig-table-section">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Role</th>
      <th scope="col">Company</th>
      <th scope="col">Date  
      <img src ={SortIcon} alt ='sort'  className='sort-icon'/>
      </th>
      <th scope="col">Salary ($)
      <img src ={SortIcon} alt ='sort' className='sort-icon'/>
      </th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {data.data.length > 0 && data.data.map((items)=> (
          <React.Fragment key ={items.id} >
               <tr className='gig-table-row user-row'>
      <th scope="row">
          <input type ='checkbox'/>
      </th>
      <td className='user-name'>{items?.name}</td>
      <td className='user-table-details'>{items?.company?.name}</td>
      <td className='user-table-details'>{new Date().toDateString()}</td>
      <td className='user-table-details'> {items?.salary  ?? '--'}</td>
      <td>
          <button className='table-btn-delete badge-warn'>Delete</button>
      </td>
    </tr>
    
              </React.Fragment>
      ))}
   
    
  </tbody>
  </table>
</div>
        
        </div>
        </UserTemplate>
    )
}

export default GigTable
