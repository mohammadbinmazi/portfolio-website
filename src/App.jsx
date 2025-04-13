import { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SplashScreen from "./pages/SplashScreen";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showSplash, setShowSplash] = useState(true);

  const linkClass = (section) =>
    `text-lg md:text-xl lg:text-3xl font-semibold transition-colors cursor-pointer ${
      activeSection === section ? "text-purple-300" : "text-white"
    }`;

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/portfoliobg.gif')` }}
    >
      {/* Sidebar */}
      <aside className="w-full md:w-60 p-6 bg-black/70 md:bg-transparent flex-shrink-0">
        <h1 className="text-2xl font-bold mb-2 text-center md:text-left">
          Mohammad
          <br />
          Bin Mazi
        </h1>
        <p className="mb-8 text-lg font-semibold text-center md:text-left">
          React/Node
          <br />
          PERN stack
        </p>

        <nav className="flex flex-row md:flex-col justify-center md:items-start space-x-6 md:space-x-0 md:space-y-3">
          <span
            onClick={() => setActiveSection("home")}
            className={linkClass("home")}
          >
            Home
          </span>
          <span
            onClick={() => setActiveSection("projects")}
            className={linkClass("projects")}
          >
            Projects
          </span>
          <span
            onClick={() => setActiveSection("contact")}
            className={linkClass("contact")}
          >
            Contact
          </span>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        {activeSection === "home" && <Home />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
};

export default App;
