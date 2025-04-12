import { useState } from "react";

const Projects = () => {
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
        "RCTVX is a full-stack video streaming platform where I built interactive components, managed user authentication, and optimized streaming performance for high-traffic use",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Password-Generator",
      description: "Goodr is a smart food delivery & inventory system...",
      tech: ["React", "Javascript", "TailwindCSS"],
    },
    {
      title: "React-Router-project",
      description: "Goodr is a smart food delivery & inventory system...",
      tech: ["React", "Javascript", "TailwindCSS"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projectList[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row w-full h-full p-6 gap-6 items-center">
      {/* Left: Project details */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-300">
          {selectedProject.title}
        </h2>
        <p className="mb-4 text-base sm:text-lg leading-relaxed">
          {selectedProject.description}
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
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
  );
};

export default Projects;
