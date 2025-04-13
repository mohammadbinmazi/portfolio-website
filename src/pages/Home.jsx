import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50); // small delay to ensure transition kicks in

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`w-full max-w-4xl px-6 sm:px-10 py-10 mx-auto sm:mt-30 transform transition-all duration-700 ease-out
        ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
    >
      <p className="text-base sm:text-lg md:text-xl leading-relaxed font-semibold text-white text-left">
        Born in Aurangabad, I’m a passionate full-stack developer with a love
        for cricket, tech, and turning ideas into reality. With solid experience
        in React.js for the frontend and Node.js for the backend, I build
        scalable, user-friendly applications that perform as good as they look.
        When I’m not coding, you’ll either find me on the cricket field, deep
        into a good match on TV, or flipping through the pages of a historical
        book — from ancient empires to modern revolutions, I enjoy learning from
        the past to stay sharp in the present. I'm always eager to expand my
        skills, explore new technologies, and collaborate on projects that
        challenge me. Whether it’s a freelance gig, a team sprint, or a solo
        build, I bring focus, curiosity, and clean code to the table.
      </p>
    </div>
  );
};

export default Home;
