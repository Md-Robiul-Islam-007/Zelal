import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBars, faAdjust } from '@fortawesome/free-solid-svg-icons'
import HeaderSearchform from './HeaderSearchform'

// Main Header 
//@Version- 1.00

function Header(props) {

    return (
            <Navbar fixed="top" className="shadow py-2 ">
                <Container>
                    <Logo />
                    <HeaderSearchform />

                    <div className="header-icon-set">
                        <FontAwesomeIcon className="ml-4" icon={faBell} />
                        <FontAwesomeIcon onClick={props.click} className="ml-4" icon={faAdjust} />
                        <FontAwesomeIcon className="ml-4" icon={faBars} />
                    </div>
                </Container>

            </Navbar>
    )
}
export default Header
