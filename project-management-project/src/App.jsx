import { useState } from "react";
import Sidebar from "./components/Sidebar";
import WelcomeMessage from "./components/WelcomeMessage";
import ProjectCreation from "./components/ProjectCreation";
function App() {
  const [projects, setProjects] = useState({});
  const [selectedProjectId, setSelectedProject] = useState(null);
  const [creatingProject, setCreatingProject] = useState(false);

  function handleCreateProject() {
    setCreatingProject(true);
  }

  function handleSaveProject(project) {
    const projectId = crypto.randomUUID();
    setProjects((prevProjects) => {
      return {
        [projectId]: project,
        ...prevProjects,
      };
    });
    setCreatingProject(false);
  }

  let content = <WelcomeMessage onCreateNewProject={handleCreateProject} />;

  if (creatingProject) {
    content = (
      <ProjectCreation handleSaveProject={handleSaveProject}></ProjectCreation>
    );
  }

  // if (selectedProjectId != null){
  //   content (
  //     <SelectedProject projectId={selectedProjectId} project
  //   )
  // }

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
