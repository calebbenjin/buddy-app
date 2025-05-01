
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
        />
        <div className="absolute left-3 top-2 text-gray-400">
          <BsSearch size={18} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
