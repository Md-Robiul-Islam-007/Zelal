import React from 'react'
import { Link } from 'react-router-dom'



function PostTitle(props) {

  return (
    <Link to="/posts/post-5-venturing-into-front-end-land">
      {props.title.rendered}
    </Link>
  )
}

export default PostTitle
