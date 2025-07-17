'use client'
import { Search } from "lucide-react";

import React, { useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  setShowPrice,
  setMinValue,
  setMaxValue,
  setMinRadio,
  setMaxRadio,
  resetPriceRange,
  donePriceRange,
} from '../store/slices/searchSlice';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const { showPrice, minValue, maxValue, minRadio, maxRadio } = useAppSelector(state => state.search);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPrice) return;
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        dispatch(setShowPrice(false));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPrice, dispatch]);

  function handleReset() {
    dispatch(resetPriceRange());
  }
  function handleDone() {
    dispatch(donePriceRange());
  }

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg shadow-gray-200/70 p-4 mb-[4em]">
        <form className="flex flex-wrap md:flex-nowrap items-center gap-4">
          <div className="flex-1 min-w-[180px] relative">
            <input
              type="text"
              placeholder="Select car make/brand"
              className="w-full h-12 pl-4 pr-10 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 text-gray-600"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="relative">
            <button
              type="button"
              className="h-12 px-4 border-2 border-gray-200 rounded-lg bg-white flex items-center gap-2"
              onClick={() => dispatch(setShowPrice(!showPrice))}
            >
              Price Range
              <span className="ml-2">&#9660;</span>
            </button>
            {showPrice && (
              <div ref={popupRef} className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4 w-[370px]">
                <div className="mb-3 font-bold text-base">Price Range (AED)</div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-blue-700 text-sm mb-1">Minimum:</label>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full border rounded px-2 py-1 mb-2"
                      value={minValue}
                      onChange={e => {
                        dispatch(setMinValue(e.target.value));
                      }}
                    />
                    <div className="h-32 overflow-y-auto flex flex-col gap-1 pr-1">
                      {[0, 1000, 10000, 20000, 30000].map((v) => (
                        <label key={v} className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                          <input
                            type="radio"
                            name="min"
                            value={v}
                            checked={minRadio === String(v)}
                            onChange={() => {
                              dispatch(setMinRadio(String(v)));
                            }}
                          />
                          {v}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-blue-700 text-sm mb-1">Maximum:</label>
                    <input
                      type="number"
                      placeholder="To"
                      className="w-full border rounded px-2 py-1 mb-2"
                      value={maxValue}
                      onChange={e => {
                        dispatch(setMaxValue(e.target.value));
                      }}
                    />
                    <div className="h-32 overflow-y-auto flex flex-col gap-1 pr-1">
                      {[10000, 20000, 40000, 60000].map((v) => (
                        <label key={v} className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
                          <input
                            type="radio"
                            name="max"
                            value={v}
                            checked={maxRadio === String(v)}
                            onChange={() => {
                              dispatch(setMaxRadio(String(v)));
                            }}
                          />
                          {v}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="button"
                    className="text-gray-500 border px-4 py-2 rounded bg-white hover:bg-gray-50 cursor-pointer"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 font-semibold cursor-pointer"
                    onClick={handleDone}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          <button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center gap-2 cursor-pointer">
            <Search className="w-4 h-4" />
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

