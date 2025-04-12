import { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const linkClass = (section) =>
    `text-3xl font-semibold mb-4 transition-colors cursor-pointer ${
      activeSection === section ? "text-purple-300" : ""
    }`;

  return (
    <div
      className="flex h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/portfoliobg.gif')` }}
    >
      <aside className="w-60 p-2">
        <h1 className="text-2xl font-bold leading-tight mb-2">
          Mohammad
          <br />
          Bin Mazi
        </h1>
        <p className="mb-12 text-xl font-semibold">
          React/Node
          <br />
          PERN stack
        </p>

        <nav className="flex flex-col space-y-4">
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

      <main className="flex-1 p-6 overflow-y-auto">
        {activeSection === "home" && <Home />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
};

export default App;
