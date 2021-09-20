import React from 'react'
import './index.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
        <ul className ='paginate-main'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-gig">Add Gig</Link></li>
        <li><Link to="/add-user">Add User</Link></li>
      </ul>
      </footer>
        
    )
}

export default React.memo(Footer)
