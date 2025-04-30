import React from "react";
import { Link } from "react-router-dom";
import { LuUserRound, LuUsersRound } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdOutlineShowChart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import Button from "./ui/Button";

const navItems = [
  {
    title: "My Portfolio",
    href: "/dashboard",
    icon: <LuUserRound size={23} />,
  },
  {
    title: "My Group",
    href: "/dashboard",
    icon: <LuUsersRound size={23} />,
  },
  { title: "Messages", href: "/dashboard/messages", icon: <TfiEmail /> },
  {
    title: "Analytics",
    href: "/dashboard",
    icon: <MdOutlineShowChart size={23} />,
  },
  {
    title: "Pack",
    href: "/dashboard",
    icon: <HiOutlineCurrencyDollar size={23} />,
  },
  {
    title: "Settings",
    href: "/dashboard",
    icon: <CiSettings size={23} />,
  },
];

const DashboardSidebar = () => {
  const handleLogout = () => {
    // logic here
    console.log("Logged out!");
  };

  return (
    <aside className="w-64 h-screen bg-white border-transparent hidden md:flex flex-col justify-between fixed top-0 left-0 z-20">
      <div>
        <div className="p-6">
          <img
            src="/buddy-logo.png"
            alt="Logo-Image"
            width="120"
            height="120"
            className="mx-auto"
          />
        </div>
        <nav className="flex flex-col space-y-2 pr-4 mt-8">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="hover:border-l-4 border-orange-600 pl-4 transition duration-200 ease-in-out rounded"
            >
              <Link
                to={item.href}
                className="flex items-center gap-3 px-3 py-3 text-sm rounded-xl hover:bg-white hover:shadow-xl hover:border hover:border-gray-100 text-[#818187] border border-transparent transition duration-200 ease-in-out"
              >
                {item.icon}
                {item.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      {/* Avatar Card */}
      <div className="p-4 relative shadow-2xl border border-gray-100 rounded-lg bg-white mx-8 mb-4">
        <img
          src="/userpic.png"
          alt="User Profile"
          width={60}
          height={60}
          className=" rounded-full object-cover absolute -top-6 left-17 border-2 border-white"
        />
        <div className="flex-1 mt-6 text-center">
          <p className="font-medium text-sm">Caleb Benjamin</p>
          <small className="text-gray-400">Developer</small>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 rounded-lg mx-auto text-xs bg-[#FF860029] text-[#FF8600] mt-1 hover:opacity-80 focus:ring-2 focus:ring-orange-300 transition duration-200 ease-in-out px-4 py-2"
          >
            <FiLogOut size={14} /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
