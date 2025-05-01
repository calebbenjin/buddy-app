import React from 'react'

// Bar Chart Component
const BarChart = () => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const values = [400, 420, 350, 450, 400, 570, 480, 350, 400, 450, 650, 420];
  const maxValue = Math.max(...values);
  
  return (
    <div className="w-full h-48">
      <div className="flex h-full">
        <div className="flex flex-col justify-between text-xs text-gray-500 pr-2">
          <span>1000</span>
          <span>800</span>
          <span>600</span>
          <span>400</span>
          <span>200</span>
          <span>0</span>
        </div>
        <div className="flex-1 flex items-end">
          {months.map((month, idx) => (
            <div key={month} className="flex-1 flex flex-col items-center">
              <div 
                className={`w-6 rounded-t ${idx === 5 ? 'bg-orange-500' : idx === 4 ? 'bg-yellow-400' : 'bg-gray-200'}`}
                style={{ height: `${(values[idx] / maxValue) * 100}%` }}
              ></div>
              <span className="text-xs text-gray-500 mt-2">{month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart