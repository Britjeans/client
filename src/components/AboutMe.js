import React, {Component} from "react"

class AboutMe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="aboutme">
                <div className="front-pic" >
                    <div className="description">
                        <div className="self-intro">
                            <div className="greeting">Welcome to my space, I am</div> 
                            <div className="my-name">~Wanying Ding~</div>
                        </div>
                    </div>
                </div>

                <div classNam="projects">
                        <div className="project">
                            <h2>Dynamic Blog Website </h2>
                            <p>
                                Developed dynamic and interactive website using Node.js and MongoDB as the back-end, implemented the front-end with React.js and introduced Bootstrap features to the UI. 
                                Implemented features include registration, creating and updating blogs and deployed the website on AWS.

                            </p>
                        </div>
                        <div className="project">
                            <h2>Chinese Painting Rendering</h2>
                            <p>
                            Implemented a Non-Photorealistic Rendering system by Unity Shader, which can apply Chinese ink-water
                            painting style to 3D meshes in real time and obtain beautiful 2D visual effects.
                            Designed work flow includes interior shading, silhouette shading, texture blending and background modeling.
                            </p>
                        </div>
                        <div className="project">
                            <h2>Data Visualization for TV programs</h2>
                            <p>
                                Implemented categorical search function by Javascript, HTML and PHP. Searching results were obtained by sending multiple requests to SQL database, and the programs were classified by Channels, genres and date.
                                Visualized TV ratings and other assessment indicators using a Javascript charting library ECharts. 
                            </p>
                        </div>
                </div>
                <div className="contact-link">
                    I'm Currently Looking for Summer Internship, Feel Free to Contact Me

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
}

export default AboutMe;
