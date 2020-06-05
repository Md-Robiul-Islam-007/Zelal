import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LeftSidebar from '../components/sidebar/left-sidebar/LeftSidebar'


export default function BlogPage() {
    return (
        <div className="body-content">
 
            <Container>
                <Row>
                    <Col xs={2} className="pl-0">
                        <LeftSidebar />
                    </Col>
                    <Col xs={8} className="px-0 bg-danger">
                       <h1>This is Test</h1>
                    </Col>
                    <Col xs={2} className="pr-0">
                    <div className="bg-primary"><h2>I am right sidebar</h2></div>
                    </Col>

                </Row>
            </Container>

            
        </div>
    )
}
