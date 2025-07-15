'use client'
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [showPrice, setShowPrice] = useState(false);

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg shadow-gray-200/70 p-4 mb-[4em]">
        <form className="flex flex-wrap md:flex-nowrap items-center gap-4">
          {/* Main search input */}
          <div className="flex-1 min-w-[180px] relative">
            <input
              type="text"
              placeholder="Select car make/brand"
              className="w-full h-12 pl-4 pr-10 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 text-gray-600"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Price Range Popover */}
          <div className="relative">
            <button
              type="button"
              className="h-12 px-4 border-2 border-gray-200 rounded-lg bg-white flex items-center gap-2"
              onClick={() => setShowPrice((v) => !v)}
            >
              Price Range
              <span className="ml-2">&#9660;</span>
            </button>
            {showPrice && (
              <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4 w-80">
                <div className="mb-2 font-bold">Price Range (AED)</div>
                <div className="flex gap-4">
                  <div>
                    <label className="block text-blue-700 text-sm">Minimum:</label>
                    <input type="number" placeholder="0" className="input input-sm border rounded w-20" />
                    {/* Quick select radios */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[1000, 10000, 20000, 30000, 40000, 50000].map((v) => (
                        <label key={v} className="flex items-center gap-1">
                          <input type="radio" name="min" value={v} />
                          {v}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-blue-700 text-sm">Maximum:</label>
                    <input type="number" placeholder="To" className="input input-sm border rounded w-20" />
                    {/* Quick select radios */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[10000, 20000, 40000, 60000, 80000, 100000].map((v) => (
                        <label key={v} className="flex items-center gap-1">
                          <input type="radio" name="max" value={v} />
                          {v}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button type="button" className="text-gray-500 border px-3 py-1 rounded">Reset</button>
                  <button type="button" className="bg-blue-600 text-white px-3 py-1 rounded">Done</button>
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

