import React from "react";

const StatCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) => {
  const colorMap: { [key: string]: string } = {
    "New Members": "#E0F7FA", // light cyan
    "All Impressions": "#FFF0E0", // light green
    "Total Channels": "#E0FAF5", // light pink
    Default: "#FFF0E0", // fallback
  };

  const bgColor = colorMap[title] || colorMap["Default"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
        <div
          className={`p-3 rounded-full`}
          style={{ backgroundColor: bgColor }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
