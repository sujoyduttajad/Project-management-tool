import React from "react";
import moment from "moment";
import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomCard = styled(Card)({
    fontFamily: "'Noto Sans', sans-serif",
    width: '100%',
    
    "&:hover": {
      boxShadow: "-1px 3px 8px 0px rgba(56,56,56,0.91)",
    },
});

export const CustomTypo = styled(Typography)({
  fontFamily: "'Noto Sans', sans-serif",
});

export const ExpandButton = styled(Button)({
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1sem",
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
    boxShadow: "none",
  },
});

function ProjectSummary({ project }) {

  return (
    <div className="card-layout">
      <CustomCard>
        <CardContent>
          <CustomTypo sx={{ fontSize: '2em' }} variant="h4">{project.title}</CustomTypo>
          <CustomTypo variant="body1">
            Posted by {project.authorFirstName} {project.authorLastName}
          </CustomTypo>
          <CustomTypo variant="body2">
            {moment(project.createdAt.toDate()).calendar()}
          </CustomTypo>
        </CardContent>
        <CardActions>
        <ExpandButton 
          disableElevation
          disableFocusRipple
          size="small"
          >
            Show More
          </ExpandButton>
        </CardActions>
      </CustomCard>
    </div>
  );
}

export default ProjectSummary;
