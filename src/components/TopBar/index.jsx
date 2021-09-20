import React from 'react'
import './index.css'
import Notification from '../../assets/svgs/notification.svg'
import Email from '../../assets/svgs/email.svg'
import Settings from '../../assets/svgs/settings.svg'
import Profile from '../../assets/icons/profile.png'
import SearchIcon from '../../assets/svgs/search-icon.svg'

function TopBar() {

    const _searchInput = <div className='search-section'>
        <img src={SearchIcon} alt='search info' className='search-icon' />
        <input type="text" placeholder='search' className='top-bar-search' />

    </div>
    return (
        <div className='d-flex no-wrap justify-content-between py-lg-2 topbar-container m-auto' >
            <span >{_searchInput}</span>
            <div className='topbar-section'>
               <ul className='topbar-list-section d-flex' >
                   <li className='topbar-list'>
                   <img src={Notification} alt ='notification'  className='topbar-icon'/>
                   </li>
                   <li className='topbar-list'>
                   <img src={Email} alt ='email'  className='topbar-icon'/>
                   </li>
                   <li className='topbar-list'>
                   <img src={Settings} alt ='settings'  className='topbar-icon'/>
                   </li>
                   <li className='topbar-list'>
                   <img src={Profile} alt ='profile'  className='topbar-profile'/>
                   </li>
               </ul>
            </div>
           
        </div>
    )
}

export default TopBar
