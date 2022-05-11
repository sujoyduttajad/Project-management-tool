import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Button } from "@mui/material";
import {BiMessageSquareAdd} from 'react-icons/bi'

function SignedInLinks(props) {
  return (
    <ul className="right">
      <li>
        <Button variant="contained" startIcon={<BiMessageSquareAdd />}>
          <NavLink to="/create">New Project</NavLink>
        </Button>
      </li>
      <li className="tab">
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li className="tab">
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
