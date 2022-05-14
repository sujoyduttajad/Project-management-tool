import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Avatar, Button, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BiMessageSquareAdd } from "react-icons/bi";

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
    <div className="sidebar-column">
      <ul className="right">
        <li>
          <PrimaryButton variant="contained" startIcon={<BiMessageSquareAdd />}>
            <NavLink to="/create">New Project</NavLink>
          </PrimaryButton>
        </li>
      </ul>
      <ul className="right">
        <li className="tab">
          <NavLink to="/">
            <StyledChip
              variant="outlined"
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
              label={
                <h4 className="avatar-h4">Hi! {props.profile.firstName}</h4>
              }
            />
          </NavLink>
        </li>
        <li className="tab">
          <SecondaryButton variant="outlined" style={{ width: "11em" }}>
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
