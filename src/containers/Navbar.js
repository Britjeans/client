import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/auth"
class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light  bg-light">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Wanying</Link>
                </div>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/discover" className="nav-link"> Discover</Link>
                    </li>
                </ul>
                {this.props.currentUser.isAuthenticated ? (
                    <ul className="navbar-nav mr-4">
                        <li className="nav-item">
                            <Link to={`/users/${this.props.currentUser.user.id}/blogs/new`} className="nav-link">
                                New Blog 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" onClick={this.logout} className="nav-link">Log out</a>
                        </li>
                    </ul> 
                ) :(
                <ul className="navbar-nav mr-4">
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link">Log in</Link>
                    </li>
                </ul>
                )}
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}


export default connect(mapStateToProps, {logout})(Navbar);
