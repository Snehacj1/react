import React from "react";

function Contact() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600">Let’s Connect!</h1>
      <p className="mt-4 text-gray-700">
        Have any questions or want to work together? Feel free to reach out to me!
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
        <ul className="mt-4 space-y-4 text-lg text-gray-700">
          <li>
            <strong>Phone:</strong> <a href="tel:+91 6361058227" className="text-blue-500">+91 6361058227</a>
          </li>
          <li>
            <strong>Email:</strong> <a href="mailto:snehajagadeesh914@example.com" className="text-blue-500">snehajagadeesh914@example.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sneha-c-j-510933254/" target="_blank" className="text-blue-500">Visit my LinkedIn</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/snehacj1" target="_blank" className="text-blue-500">Check out my GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
