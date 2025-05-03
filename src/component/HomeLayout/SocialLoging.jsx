import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const SocialLoging = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-4 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-base-content">Login With</h2>
      <button className="flex items-center justify-center w-full p-2 mb-3 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition">
        <FaGoogle className="mr-2" />
        Login with Google
      </button>
      <button  className="flex items-center justify-center w-full p-2 text-sm font-medium text-gray-800 border border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <FaGithub className="mr-2" />
        Login with Github
      </button>
    </div>
  );
};

export default SocialLoging;