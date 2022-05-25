import React, {useState} from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Avatar } from "@mui/material";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { StyledChip, SecondaryButton } from "./SignedInLinks";

const SidePanel = (props) => {
  const { auth, profile } = props;
  console.log(auth, profile);

  const [dropOpen, setDropOpen] = useState(false);

  return (
    <nav className="panel-wrapper">
      <div className="container">
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
                      lineHeight: 0,
                    }}
                  >
                    {props.profile.initials}
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
            <SecondaryButton variant="outlined" style={{ width: "11em" }}>
              <a onClick={props.signOut}>Log Out</a>
            </SecondaryButton>
          </li>
        </ul>
        <h2>All Users</h2>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
