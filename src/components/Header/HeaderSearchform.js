import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function HeaderSearchform() {
    return (
            <Form inline className="mr-auto">
                <FormControl type="text" className="mr-sm-2 search-form" /> <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </Form>
    )
}
export default HeaderSearchform