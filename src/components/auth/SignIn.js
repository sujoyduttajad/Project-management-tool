import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { CustomCard, CustomTypo } from "../projects/ProjectSummary";
import { CardContent } from "@mui/material";
import { SecondaryButton } from "../layout/SignedInLinks";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="feed-section">
        <CustomCard style={{ height: "fit-content", width: "50vh" }}>
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              <CustomTypo
                sx={{ fontSize: "2.5em", fontWeight: 600, color: "#131E3F" }}
                variant="h4"
              >
                Login
              </CustomTypo>
              <div className="input-container">
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  {/* <SecondaryButton style={{ width: "100%" }} variant="outlined">
                    Login
                  </SecondaryButton> */}
                  <button className="auth-button" >Login</button>
                </div>
              </div>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>
          </CardContent>
        </CustomCard>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
