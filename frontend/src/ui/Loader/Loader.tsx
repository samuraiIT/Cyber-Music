import React from "react";

import "./Loader.scss";

const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <span className="loader"></span>
        </div>
    );
};

export { Loader };
