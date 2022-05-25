import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Button, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BiMessageSquareAdd } from "react-icons/bi";
import {
  RiDashboardFill,
  RiMessage2Fill,
  RiSettings3Fill,
} from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { BsKanbanFill } from "react-icons/bs";
import collab from "../../images/collab.svg";
import collabP from "../../images/collab-logo.svg";
import { ExpandButton } from "../projects/ProjectSummary";

export const PrimaryButton = styled(Button)({
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1.1em",
  fontWeight: 400,
  width: "100%",
  textTransform: "capitalize",
  color: "#E7ECF8",
  backgroundColor: "#131E3F",
  margin: "0.6em 0",
  padding: "0.2em 0.7em",
  border: "none",
  outline: "none",
  "&:hover": {
    backgroundColor: "#131E3F",
    border: "none",
    outline: "none",
    boxShadow: "-1px 3px 8px 0px rgba(56,56,56,0.91)",
  },
});

export const SecondaryButton = styled(Button)({
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "0.9em",
  fontWeight: 600,
  width: "100%",
  textTransform: "uppercase",
  color: "#131E3F",
  backgroundColor: "#E7ECF8",
  outline: "none",
  margin: "0.6em 0",
  padding: "0.2em 0.7em",
  borderColor: "#131E3F",
  "&:hover": {
    backgroundColor: "#D0D8F1",
    borderColor: "#131E3F",
    boxShadow: "-1px 3px 8px 0px rgba(56,56,56,0.91)",
  },
});

export const StyledChip = styled(Chip)({
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1.1em",
  fontWeight: 300,
  width: "100%",
  color: "#131E3F",
  backgroundColor: "#E7ECF8",
  margin: "0.6em 0",
  padding: "1.15em 0",
  borderColor: "#131E3F",
  borderRadius: "20px",
  "& .MuiChip-avatar": {
    width: "35px",
    height: "35px",
    fontSize: "1em",
    color: "#c2c2c2",
  },
  "& .MuiChip-clickable .MuiChip-clickableColorDefault ": {
    backgroundColor: "#D0D8F1",
    borderColor: "#131E3F",
    boxShadow: "-1px 3px 8px 0px rgba(56,56,56,0.91)",
  },
  "&:hover": {
    backgroundColor: "#D0D8F1",
    borderColor: "#131E3F",
    boxShadow: "-1px 3px 8px 0px rgba(56,56,56,0.91)",
  },
});

function SignedInLinks(props) {
  

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <div className="brand-logo">
          <Link to="/" className="home-link">
            <img src={collab} alt="Brand-name" />
            <img className="logo" src={collabP} alt="Brand-logo" />
          </Link>
        </div>
        <div className="sidebar-column">
          <ul className="right">
            <li>
              <NavLink to="/create">
                <PrimaryButton
                  variant="contained"
                  startIcon={<BiMessageSquareAdd />}
                >
                  New Project
                </PrimaryButton>
              </NavLink>
            </li>
          </ul>
          <ul className="right">
            <li className="tab">
              <NavLink to="/">
                <ExpandButton
                  sx={{ width: "11em", justifyContent: "flex-start" }}
                  startIcon={<RiDashboardFill />}
                >
                  Dashboard
                </ExpandButton>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/kanbanBoard">
                <ExpandButton
                  sx={{ width: "11em", justifyContent: "flex-start" }}
                  startIcon={<BsKanbanFill />}
                >
                  Kanban
                </ExpandButton>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/teams">
                <ExpandButton
                  sx={{ width: "11em", justifyContent: "flex-start" }}
                  startIcon={<FaUsers />}
                >
                  Teams
                </ExpandButton>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/chat">
                <ExpandButton
                  sx={{ width: "11em", justifyContent: "flex-start" }}
                  startIcon={<RiMessage2Fill />}
                >
                  Messages
                </ExpandButton>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/settings">
                <ExpandButton
                  sx={{ width: "11em", justifyContent: "flex-start" }}
                  startIcon={<RiSettings3Fill />}
                >
                  Settings
                </ExpandButton>
              </NavLink>
            </li>
          </ul>
  
        </div>
      </div>
    </nav>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
