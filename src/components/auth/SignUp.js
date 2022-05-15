import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { CustomCard, CustomTypo } from "../projects/ProjectSummary";
import { CardContent } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import collabLogo from "../../images/collab-logo-2.svg";
import collabP from "../../images/collab-logo.svg";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="auth-section">
        <div className="left-side-signup">
          <div className="auth-brand-logo">
            <Link to="/">
              <img src={collabP} alt="Brand-logo" />
            </Link>
          </div>
          <CustomTypo sx={{ fontWeight: 500, color: "#505050" }} variant="h5">
            Good to see you
          </CustomTypo>
          <CustomCard
            style={{
              height: "fit-content",
              width: "50vh",
              border: "none",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <CustomTypo
                  sx={{ fontSize: "2.5em", fontWeight: 600, color: "#131E3F" }}
                  variant="h4"
                >
                  Sign Up here!
                </CustomTypo>
                <div className="input-container">
                  <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <button className="auth-button">Create Account</button>
                  </div>
                  <CustomTypo
                    sx={{ fontWeight: 400, color: "#7A7A7A" }}
                    variant="body2"
                  >
                    Already have an account?
                    <NavLink to="/signin" className="auth-nav-link">
                      Login here!
                    </NavLink>
                  </CustomTypo>
                </div>
                {authError ? (
                  <div className="red-warning">
                    <p>**{authError}</p>
                  </div>
                ) : null}
              </form>
            </CardContent>
          </CustomCard>
        </div>
        <div className="right-side-signup">
          {/* <div className="brand-logo">
                <Link to="/">
                  <img src={collabLogo} alt="Brand-logo" />
                </Link>
              </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
