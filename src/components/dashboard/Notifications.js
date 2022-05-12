import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { MdClose } from "react-icons/md";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <NotifyBar elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NotifyBar = styled(MuiAlert)({
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: "1em",
    color: "#E7ECF8",
    backgroundColor: "#131E3F",
});

function Notifications(props) {
  const [state, setState] = useState({
    open: false,
    Transition: Slide,
  });

  useEffect(() => {
    const handleOpen = () => {
      setState({
        ...state,
        open: true,
      });
    };
    handleOpen();
  }, []);

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div className="section ">
      <Snackbar
        open={state.open}
        autoHideDuration={8000}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key={state.Transition.name}
        action={
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{
              color: "#fff",
              position: "relative",
              top: "-30px",
            }}
          >
            <MdClose />
          </IconButton>
        }
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          <div className="notification-container">
            <h3>Notifications</h3>
            <ul>
              <li>Notifications are still in development.</li>
              <li>It will be available soon!!</li>
            </ul>
          </div>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Notifications;
