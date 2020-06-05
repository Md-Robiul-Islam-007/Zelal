import React from 'react'
import { Card, Image } from 'react-bootstrap'
import  { CatButton }  from '../Header/globalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons'
import postOne from '../../assets/img/posts/PostOne.png'
import AuthorImg from '../../assets/img/author.png'


function PostCard() {
    
    return (
        <div className="post-card mb-4 shadow-sm">
            <Card className="dark-bg">
                <Card.Img variant="top" src={postOne} height="250" width="auto" />
                <Card.Body>
                    <div className="post-author d-flex">
                        <div className=" mr-3 my-auto">
                            <Image src={AuthorImg} roundedCircle width="30" height="30" />
                        </div>
                        <div className="author-username">
                            <p className="mb-0 author-name">Joe Doe</p>
                            <p className="mb-0 post-date">May 29 (3 Hours ago)</p>
                        </div>
                    </div>
                    <Card.Title className="post-title"><a href="">Venturing into front-end land </a> </Card.Title>
                    <div className=" ml-5">
                        <CatButton>firstyearcode</CatButton>
                        <CatButton>react</CatButton>
                        <CatButton>javascript</CatButton>
 
                    </div>
                    <div className="d-flex ml-5 mt-2">
                        <div className="mr-4">
                            <a href=""><FontAwesomeIcon icon={faHeart} className="mr-2" /> 5 reaction</a>
                        </div>
                        <div>
                            <a href=""><FontAwesomeIcon icon={faComments} className="mr-2" /> Add comment</a>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default PostCard
