import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import LeftSidebar from '../components/sidebar/left-sidebar/LeftSidebar'

const SinglePost =  ({match}) => {
    console.log(match)
    return (
        <div className="body-content">
 
            <Container>
                <Row>
                    <Col xs={2} className="pl-0">
                        <LeftSidebar />
                    </Col>
                    <Col xs={6} className="p-0">
                    <h1>Hello I am blog single page {match.params.postId} </h1>
                    </Col>
                    <Col xs={2} className="pl-0">
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default SinglePost