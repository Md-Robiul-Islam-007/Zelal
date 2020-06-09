import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const FeaturedImage = (props) => {

    const [img, setImg] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const featuredImg = props.img
        axios.get(`http://localhost/wordpress/wp-json/wp/v2/media/${featuredImg}`)
            .then(res => {
                setImg(res.data)
                setLoading(false)
            })
    }, [props.img])
    return (

        loading ? <div className="loading-img dark-bg"><h6>loading..</h6></div> : <img src={img.source_url} />

    )
}
