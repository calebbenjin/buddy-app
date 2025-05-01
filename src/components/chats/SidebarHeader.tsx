import React from 'react'
import { FiEdit2 } from 'react-icons/fi';

interface User {
  avatar: string;
  name: string;
  title: string;
}

function SidebarHeader({ user }: { user: User }) {
  return (
    <div className="p-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-medium text-[#FF8600]">{user.name}</h3>
          <p className="text-xs text-gray-500">{user.title}</p>
        </div>
      </div>
      <button className="text-gray-500">
        <FiEdit2 size={18} />
      </button>
    </div>
  );
}

export default SidebarHeader