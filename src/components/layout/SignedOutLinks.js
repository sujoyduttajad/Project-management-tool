import React from "react";
import { NavLink } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "./SignedInLinks";

function SignedOutLinks() {
  return (
    <div className="sidebar-column">
      <ul className="right">
        <li className="tab">
          <PrimaryButton
            variant="contained"
            style={{ width: "10em", fontSize: "1em", textTransform: 'uppercase' }}
          >
            <NavLink to="/signup">Sign Up</NavLink>
          </PrimaryButton>
        </li>
        <li className="tab">
          <SecondaryButton variant="outlined" style={{ width: "11em" }}>
            <NavLink to="/signin">Login</NavLink>
          </SecondaryButton>
        </li>
      </ul>
    </div>
  );
}

export default SignedOutLinks;
