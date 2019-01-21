import React, { Component } from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import BlogForm from "../containers/BlogForm"
import DiscoverPage from "../components/DiscoverPage"
import BlogPage from "../components/BlogPage"
import AuthPage from "../containers/AuthPage"

const Main = props => {
    const {authUser, errors, removeError, currentUser} = props;
    return(
        <div className="main-content"> 
            <div className="container">
                <Switch>
                    <Route exact path="/" render={props => 
                        <Homepage currentUser={currentUser} {...props} />} />
                    <Route exact path="/signin" render={props => {
                        return(
                            <AuthForm 
                                removeError={removeError}
                                errors={errors} 
                                onAuth={authUser} 
                                buttonText="Log in" 
                                heading="Welcome Back" 
                                {...props} 
                            />
                        )
                    }
                    } />
                    <Route exact path="/signup" render={props => {
                        return(
                            <AuthForm 
                                removeError={removeError}
                                errors={errors} 
                                onAuth={authUser} 
                                signUp 
                                buttonText="Register" 
                                heading="Join Us Today" 
                                {...props} 
                            />
                        )
                    }
                    } />

                    <Route exact path="/discover" render={props => {
                        return(
                            <DiscoverPage 
                                currentUser={currentUser} {...props}
                            />
                        );
                    }}
                    />
                    <Route exact path="/blogs/:blog_id" render={props => <BlogPage {...props}/>} />
                    <Route exact path="/users/:id/blogs" render={props => <AuthPage currentUser={currentUser} {...props} />}/>
                    <Route path="/users/:id/blogs/new" component={withAuth(BlogForm)} />
                    <Route path="/users/:id/blogs/:blog_id" render={props => 
                        {
                            let WrappedComponent = withAuth(BlogForm);
                            return(
                                <WrappedComponent isUpdate {...props} />
                            );
                        }
                    } />
                </Switch>
            </div>
        </div>

    );
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(connect(mapStateToProps,{authUser, removeError})(Main)); 