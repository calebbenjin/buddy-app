import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiMiniArrowTrendingDown, HiMiniArrowTrendingUp } from "react-icons/hi2";

interface PotentialMemberProps {
  name: string;
  username: string;
  percentage: number;
  isPositive: boolean;
}

const PotentialMember: React.FC<PotentialMemberProps> = ({
  name,
  username,
  percentage,
  isPositive,
}) => {
  return (
    <div className="flex flex-col items-center border border-gray-200 rounded-lg bg-white p-2">
      <div className="w-16 h-16 rounded-full bg-gray-200 mb-2">
        <img
          src="/userpic.png"
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h4 className="font-medium text-sm text-center">{name}</h4>
      <p className="text-xs text-gray-500">{username}</p>
      <div className="flex items-center mt-2">
        <span
          className={`mr-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
        >
          {isPositive ? <HiMiniArrowTrendingUp size={14} className="text-green-500" /> : <HiMiniArrowTrendingDown size={14} className="text-orange-400" />}
        </span>
        <span
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default PotentialMember;
