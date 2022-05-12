import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Avatar, Button, Chip } from "@mui/material";
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
    boxShadow: "-1px 3px 18px 0px rgba(56,56,56,0.91)",
  },
});

function SignedInLinks(props) {
  console.log(props.profile);
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
          <NavLink to="/">
            <Chip
              variant="outlined"
              size="5em"
              clickable
              avatar={
                <Avatar
                  variant="circular"
                  sx={{
                    bgcolor: "#131E3F",
                  }}
                >
                  {props.profile.initials}
                </Avatar>
              }
              label={<h4>Hi! {props.profile.firstName}</h4>}
            />
          </NavLink>
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
