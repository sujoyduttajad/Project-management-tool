import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { StyledChip, SecondaryButton } from "./SignedInLinks";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SidePanel = (props) => {
  const [dropOpen, setDropOpen] = useState(false);

  const { projects, auth, profile } = props;
  // if (!auth.uid) return <Redirect to="/signin" />;

  let userList;
  const userArray = async () => {
    
    if (projects) {
      userList = await new Set(projects.map((user) => user.authorFirstName));
    }
  }
 
  userArray();

  console.log(userList);

  return (
    <nav className="panel-wrapper">
      <div className="container">
        <ul className="right">
          <li className="tab">
            <NavLink to="/">
              <StyledChip
                sx={{
                  backgroundColor: "#fff",
                }}
                variant="outlined"
                clickable
                avatar={
                  <Avatar
                    variant="circular"
                    sx={{
                      bgcolor: "#131E3F",
                      lineHeight: 0,
                    }}
                  >
                    {profile.initials}
                  </Avatar>
                }
                label={
                  <h4 className="avatar-h4">Hi! {props.profile.firstName}</h4>
                }
                onDelete={() => setDropOpen(!dropOpen)}
                deleteIcon={
                  <MdOutlineKeyboardArrowDown style={{ color: "#131E3F" }} />
                }
              />
            </NavLink>
          </li>
          <li className="tab">
            <SecondaryButton
              variant="outlined"
              style={{ width: "11em", backgroundColor: "#fff" }}
            >
              <a onClick={props.signOut}>Log Out</a>
            </SecondaryButton>
          </li>
        </ul>
        <div className="users-list-container">
          <h2>All Users</h2>
          <hr />
          <div>
            {userList &&
              userList.map((user, index) => (
                <StyledBadge
                  key={index}
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    variant="circular"
                    sx={{
                      bgcolor: "#131E3F",
                      lineHeight: 0,
                    }}
                    alt={user}
                  >
                    {user}
                  </Avatar>
                </StyledBadge>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    projects: state.firestore.ordered.projects,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt", "desc"] }])
)(SidePanel);
