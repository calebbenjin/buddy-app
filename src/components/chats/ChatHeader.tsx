import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";


function ChatHeader({ contact }: { contact: any }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <div className="relative">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-10 h-10 rounded-full"
          />
          {contact.status === "online" && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <h3 className="ml-3 font-medium">{contact.name}</h3>
      </div>
      <div className="flex">
        <button className="mx-2 text-gray-500">
          <BsSearch size={20} />
        </button>
        <button className="mx-2 text-gray-500">
          <IoMdHeartEmpty size={24} />
        </button>
        <button className="mx-2 text-gray-500">
          <IoNotificationsOutline size={24} />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
