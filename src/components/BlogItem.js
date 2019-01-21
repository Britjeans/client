import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const BlogItem = ({blog_id, date, title, username, content, removeBlog, isCorrectUser, user_id}) => (
    <div className="blog-item">
        <div className="blog-title">
            <Link to={`/blogs/${blog_id}`}>
                <h3>{title}</h3>
            </Link>
        </div>
        <div className="author-area">
             <Link to={`/users/${user_id}/blogs`}><h5>{username}</h5></Link>
            <span className="text-muted">
                <Moment className="text-muted" format="YYYY-MM-DD">
                    {date}
                </Moment>
            </span>
        </div>
        
        <div className="blog-content">{
            content.replace(/<[^>]+>/g, '').length <= 100 ? content.replace(/<[^>]+>/g, '') : content.replace(/<[^>]+>/g, '').substring(0,100)} ..</div>
        {isCorrectUser &&(
            <div className="edit-area">
                <a href="#" className="remove-blog" onClick={removeBlog}>Delete</a>
                <Link to={`/users/${user_id}}/blogs/${blog_id}`} className="update-blog">
                    Update
                </Link>
            </div>
        )}
    </div>
);
export default BlogItem;