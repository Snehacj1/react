import React, { useState } from "react";

function GitHub() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="text-center p-6">
      {/* GitHub Logo with Hover Effect */}
      <div
        className="inline-block relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="/image/gitlogo.png"
          alt="GitHub Logo"
          className="h-20 mx-auto transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer"
        />
        {hovered && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-2 px-4 rounded-lg shadow-md">
            Visit my GitHub
          </div>
        )}
      </div>

      {/* GitHub Link */}
      <a
        href="https://github.com/your-username/your-repo-name"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block text-blue-600 hover:text-blue-800 font-semibold"
      >
        View Code on GitHub
      </a>

      {/* About Me Section */}
      <div className="mt-8 text-gray-700">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4">
          Hi, I'm Sneha C J, a passionate software engineer with a knack for
          building dynamic, user-friendly web applications. From intuitive
          front-end designs to robust back-end systems, I enjoy creating
          innovative solutions that make an impact.
        </p>
        <p className="mt-2">
          My journey includes developing advanced tools like an "Autism
          Diagnosis" system, a "Counterfeit Note Detection" platform, and
          various full-stack web applications. My goal is to merge creativity
          and technology to build meaningful digital experiences.
        </p>
        <p className="mt-2">
          Dive into my GitHub portfolio to explore my projects and see how I
          bring ideas to life with React, Node.js, Python, and more. Let’s
          collaborate and innovate together!
        </p>
      </div>
    </div>
  );
}

export default GitHub;
