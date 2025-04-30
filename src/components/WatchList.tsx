import React from "react";
import WatchlistItem from "./WatchlistItem";
import { StockItem } from "@/types";

interface WatchlistProps {
  items: StockItem[];
  onViewAll?: () => void;
}

const WatchList: React.FC<WatchlistProps> = ({ items, onViewAll }) => {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-gray-900">Watchlist</h2>
        {onViewAll && (
          <button
            className="text-sm font-semibold text-orange-500"
            onClick={onViewAll}
          >
            VIEW ALL
          </button>
        )}
      </div>

      {items.map((stock) => (
        <WatchlistItem key={stock.symbol} stock={stock} />
      ))}
    </div>
  );
};

export default WatchList;
