import React, {Component} from "react";
import { connect } from "react-redux";
import { getBlogDetail } from "../store/actions/blogs";
import EditBlog from "./EditBlog";
class LoadBlog extends Component {
    componentDidMount() {
        this.props.getBlogDetail(this.props.blog_id);
    }
//date, profileImageUrl, title, username, content
    render() {
        const {blogs} = this.props;
        let blogList = blogs.map(b => (
            <EditBlog
                key={b._id} 
                title={b.title} 
                user_id={b.user._id}
                username={b.user.username}
                profileImageUrl={b.user.profileImageUrl}
                content={b.content} 
                blog_id={b._id}
                history={this.props.history}
            />
        ));


        return (
            <div className="row"> 
                <div className="col-md-0 col-lg-2"></div>
                <div className="col-md-12 col-lg-8">{blogList}</div>
                <div className="col-md-0 col-lg-2"></div>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs,
    }
}



export default connect(mapStateToProps, {getBlogDetail})(LoadBlog);