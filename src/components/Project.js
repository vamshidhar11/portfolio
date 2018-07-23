import React, { PropTypes } from "react";
import Img from "gatsby-image";

const Project = props => (
  <div className="pb-5">
    <h3>{props.title}</h3>
    <a href={props.url} className="mt-3 d-block">
      {props.url}
    </a>
    {props.children}
    {/* <Img src={props.image} sizes={props.resolution} /> */}
  </div>
);

export default Project;
