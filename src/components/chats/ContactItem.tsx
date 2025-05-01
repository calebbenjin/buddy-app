import React from "react";
import { BsCheck, BsCheckCircle } from "react-icons/bs";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status?: "online" | "offline";
  time: string;
  lastMessage: string;
  unread: number;
  read: boolean;
}

interface ContactItemProps {
  contact: Contact;
  isActive: boolean;
  onClick: () => void;
}

function ContactItem({
  contact,
  isActive,
  onClick,
}: {
  contact: {
    id: number;
    name: string;
    avatar: string;
    status: string;
    lastMessage: string;
    time: string;
    unread: number;
    read?: boolean;
  };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex items-center p-2 border-b border-gray-100 cursor-pointer hover:bg-white hover:shadow-xl rounded-xl mb-1 ${
        isActive ? "bg-gray-50" : ""
      }`}
      onClick={onClick}
    >
      <div className="relative mr-3">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-10 h-10 rounded-full"
        />
        {contact.status === "online" && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-xs text-[#FF8600] truncate">
            {contact.name}
          </h4>
          <span className="text-xs text-gray-500">{contact.time}</span>
        </div>
        <p className="text-xs text-gray-600 truncate whitespace-pre-line">
          {contact.lastMessage}
        </p>
      </div>
      <div className="ml-2 flex flex-col items-end">
        {contact.unread > 0 && (
          <span className="bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {contact.unread}
          </span>
        )}
        {contact.read && (
          <span className="text-blue-500">
            <BsCheck size={16} />
          </span>
        )}
      </div>
    </div>
  );
}

export default ContactItem;
