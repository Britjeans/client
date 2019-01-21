import React, {Component} from "react";
import NewBlog from "../components/NewBlog";
import LoadBlog from "../components/LoadBlog";

const BlogForm = props => {
    if(props.isUpdate) {
        const blog_id = props.match.params.blog_id;
        
        return(
            <LoadBlog blog_id={blog_id} 
                 history= {props.history}/>
        );
    } else {
        return(
            <NewBlog history= {props.history}/> 
        );
    }
}

export default BlogForm;
