import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    let projectList;
    let userList;
    if (projects) {
      projectList = projects.map(project => project.title);
      userList = new Set(projects.map(user => user.authorFirstName))
    }

      // console.log(userList)
    
    
    return (
      <section className="feed-section">
        <div className="dashboard-container">
          <ProjectList 
            projects={projects} 
            projectList={projectList}
            userList={userList} 
          />
        </div>
        <div className="">
          <Notifications />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt", "desc"] }]),
)(Dashboard);
