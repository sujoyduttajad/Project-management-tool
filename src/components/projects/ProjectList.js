import React, {useEffect} from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";


export const CustomSearch = styled(TextField)({
  fontFamily: "'Noto Sans', sans-serif",
  maxWidth: "60em",
  width: "100%",
  fontSize: '1em',
  "&:hover": {
    // boxShadow: "-1px 3px 8px 0px rgba(56,56,56,0.91)",
  },
});

function ProjectList({ projects }) {

  console.log(projects);
  let projectList = [];
  useEffect(() => {
    const titleList = async () => {
      const titles = [];
      if(projects) {
        await projects.map(project => titles.push(project.title))
      }
      return titles; 
    } 
    projectList = titleList();
  }, [])

    console.log(projectList)
  

  return (
    <section className="project-list-section">
      <div className="serach-container">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={projectList}
          sx={{ width: "100%", fontFamily: "'Noto Sans', sans-serif", fontWeight: 500 }}
          renderInput={(params) => <CustomSearch {...params} label="Projects" />}
        />
      </div>
      {projects &&
        projects.map((project) => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </section>
  );
}

export default ProjectList;
