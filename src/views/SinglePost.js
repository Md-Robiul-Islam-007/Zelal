import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import LeftSidebar from '../components/sidebar/left-sidebar/LeftSidebar'




const SinglePost = () => {

    const [singlepost, setSingePost] = useState({

        title: {
            rendered: ''
        },
        content: {
            rendered: ''
        }
    })

    useEffect(() => {

        axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/20`)
            .then(res => {
                setSingePost(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="body-content">

            <Container>
                <Row>
                    <Col xs={2} className="pl-0">
                        <LeftSidebar />
                    </Col>
                    <Col xs={6} className="p-0">
                        <h2> {singlepost.title.rendered}</h2>
                        <div>
                        {singlepost.content.rendered}
                        </div>

                    </Col>
                    <Col xs={2} className="pl-0">
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default SinglePost