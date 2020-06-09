import React, { useState, useEffect} from 'react'
import axios from 'axios'


function User(props) {

    const [author, setAuthor] = useState([])

    useEffect(() => {
        const author = props.author
        axios.get(`http://localhost/wordpress/wp-json/wp/v2/users/${author}`)

            .then(res => {
                setAuthor(res.data)
            })
            .catch(err => console.log(err))
    }, [props.author])

    return (
         <a href="#/ "> {author.name} </a>  
    )
}
export default User
