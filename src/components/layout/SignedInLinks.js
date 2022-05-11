import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

function SignedInLinks(props) {
  return (
    <ul className="right">
      <li className="tab btn grey lighten-5 text darken-4 col s1 m4">
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li className="tab btn grey lighten-5 text darken-4 col s1">
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating grey lighten-5 text darken-4"
        >
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
