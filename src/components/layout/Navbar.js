import React from "react";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import SidePanel from "./SidePanel";

function Navbar(props) {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <>
      <SignedInLinks profile={profile} auth={auth} />
      <SidePanel />
    </>
  ) : (
    <SignedOutLinks />
  );

  return <nav className="">{links}</nav>;
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
