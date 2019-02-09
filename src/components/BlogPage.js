import React, {Component} from "react";
import { connect } from "react-redux";
import { getBlogDetail } from "../store/actions/blogs";
import BlogDetail from "./BlogDetail";
class BlogPage extends Component {
    componentDidMount() {
        this.props.getBlogDetail(this.props.match.params.blog_id);
    }
//date, profileImageUrl, title, username, content
    render() {
        const {blogs} = this.props;
        let blogList = blogs.map(b => (
            <BlogDetail
                key={b._id} 
                title={b.title} 
                user_id={b.user._id}
                username={b.user.username}
                profileImageUrl={b.user.profileImageUrl}
                content={b.content} 
            />
        ));


        return (
            <div className="row">
                <div className="col-lg-2">
                </div>

                <div className="col-lg-8">
                    {blogList}
                </div>
                <div className="col-lg-2">
                </div>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs,
    }
}



export default connect(mapStateToProps, {getBlogDetail})(BlogPage);