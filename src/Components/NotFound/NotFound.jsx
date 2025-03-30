import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      {/* <img
        src="https://source.unsplash.com/600x400/?error,404,ai"
        alt="404 Not Found"
        className="not-found-image"
      /> */}
      <h1>Oops! Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default NotFound;
