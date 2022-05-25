import React from "react";
import { connect } from "react-redux";

const SidePanel = () => {
  return (
    <nav className="panel-wrapper">
      <div className="container">Panel Bar</div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(SidePanel);
