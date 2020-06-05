import React from 'react'
import SidebarRecentPostList from './SidebarRecentPostList'
import SidebarCategoryList from './SidebarCategoryList'

function RightSidebar() {
    return (
        <>
            <div className="dark-bg p-4 shadow-sm">
                <div className="sidebar-title">
                    <span className="sidebar-title-bg position-relative text-white">Recent Post</span>
                </div>

                <SidebarRecentPostList />
                <SidebarRecentPostList />
                <SidebarRecentPostList />
                <SidebarRecentPostList />
                <SidebarRecentPostList />

            </div>

            <div className="dark-bg shadow p-4 mt-3">
                <div className="sidebar-title text-white">
                    <span className="sidebar-title-bg position-relative">Categories</span>
                </div>

                <SidebarCategoryList />
                <SidebarCategoryList />
                <SidebarCategoryList />
                <SidebarCategoryList />
                <SidebarCategoryList />
            </div>
        </>

    )
}
export default RightSidebar