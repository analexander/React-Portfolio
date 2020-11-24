import React from "react";
import "./style.css";
import projectData from "../../projectData"

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes

function Thumbnail() {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Project Image"
      style={{
        backgroundImage: `url(${projectData.img})`
      }}
    />
  );
}

export default Thumbnail;