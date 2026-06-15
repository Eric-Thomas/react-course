import { useState } from "react";
import Sidebar from "./components/Sidebar";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [projects, setProjects] = useState([]);
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar projects={projects}></Sidebar>
        <WelcomeMessage />
      </main>
    </>
  );
}

export default App;
