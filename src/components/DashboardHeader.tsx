import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";

const DashboardHeader = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-10">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <button className="relative">
          <FaBell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>
        <FaUserCircle className="w-8 h-8 text-gray-600" />
      </div>
    </header>
  );
};

export default DashboardHeader;
