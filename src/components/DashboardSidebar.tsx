import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuUserRound, LuUsersRound } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdOutlineShowChart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { logout } from "@/store/services/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleSidebar } from "@/store/slices/sidebarSlice";

const navItems = [
  {
    title: "My Portfolio",
    href: "/dashboard",
    icon: <LuUserRound size={23} />,
  },
  {
    title: "My Group",
    href: "/dashboard/my-group",
    icon: <LuUsersRound size={23} />,
  },
  { title: "Messages", href: "/dashboard/messages", icon: <TfiEmail /> },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: <MdOutlineShowChart size={23} />,
  },
  {
    title: "Pack",
    href: "/dashboard/pack",
    icon: <HiOutlineCurrencyDollar size={23} />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <CiSettings size={23} />,
  },
];

const DashboardSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <>
      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      <aside
        className={`lg:sticky top-0 fixed inset-y-0 left-0 z-50 w-64 h-screen bg-white border-transparent flex flex-col justify-between transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative lg:flex`}
      >
        <div>
          <button className="absolute top-6 left-3 md:hidden">
            <IoIosCloseCircleOutline
              size={30}
              className="text-orange-500 hover:text-gray-800"
              onClick={() => dispatch(toggleSidebar())}
            />
          </button>

          <div className="p-6">
            <img
              src="/buddy-logo.png"
              alt="Logo"
              width="120"
              height="120"
              className="mx-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-2 pr-4 mt-8">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.href;
              return (
                <div
                  key={idx}
                  className={`pl-4 rounded transition duration-200 ease-in-out ${
                    isActive
                      ? "border-l-4 border-orange-600 bg-white"
                      : "hover:border-l-4 border-transparent hover:border-orange-600"
                  }`}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-3 py-3 text-sm rounded-xl border transition duration-200 ${
                      isActive
                        ? "bg-white text-orange-600 shadow border-white"
                        : "text-[#818187] hover:bg-white hover:shadow-xl hover:border hover:border-gray-100 border-transparent"
                    }`}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Avatar section */}
        <div className="p-4 relative shadow-2xl border border-gray-100 rounded-lg bg-white mx-4 mb-4">
          <img
            src="/userpic.png"
            alt="User"
            width={60}
            height={60}
            className="rounded-full object-cover absolute -top-6 left-1/2 -translate-x-1/2 border-2 border-white"
          />
          <div className="flex-1 mt-6 text-center">
            <p className="font-medium text-sm">Caleb Benjamin</p>
            <small className="text-gray-400">Developer</small>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 rounded-lg mx-auto text-xs bg-[#FF860029] text-[#FF8600] mt-1 hover:opacity-80 focus:ring-2 focus:ring-orange-300 transition px-4 py-2"
            >
              <FiLogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
