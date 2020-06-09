import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LeftSidebar from '../components/sidebar/left-sidebar/LeftSidebar'
import PostCard from '../components/posts/PostCard'
import RightSidebar from '../components/sidebar/right-sidebar/RightSidebar'



function HomePage() {
    return (
        <div className="body-content">
 
            <Container>
                <Row>
                    <Col xs={2} className="pl-0">
                        <LeftSidebar />
                    </Col>
                    <Col xs={6} className="p-0">
                        <PostCard />
                    </Col>
                    <Col xs={4} className="pr-0">
                    <RightSidebar />
                    </Col>

                </Row>
            </Container>

            
        </div>
    )
}

export default HomePage
