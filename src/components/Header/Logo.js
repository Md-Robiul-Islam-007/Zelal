import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Logo() {
    return (
        
            <Link to="/">
                <Navbar.Brand className="logo">Refly</Navbar.Brand>
            </Link>
     
    )
}
export default Logo