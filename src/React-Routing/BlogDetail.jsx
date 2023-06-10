import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogs } from './Data';
const BlogDetail = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [author, setAuthor] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const thisBlog = blogs.find((blog) => blog.id === parseInt(id))
        setTitle(thisBlog.title)
        setDetails(thisBlog.details)
        setAuthor(thisBlog.author)
    })
    return (
        <div className="container">
            <h1 className='--text-center'>{title}</h1>
            <hr />
            <p>Author: <b> {author}</b></p>
            <br />
            <p>{details}</p>
            <br />

            <Link to='/blogs' className='--color-primary --my2' >
                Back To Blogs Page
            </Link>
        </div>
    )
}

export default BlogDetail