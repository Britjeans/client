import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchBlogs, removeBlog, getAuthorBlogs } from "../store/actions/blogs";
import BlogItem from "../components/BlogItem";

class BlogList extends Component {
    componentDidMount() {
        if(this.props.author) {
            this.props.getAuthorBlogs(this.props.u_id);
        } else {
            this.props.fetchBlogs();
        }
    }

    render() {
        const {blogs, removeBlog, currentUser} = this.props;
        let blogList = blogs.map(b => (
            <BlogItem key={b._id} blog_id={b._id} date={b.createAt} 
                title={b.title} 
                user_id={b.user._id}
                username={b.user.username}
                content={b.content} 
                removeBlog={removeBlog.bind(this, b.user._id, b._id)}
                isCorrectUser={currentUser === b.user._id}
            />
        ));
        return blogList;

    }

}

function mapStateToProps(state) {
    return {
        blogs: state.blogs,
        currentUser: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, {fetchBlogs, removeBlog, getAuthorBlogs})(BlogList);