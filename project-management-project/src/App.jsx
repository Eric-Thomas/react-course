import { useState } from "react";
import Sidebar from "./components/Sidebar";
import WelcomeMessage from "./components/WelcomeMessage";
import ProjectCreation from "./components/ProjectCreation";
function App() {
  const [projects, setProjects] = useState([]);
  const [creatingProject, setCreatingProject] = useState(false);

  function handleCreateProject() {
    setCreatingProject(true);
  }

  let content = <WelcomeMessage onCreateNewProject={handleCreateProject} />;

  if (creatingProject) {
    content = <ProjectCreation></ProjectCreation>;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projects}
          onCreateNewProject={handleCreateProject}
        ></Sidebar>
        {content}
      </main>
    </>
  );
}

export default App;
