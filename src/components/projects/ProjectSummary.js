import React from "react";
import moment from "moment";

function ProjectSummary({ project }) {
  return (
    <div className="card-layout">
      <h4 className="card-title">{project.title}</h4>
      <p>
        Posted by {project.authorFirstName} {project.authorLastName}
      </p>
      <p className="grey-text">
        {moment(project.createdAt.toDate()).calendar()}
      </p>
    </div>
  );
}

export default ProjectSummary;
