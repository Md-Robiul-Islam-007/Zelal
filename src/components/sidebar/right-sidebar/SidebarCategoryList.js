import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function SidebarCategoryList() {
    return (
        <div>
            <h6 className="my-2 py-3 border-bottom text-white"><a href=""><FontAwesomeIcon icon={faChevronRight} /> Categories Name</a> </h6>
        </div>
    )
}
export default SidebarCategoryList