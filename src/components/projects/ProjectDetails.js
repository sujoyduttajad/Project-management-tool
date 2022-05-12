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
          <CustomCard>
            <CardContent>
              <CustomTypo sx={{ fontSize: "2em" }} variant="h4" gutterBottom>
                {project.title}
              </CustomTypo>
              <CustomTypo variant="body1" gutterBottom>
                Posted by {project.authorFirstName} {project.authorLastName}
              </CustomTypo>
              <CustomTypo variant="body2" gutterBottom>{auth.email}</CustomTypo>
              <CustomTypo variant="body2">
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
