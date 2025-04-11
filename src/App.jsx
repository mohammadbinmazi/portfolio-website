import { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const projectList = [
    {
      title: "FullStack Email-Sender",
      description:
        "A full-stack email-sending platform designed for authenticated communication. This app goes beyond a basic contact form by providing a complete user authentication system with signup, login, JWT-based access control, and secure message submission. It includes",
      tech: [
        "javascript",
        "TailwindCSS",
        "React",
        "postgresql",
        "NodeJS",
        "Express",
      ],
    },
    {
      title: "Crud-Application",
      description:
        "RCTVX is a full-stack video streaming platform where I built interactive components, managed user authentication, and optimized streaming performance for high-traffic use.",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Password-Generator",
      description:
        "Goodr is a smart food delivery & inventory system designed to reduce waste and enhance logistics. I was involved in frontend dashboards and backend inventory APIs.",
      tech: ["React", "Javascript", "TailwindCSS"],
    },
    {
      title: "React-Router-project",
      description:
        "Goodr is a smart food delivery & inventory system designed to reduce waste and enhance logistics. I was involved in frontend dashboards and backend inventory APIs.",
      tech: ["React", "Javascript", "TailwindCSS"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projectList[0]);

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
          software
          <br />
          Engineer
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
        {activeSection === "home" && (
          <div className="max-w-3xl px-8 py-10 ml-85 mt-32">
            <p className="text-md leading-relaxed font-semibold text-white text-left">
              Born in Aurangabad, I’m a passionate full-stack developer with a
              love for cricket, tech, and turning ideas into reality. With solid
              experience in React.js for the frontend and Node.js for the
              backend, I build scalable, user-friendly applications that perform
              as good as they look. When I’m not coding, you’ll either find me
              on the cricket field, deep into a good match on TV, or flipping
              through the pages of a historical book — from ancient empires to
              modern revolutions, I enjoy learning from the past to stay sharp
              in the present. I'm always eager to expand my skills, explore new
              technologies, and collaborate on projects that challenge me.
              Whether it’s a freelance gig, a team sprint, or a solo build, I
              bring focus, curiosity, and clean code to the table.
            </p>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="flex justify-end items-center h-full w-full pr-4">
            <div className="flex flex-col space-y-2 text-4xl font-semibold">
              <a
                href="https://www.linkedin.com/in/mohammed-bin-mazi-4611212a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mohammadbinmazi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                Github
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=mohammadbinmazi8@gmail.com">
                Email
              </a>
              <a
                href="https://drive.google.com/file/d/1XiCL_DXdxBgwHAjjZSfUiAJhhfmgLz3e/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="flex flex-col md:flex-row w-full h-full p-6 space-y-6 md:space-y-0 md:space-x-6 items-center">
            {/* Left: Project details */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4 text-purple-300">
                {selectedProject.title}
              </h2>
              <p className="mb-4 text-lg leading-relaxed">
                {selectedProject.description}
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">
                Technologies Used:
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-200 font-semibold">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-800 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Project list */}
            <div className="w-full md:w-64 space-y-2">
              {projectList.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer text-lg font-semibold hover:text-purple-300 transition-colors ${
                    selectedProject.title === project.title
                      ? "text-green-400"
                      : "text-gray-300"
                  }`}
                >
                  {project.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
