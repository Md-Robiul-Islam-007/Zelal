import React from 'react'
import { Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CategoryThumbs from '../../../assets/img/posts/PostOne.png'

function SidebarRecentPostList() {
    return (
        <div>
            <div className="d-flex my-3 py-2 border-bottom">
                <Image src={CategoryThumbs} className="mr-3" width="95" height="55" />
                <div classname="sidebar-post-tile">
                    <LinkContainer to="/posts/Hello">
                    <h6><a>The Can’t-miss Sights in 20 National Parks Across the U.S</a></h6>
                    </LinkContainer>
                    <h6><a href="" >May 23, 2020</a></h6>
                </div>

            </div>
        </div>
    )
}
export default SidebarRecentPostList