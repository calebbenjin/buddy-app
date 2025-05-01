import React from "react";

interface DateSeparatorProps {
  date: string;
}

const DateSeparator: React.FC<DateSeparatorProps> = ({ date }) => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="border-t border-gray-200 flex-grow" />
      <span className="px-3 text-xs text-gray-500">{date}</span>
      <div className="border-t border-gray-200 flex-grow" />
    </div>
  );
};

export default DateSeparator;
