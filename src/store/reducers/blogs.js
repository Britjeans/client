import {LOAD_BLOGS, REMOVE_BLOGS, GET_BLOG, LOAD_AUTHOR_BLOGS} from "../actionTypes"


const blogs = (state = [], action) => {
    switch(action.type) {
        case LOAD_BLOGS:
            return [...action.blogs];
        case REMOVE_BLOGS:
            return state.filter(blog => blog._id !== action.id);
        case GET_BLOG:
            return [action.blog];
        default:
            return state;
    }
}
export default blogs;