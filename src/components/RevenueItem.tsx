import React from "react";

interface RevenueItemProps {
  amount: string | number;
  label: string;
  icon: React.ReactNode;
}

const RevenueItem: React.FC<RevenueItemProps> = ({ amount, label, icon }) => {
  
  return (
    <div className="flex items-center justify-between border border-gray-200 p-3 rounded-xl">
      <div>
        <h3 className="font-bold">{amount}</h3>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

export default RevenueItem;
