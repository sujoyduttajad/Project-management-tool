import React, { Component } from "react";
import { createProjectAction } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { CustomCard, CustomTypo } from "./ProjectSummary";
import { CardContent } from "@mui/material";


class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProjectAction(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="feed-section">
        <div className="project-detail">
        <h1 className="project-header">Create New Project</h1>
          <CustomCard>
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <div className="input-container">
                  <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      autoFocus={true}
                      placeholder="Your Title"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea
                      id="content"
                      rows="6"
                      maxLength={150}
                      placeholder="Your Content"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div className="input-field">
                    <button className="auth-button">Create</button>
                  </div>
                </div>
              </form>
            </CardContent>
          </CustomCard>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProjectAction: (project) => dispatch(createProjectAction(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
