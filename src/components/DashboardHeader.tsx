"use client";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { Input } from "./ui/Input";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";

const DashboardHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes("messages")) return "Messages";
    if (path.includes("analytics")) return "Analytics";
    if (path.includes("settings")) return "Settings";
    if (path.includes("group")) return "My Group";
    if (path.includes("pack")) return "My Pack";
    return "My Portfolio";
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 px-6 flex justify-between items-center sticky top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      {/* Left: Page Title & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <button
          className="block md:hidden text-gray-800"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FiMenu size={24} />
        </button>
        <h2 className="lg:text-xl text-base font-bold">{getPageTitle()}</h2>
      </div>

      {/* Right: Search and Icons */}
      <div className="flex items-center justify-end gap-x-4 lg:w-4/12">
        <div className="relative">
          {/* Desktop Search */}
          <div className="hidden md:block w-full max-w-[300px] relative">
            <CiSearch className="absolute top-3 left-3 h-5 w-5 text-gray-800" />
            <Input
              type="text"
              placeholder="Search"
              className="w-full bg-white border-gray-100 px-4 py-2 border rounded-md focus:outline-none pl-9"
            />
          </div>

          {/* Mobile Search */}
          <div className="md:hidden">
            {showSearchInput ? (
              <div className="relative">
                <Input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  className="w-[180px] bg-white border px-4 py-2 border-gray-200 rounded-md pl-9"
                />
                <CiSearch className="absolute top-2.5 left-2.5 h-5 w-5 text-gray-800" />
              </div>
            ) : (
              <button
                className="h-9 w-9 border border-gray-100 rounded-full bg-white flex items-center justify-center"
                onClick={() => setShowSearchInput(true)}
              >
                <CiSearch size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <button className="h-9 w-9 border border-gray-100 rounded-full bg-white flex items-center justify-center">
            <GoPlus className="w-5 h-5 text-gray-800" />
          </button>
          <button className="relative">
            <FaRegBell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-[0.8px] right-[0.5px] bg-red-500 text-white text-xs rounded-full px-1 h-2 w-2" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
