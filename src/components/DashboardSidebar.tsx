
import { Link, useLocation } from "react-router-dom";
import { LuUserRound, LuUsersRound } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdOutlineShowChart } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

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
  const location = useLocation(); // ✅ current route

  const handleLogout = () => {
    // logic here
    console.log("Logged out!");
  };

  return (
    <aside className="w-64 h-screen bg-white border-transparent hidden lg:flex flex-col justify-between sticky top-0 z-20">
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
          {navItems.map((item, idx) => {
            const isActive = location.pathname === item.href;
            return (
              <div
                key={idx}
                className={`pl-4 transition duration-200 ease-in-out rounded ${
                  isActive
                    ? "border-l-4 border-orange-600 bg-white"
                    : "hover:border-l-4 border-transparent hover:border-orange-600"
                }`}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-3 text-sm rounded-xl border transition duration-200 ease-in-out ${
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
