import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { styled } from "@mui/material/styles";
import { CardContent } from "@mui/material";
import { CustomCard, CustomTypo } from "./ProjectSummary";

function ProjectDetails(props) {
  console.log(props);
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (project) {
    return (
      <div className="feed-section">
        <div className="project-detail">
            <h1 className="project-header">Project Detail</h1>
          <CustomCard>
            <CardContent>
              <CustomTypo
                sx={{ fontSize: "1.6em", marginBottom: "1em", fontWeight: 700, color: "#131E3F" }}
                variant="h4"
                gutterBottom
              >
                {project.title}
              </CustomTypo>
              <CustomTypo
                sx={{ fontSize: "1.1em", marginBottom: "1em" }}
                variant="body1"
              >
                {project.content}
              </CustomTypo>
              <CustomTypo variant="body1" gutterBottom sx={{ fontWeight: 600 }}>
                Posted by {project.authorFirstName} {project.authorLastName}
              </CustomTypo>
              <CustomTypo variant="body2" sx={{ color: "#A1A2A3" }}>
                {moment(project.createdAt.toDate()).calendar()}
              </CustomTypo>
            </CardContent>
          </CustomCard>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <p>Loading project...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
