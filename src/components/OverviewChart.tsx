import { chartData } from "@/utils/constant";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const brokers = ["Robbin Hood", "Amreitrade", "Fidelity", "Charles"];

const highlightedMonth = "JUN";

const OverviewChart: React.FC = () => {
  const [selectedBroker, setSelectedBroker] = useState("Robbin Hood");

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-3">
        <h2 className="text-xl font-bold text-gray-900">Overview</h2>
        <div className="flex gap-2 flex-wrap md:flex-nowrap overflow-x-auto md:overflow-visible">
          {brokers.map((broker) => (
            <button
              key={broker}
              className={`px-4 py-1 rounded-full text-sm font-medium transition whitespace-nowrap ${
                selectedBroker === broker
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setSelectedBroker(broker)}
            >
              {broker}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[250px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: "#666", fontSize: 12 }} />
            <YAxis
              tick={{ fill: "#999", fontSize: 12 }}
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              background={{ fill: "#F3F4F6" }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.name === highlightedMonth &&
                    selectedBroker === "Robbin Hood"
                      ? "#FF8C00"
                      : "#E5E7EB"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverviewChart;
