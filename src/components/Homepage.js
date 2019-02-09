import React from "react"
import { Link } from "react-router-dom";

const Homepage = ({currentUser}) => {
    return (
			<div className="home-page">
				<div className="welcome-page">
					<h1>Simple Blog For You</h1>
					{currentUser.isAuthenticated && 
						<Link to="/discover" className="btn btn-lg btn-primary">Start Your Own Blog</Link>}
					{!currentUser.isAuthenticated &&
						<Link to="/signup" className="btn btn-lg btn-primary">Start Your Own Blog</Link>}    
				
				</div>

				<div class = "brief-intro">
					<h1>Simple and Easy Recorder and Organizer for Your Life</h1>
					<p>With our website, you can publish your blogs, write secret dairies and make plans of your life on a daily basis. This website is designed to make your life better!</p>
				</div>

				<div className="website-features">
				<div className="row">
					<div className="col-sm">
						<i className="far fa-newspaper"></i>
						<h2>Start your blog</h2>
						<p>Sed laoreet finibus nunc sit amet sollicitudin. Mauris eros diam, aliquet nec leo a, pretium tempor purus. Proin euismod sodales mauris, et cursus metus convallis quis. Cras nec dapibus tortor.</p>
					</div>
					<div className="col-sm">
						<i className="far fa-clock"></i>
						<h2>Make your plan</h2>
						<p> Etiam lacus neque, congue ac neque eu, congue tincidunt ipsum. Vivamus blandit dignissim erat, ut euismod felis finibus et.</p>
					</div>
					<div className="col-sm">
						<i className="fas fa-user-friends"></i>
						<h2>Make some friends</h2>
						<p>  Cras dictum sagittis tortor, ac pulvinar turpis fermentum non. Sed dapibus consectetur massa, viverra consequat nisl congue at.</p>
					</div>
				</div>
				</div>
				<div className="contact-info">
				<p><b>Contact Me</b></p>
				<p>linkedin:
					<a href="https://linkedin.com/in/wanying-ding-984748151" >
						linkedin.com/in/wanying-ding-984748151
					</a>
				</p>
				<p>github:
					<a href="https://github.com/Britjeans">
						https://github.com/Britjeans
					</a> 
				</p>
			</div>

			</div>


    );
}


export default Homepage;