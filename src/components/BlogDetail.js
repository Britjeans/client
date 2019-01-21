import React from "react";
import Moment from "react-moment";
import DefaultProfileImg from "../images/default-profile-image.png";
import { Link } from "react-router-dom"

const BlogDeatil = ({date, profileImageUrl, title, username, content, user_id}) => {
    
    return (
        <div className="blog-detail">
            <div className="blog-detail-title">
                <h1>{title}</h1>
            </div>
            <div className="author-info">
                <img src={profileImageUrl||DefaultProfileImg} alt="username" height="50" width="50" />
                <div className="author-detail-info">
                    <Link to={`/users/${user_id}/blogs`}><h5>{username}</h5></Link>
                    <span className="text-muted">
                        <Moment className="text-muted" format="YYYY-MM-DD">
                            {date}
                        </Moment>
                    </span>
                </div>
            </div>

            <div className="blog-detail-content">
                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        </div>
    )
}
export default BlogDeatil;