import React from 'react'
import { Nav } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBlog, faPlayCircle, faIdBadge, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'




function LeftSidebar() {
    return (
      
            <Nav className="flex-column dark-bg p-3 pb-5 shadow-sm">
                <LinkContainer to="/">
                    <Nav.Link className="left-menu-item my-1"> <FontAwesomeIcon icon={faHome} className="mr-2" /> Home </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/blog">
                    <Nav.Link className="left-menu-item my-1"> <FontAwesomeIcon icon={faBlog} className="mr-2" /> Blog </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/videos">
                    <Nav.Link className="left-menu-item my-1"> <FontAwesomeIcon icon={faPlayCircle} className="mr-2" /> Videos </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contact">
                    <Nav.Link className="left-menu-item my-1"> <FontAwesomeIcon icon={faIdBadge} className="mr-2" /> Contact </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/more">
                    <Nav.Link className="left-menu-item my-1"> <FontAwesomeIcon icon={faCaretSquareDown} className="mr-2" /> More </Nav.Link>
                </LinkContainer>
            </Nav>
    )
}

export default LeftSidebar
