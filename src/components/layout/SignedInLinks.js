import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Avatar, Button, capitalize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BiMessageSquareAdd } from "react-icons/bi";

export const SecondaryButton = styled(Button)({
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1.1em",
  fontWeight: 600,
  width: "100%",
  textTransform: "uppercase",
  color: "#131E3F",
  backgroundColor: "#E7ECF8",
  margin: "0.6em 0",
  padding: "0.2em 0.7em",
  borderColor: "#131E3F",
  "&:hover": {
    backgroundColor: "#D0D8F1",
    borderColor: "#131E3F",
    boxShadow: '-1px 3px 18px 0px rgba(56,56,56,0.91)',
  },
});

export const CustomAvatar = styled(Button)({
  backgroundColor: "#131E3F",
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1.1em",
  padding: "0.3em",
  color: "#fff",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "#5A77CE",
  },
});

function SignedInLinks(props) {
  return (
    <div className="sidebar-column">
      <ul className="right">
        <li>
          <Button variant="contained" startIcon={<BiMessageSquareAdd />}>
            <NavLink to="/create">New Project</NavLink>
          </Button>
        </li>
      </ul>
      <ul className="right">
        <li className="tab">
          <Avatar 
          variant="circular" 
          sx={{ 
              bgcolor: '#131E3F',

            }}>
            <NavLink to="/">{props.profile.initials}</NavLink>
          </Avatar>
        </li>
        <li className="tab">
          <SecondaryButton variant="outlined">
            <a onClick={props.signOut}>Log Out</a>
          </SecondaryButton>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
