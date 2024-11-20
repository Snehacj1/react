import React from "react";

function About() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600">About Me</h1>
      <p className="mt-4 text-gray-700">
        Hello! I’m Sneha C J, a passionate Software Engineer with a B.E. in Computer Science from the Bangalore
        Institute of Technology. With a CGPA of 8.97, I developed a strong foundation in programming and problem-solving.
      </p>
      <p className="mt-2 text-gray-700">
        I have worked on various projects, including a Counterfeit Note Detection System and an Autism Diagnosis
        tool, where I applied machine learning algorithms. I also built several applications, such as a College
        Events Management System and a Caesar Cipher encryption tool, showcasing my skills in both frontend and
        backend technologies.
      </p>
      <p className="mt-2 text-gray-700">
        Apart from coding, I am deeply interested in tech trends, nutrition, and sustainable practices. I am eager
        to contribute my skills to meaningful projects and solve real-world problems.
      </p>
      <p className="mt-2 text-gray-700">
        You can connect with me on my <a href="https://www.linkedin.com/in/sneha-c-j-510933254/" className="text-blue-500">LinkedIn</a> or
        view my projects on <a href="https://github.com/19friend" className="text-blue-500">GitHub</a>.
      </p>
    </div>
  );
}

export default About;
