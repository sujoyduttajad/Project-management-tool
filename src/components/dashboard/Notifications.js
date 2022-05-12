import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";

export const NotifyBar = styled(Snackbar)({
  "& .MuiSnackbarContent-root": {
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: "1em",
    color: "#E7ECF8",
    backgroundColor: "#131E3F",
  },
});

function Notifications(props) {
  const [state, setState] = useState({
    open: false,
    Transition: Slide,
  });

  const handleOpen = () => {
    setState({
      ...state,
      open: true,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div className="section ">
      <NotifyBar
        open={handleOpen}
        transitionDuration={1000}
        autoHideDuration={100}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message={
          <div className="notification-container">
            <h3>Notifications</h3>
            <ul>
              <li>Notifications are still in development</li>
              <li>Soon to be deployed with notifications</li>
            </ul>
          </div>
        }
        key={state.Transition.name}
      />
    </div>
  );
}

export default Notifications;
