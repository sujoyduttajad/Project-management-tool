import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { CustomCard, CustomTypo } from "../projects/ProjectSummary";
import { CardContent } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
// import collabLogo from "../../images/collab-logo-2.svg";
import collabP from "../../images/collab-logo.svg";

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
      <div className="auth-section">
        <div className="left-side">
          {/* <div className="brand-logo">
            <Link to="/">
              <img src={collabLogo} alt="Brand-logo" />
            </Link>
          </div> */}
        </div>
        <div className="right-side">
          <div className="auth-brand-logo">
            <Link to="/">
              <img src={collabP} alt="Brand-logo" />
            </Link>
          </div>
          <CustomTypo sx={{ fontWeight: 500, color: "#505050" }} variant="h5">
            Hello Again!
          </CustomTypo>
          <CustomTypo
            sx={{ fontWeight: 500, color: "#7A7A7A" }}
            variant="body1"
          >
            Please login with your credentials
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
                  Login
                </CustomTypo>
                <div className="input-container">
                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                    />
                    <CustomTypo 
                        variant="body2"
                        sx={{ color: "#131E3F" }}
                    >
                        <NavLink to="/signup" >
                            Forgot Password?
                        </NavLink>
                    </CustomTypo>
                  </div>
                  <div className="input-field">
                    <button className="auth-button">Login</button>
                  </div>
                </div>
                {authError ? (
                  <div className="red-warning">
                    <p>**{authError}</p>
                  </div>
                ) : null}
              </form>
            </CardContent>
          </CustomCard>
          <CustomTypo
            sx={{ fontWeight: 400, color: "#7A7A7A" }}
            variant="body2"
          >
            If you don't have an account, please
            <NavLink to="/signup" className="auth-nav-link">
              create a new one
            </NavLink>
          </CustomTypo>
        </div>
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
