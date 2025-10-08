import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "CraftConnect",
      desc: "An online platform that connects users with local artisans and service providers. Users can search for services, view profiles, and book appointments. The platform also allows artisans to create profiles, showcase their skills, and manage bookings.",
      liveLink: "https://craftconnect-3.onrender.com/",
      githubLink: "https://github.com/",
      techs: ["HTML", "CSS", "NODEJS", "EXPRESSJS", "MongoDB"],
      isOpenSource: true,
    },
    {
      name: "Geo-Heat",
      desc: "congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed",
      liveLink: "https://geo-heat.vercel.app/",
      githubLink: "https://github.com/Ace-g-ops/Geo--Heat",
      techs: ["React","MongoDB",  "Python"],
      isOpenSource: true,
    },
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
