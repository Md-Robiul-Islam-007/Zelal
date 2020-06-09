import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import User from './User'
import { Card, Image } from 'react-bootstrap'
import { CatButton } from '../Header/globalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons'

import AuthorImg from '../../assets/img/author.png'
import { FeaturedImage } from './FeaturedImage'



const PostCard = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('http://localhost/wordpress/wp-json/wp/v2/posts')
            .then(res => {
                setPost(res.data)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <>
            {
                post.map(postitem => {
                    return (
                        <div className="post-card mb-4 shadow-sm" key={postitem.id}>
                            <Card className="dark-bg">

                                <FeaturedImage img={postitem.featured_media} />

                                <Card.Body>
                                    <div className="post-author d-flex">
                                        <div className=" mr-3 my-auto">
                                            <Image src={AuthorImg} roundedCircle width="30" height="30" />
                                        </div>
                                        <div className="author-username">
                                            <p className="mb-0 author-name"> <User author={postitem.author} /> </p>
                                            <p className="mb-0 post-date">May 29 (3 Hours ago)</p>
                                        </div>
                                    </div>
                                    <Card.Title className="post-title">
                                        <Link to={`posts/${postitem.slug}`}>
                                            <h2 >{postitem.title.rendered}</h2>
                                        </Link>
                                  
                                       
                                    </Card.Title>
                                    <div className="ml-5">
                                        <CatButton>firstyearcode</CatButton>
                                        <CatButton>react</CatButton>
                                        <CatButton>javascript</CatButton>

                                    </div>
                                    <div className="d-flex ml-5 mt-2">
                                        <div className="mr-4">
                                            <a href="#/ "><FontAwesomeIcon icon={faHeart} className="mr-2" /> 5 reaction</a>
                                        </div>
                                        <div>
                                            <a href="#/"><FontAwesomeIcon icon={faComments} className="mr-2" /> Add comment</a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </>
    )
}
export default PostCard
