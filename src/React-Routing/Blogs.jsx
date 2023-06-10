import React from 'react';
import { blogs } from './Data';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className="container">
            <div className='--center-all'>
                <h1>Blogs Page</h1>
                <p>Welcome To the <b>Blogs</b> page</p>
            </div>
            <article>
                {blogs.map((blog) => {
                    const { id, title, author } = blog;
                    return (
                        <div className="--card --m --p">
                            <h4>{title}</h4>
                            <p>By {author} </p>
                            <Link to={`/blog/ ${id}`} className='--color-primary'>Read More..</Link>
                        </div>
                    )
                })}
            </article>
        </div>
    )
}

export default Blogs