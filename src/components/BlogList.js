import React from 'react';

const BlogList = (props) => {
    const myBlogs = props.blogs;
    const title = props.title;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {myBlogs.map((blog)=>(
                <div className="preview" key={blog.id}>
                     <h3>{blog.title}</h3>
                     <p>Done by {blog.author}</p>
                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;