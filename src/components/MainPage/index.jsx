import React from 'react'
import { Route } from "react-router-dom";
import './index.css'
import TopBar from '../TopBar'
import AddGig from '../AddGig'
import GigTable from '../../features/Gigs/index'
import AddNewGig from '../../components/AddNewGig'
import AddUser from '../../components/AddUser'
import Footer from '../Footer';

function MainPage({ ...others}) {
    return (
        <div {...others} >
          
          <TopBar />
          <AddGig />
      <Route exact path="/" component={GigTable} />
      <Route path="/add-gig" component={AddNewGig} />
      <Route path="/add-user" component={AddUser} />
      <Footer />
        </div>
    )
}

export default MainPage
