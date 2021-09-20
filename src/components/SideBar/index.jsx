import React from 'react'
import './index.css'
import Logo from '../../assets/icons/logo.png'
import DashboardIcon from '../../assets/icons/dashboard.png'
import GigsIcon from '../../assets/icons/gigs.png'
import CompanyIcon from '../../assets/icons/company.png'
import AccountIcon from '../../assets/icons/account.png'

function SideBar({...others}) {
    return (
        <div {...others}>
          <div className='sidebar-section pl-4'>
              <div className='logo'>
               <img src ={Logo} alt ='compnay-logo' className='company-logo my-2  '/>
              </div>
              <div className='sidebarSection'>
                  <div className='sidebarMenu'> 
                  <ul className='p-0'>
                      <li className='dashboard-list my-3'>
                          <img src ={DashboardIcon} alt ='dashboard' className='dashboard-icon' />
                          Dashboard
                      </li>
                      <li className='dashboard-list my-3'>
                          <img src ={GigsIcon} alt ='gigs' className='dashboard-icon' />
                          Gigs
                      </li>
                      <li className='dashboard-list my-3'>
                          <img src ={CompanyIcon} alt ='company' className='dashboard-icon' />
                          Company
                      </li>
                      <li className='dashboard-list'>
                          <img src ={AccountIcon} alt ='accounts'  className='dashboard-icon'/>
                          Dashboard
                      </li>

                  </ul>

                  </div>
              </div>
          </div>
        </div>
    )
}

export default SideBar
