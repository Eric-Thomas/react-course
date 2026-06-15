import Sidebar from "./components/Sidebar";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar></Sidebar>
        <WelcomeMessage />
      </main>
    </>
  );
}

export default App;
