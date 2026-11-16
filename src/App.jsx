import ProjectCard from "./Components/Project";
import ProfileCard from "./Components/Profile"
import './App.css'

function App() {
    return(
    <div>
        <ProfileCard></ProfileCard>
      
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

      

    </div>
    )
 
}

export default App
