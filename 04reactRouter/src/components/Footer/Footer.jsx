import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 lg:mb-0">
          <img
            src="/image/logo.png"
            alt="Logo"
            className="h-16 w-16 rounded-lg ml-20"
          />
        </div>

        {/* Links Section */}
        <div className="flex space-x-6 mr-20">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
