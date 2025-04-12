import React, { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Notify parent to hide splash
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out">
      <h1 className="text-4xl sm:text-5xl font-bold animate-pulse text-purple-300">
        Welcome to my Portfolio
      </h1>
    </div>
  );
};

export default SplashScreen;
