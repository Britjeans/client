import React from "react";
import BlogTimeline from "./BlogTimeline";

const DiscoverPage = ({currentUser}) => {
    return (
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-8">
                    <BlogTimeline />
                </div>
                <div className="col-sm-2">
                </div>
            </div>
    );
}

export default DiscoverPage;

