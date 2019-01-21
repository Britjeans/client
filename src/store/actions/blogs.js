import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_BLOGS, REMOVE_BLOGS, GET_BLOG} from "../actionTypes";

export const loadBlogs = blogs => ({
    type: LOAD_BLOGS,
    blogs
});

export const remove = id => ({
    type: REMOVE_BLOGS,
    id
});

export const getBlog = blog => ({
    type: GET_BLOG,
    blog
});


export const getAuthorBlogs = (user_id) => {
    return dispatch => {
        return apiCall("get", `/api/users/${user_id}/blogs`).then(res =>
            dispatch(loadBlogs(res))).catch(err => addError(err.message));
    }
}

export const removeBlog = (user_id, blog_id) => {
    return dispatch => {
        return apiCall("delete", `/api/users/${user_id}/blogs/${blog_id}`
        ).then(() => dispatch(remove(blog_id))).catch(err => addError(err.message));
    }
}

export const fetchBlogs = () => {
    return dispatch => {
        return apiCall("get", "/api/blogs").then(res =>
            dispatch(loadBlogs(res))).catch(err => addError(err.message)
        );
    };
};

export const getBlogDetail = (blog_id) => {
    return dispatch => {
        return apiCall("get", `/api/blogs/${blog_id}`).then(res => dispatch(getBlog(res)
        )).catch(err => addError(err.message));
    }
}

export const postNewBlog = ({title, content}) => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall("post", `/api/users/${id}/blogs`, {title, content} ).then(res => {}).catch( err => addError(err.message));
};

export const updateBlog = ({blog_id, title, content}) => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    console.log(id);
    console.log(blog_id);
    return apiCall("put", `/api/users/${id}/blogs/${blog_id}`, {title, content} ).then(res => {}).catch( err => addError(err.message));
};

