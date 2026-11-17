import ProjectCard from "../Components/Project.jsx";
import { useState } from "react";
function Portfolio(){
  const [showProjects, setShowProjects] = useState(false);
    return(
     <div> 
      <button onClick={() => setShowProjects(true)}>
        Preview Projects
      </button>
      {showProjects && (
      <ProjectCard
        name="Neon Bar"
        screenshot="../src/assets/Index-page-photo.png"
        description="A website for a bar."
        tech="HTML, CSS"
        learned="How to create website layouts."
        role="Group project"
        challenges="Creating responsive navigation."
        github="https://github.com/"
      />
      
     )}

    </div>
  );
}


export default Portfolio;