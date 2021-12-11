import React from "react";
import PropTypes from "prop-types";

// tech "object" passed in as prop to make sure that the tech's information is rendered by the component
const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}{" "}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
