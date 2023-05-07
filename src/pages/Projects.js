import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import scenicholidaysinwales from "../assets/scenicholidayswales.jpg";

import "../styles/Projects.css";

function Projects() {
  const openExternalWindow = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
      <div className="websitelong">
        <img
          src={scenicholidaysinwales}
          onClick={(e) =>
            openExternalWindow(e, "http://www.scenicholidaysinwales.co.uk/")
          }
          alt="scenicholidaysinwales"
        />
      </div>
    </div>
  );
}

export default Projects;
