import React from "react";
import BlogTimeline from "./BlogTimeline";

const DiscoverPage = ({currentUser}) => {
    return (
            <div className="row">
                <div className="col-sm-0 col-lg-2">
                </div>
                <div className="col-sm-12 col-lg-8">
                    <BlogTimeline />
                </div>
                <div className="col-sm-0 col-lg-2">
                </div>
            </div>
    );
}

export default DiscoverPage;

