import { useState } from "react";
import Sidebar from "./components/Sidebar";
import WelcomeMessage from "./components/WelcomeMessage";
import ProjectCreation from "./components/ProjectCreation";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projects, setProjects] = useState({});
  const [selectedProjectId, setSelectedProject] = useState(null);
  const [creatingProject, setCreatingProject] = useState(false);

  function handleCreateProject() {
    setCreatingProject(true);
    setSelectedProject(null);
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

  function handleSelectProject(projectId) {
    setSelectedProject(projectId);
  }

  function handleDelete(projectId) {
    setSelectedProject(null);
    setProjects((prevProjects) => {
      delete prevProjects[projectId];
      return prevProjects;
    });
  }

  function handleAddTask(projectId, task) {
    setProjects((prevProjects) => {
      const taskId = crypto.randomUUID();
      const projectsCopy = structuredClone(prevProjects);
      projectsCopy[projectId].tasks[taskId] = task;
      return projectsCopy;
    });
  }

  function handleDeleteTask(projectId, taskId) {
    setProjects((prevProjects) => {
      const projectsCopy = structuredClone(prevProjects);
      delete projectsCopy[projectId].tasks[taskId];
      return projectsCopy;
    });
  }

  let content = <WelcomeMessage onCreateNewProject={handleCreateProject} />;

  if (creatingProject) {
    content = (
      <ProjectCreation handleSaveProject={handleSaveProject}></ProjectCreation>
    );
  }

  if (selectedProjectId != null) {
    content = (
      <SelectedProject
        projectId={selectedProjectId}
        project={projects[selectedProjectId]}
        handleDelete={handleDelete}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projects}
          handleSelectProject={handleSelectProject}
          onCreateNewProject={handleCreateProject}
        ></Sidebar>
        {content}
      </main>
    </>
  );
}

export default App;
