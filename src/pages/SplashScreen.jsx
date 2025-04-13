import React, { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 100); // Delay animation start
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50 px-4 text-center">
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-bold text-purple-300 transition-all duration-700 ease-out ${
          showText ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        Welcome to Mohammad Bin Mazi's Portfolio
      </h1>
    </div>
  );
};

export default SplashScreen;
