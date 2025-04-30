import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { StockItem } from "@/types";

interface WatchlistItemProps {
  stock: StockItem;
}

const WatchlistItem: React.FC<WatchlistItemProps> = ({ stock }) => {
  const data = stock.data.map((v, i) => ({ index: i, value: v }));
  const midValue = (Math.max(...stock.data) + Math.min(...stock.data)) / 2;

  return (
    <div className="bg-gray-100 p-4 rounded-xl mb-3 flex items-center justify-between">
      {/* Left: Info + Arrow */}
      <div className="flex items-start space-x-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{stock.symbol}</h3>
          <p className="text-gray-500 font-semibold">
            ${stock.price.toFixed(2)}
          </p>
          <p
            className={`text-sm font-semibold text-red-300 ${
              stock.change >= 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {stock.change >= 0 ? "+" : ""}
            {stock.change.toFixed(2)}%
          </p>
        </div>
        <div className="pt-1">
          {stock.change >= 0 ? (
            <FaArrowUp className="text-green-500" />
          ) : (
            <FaArrowDown className="text-red-500" />
          )}
        </div>
      </div>

      {/* Right: Chart */}
      <div className="w-32 h-20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Dashed Mid Line */}
            <ReferenceLine
              y={midValue}
              stroke="#ccc"
              strokeDasharray="6 4"
              ifOverflow="extendDomain"
            />
            {/* Hide Tooltip */}
            <Tooltip
              contentStyle={{ display: "none" }}
              wrapperStyle={{ display: "none" }}
            />
            {/* Main Yellow Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FBBF24"
              strokeWidth={2}
              strokeLinecap="round"
              dot={{
                fill: "#FBBF24",
                stroke: "#FDE68A",
                strokeWidth: 4,
                r: 4,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WatchlistItem;
