import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-10 transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <ContactForm />

      <div className="flex flex-col items-center md:items-start space-y-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white">
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
        <a
          href="https://mail.google.com/mail/?view=cm&to=mohammadbinmazi8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-300 transition-colors"
        >
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
  );
};

export default Contact;
