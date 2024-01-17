import "./css/ProjectCard.css";
import WorkCard from "./ProejctCard";
import WorkCardData from "./ProjectData";
import React from 'react'

const Project = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val,ind) => {
            return (
                <WorkCard
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  view={val.view}
                  source={val.source}
                />
            );
        })}
      </div>
    </div>
  )
}

export default Project
