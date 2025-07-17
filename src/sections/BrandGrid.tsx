'use client'
import BrandCard from '@/components/cards/BrandCard';
import SearchBar from '@/components/SearchBar';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchBrands, toggleShowAll } from '../store/slices/brandGridSlice';
import { BrandStructuredData } from '@/components/StructuredData';
import React, { useEffect } from 'react';
import BrandGridSkeleton from '../components/skeletons/BrandGridSkeleton';

export default function BrandGrid() {
  const dispatch = useAppDispatch();
  const { brands, loading, error, showAll } = useAppSelector(state => state.brandGrid);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <section className="py-12" id="car-brands" aria-label="Popular Car Brands">
      <div className="container mx-auto px-2 md:px-8">
        <SearchBar/>
        <h2 className="text-2xl font-bold mb-8 text-center">Popular Car Brands</h2>
        <p className="text-gray-600 mb-8 text-center">
          Explore our selection of leading car brands, each known for their unique features and quality.
        </p>
        {loading && (
          <BrandGridSkeleton />
        )}
        {error && (
          <div className="text-center py-6 text-red-500">{error}</div>
        )}
        {!loading && !error && (
          <>
            <BrandStructuredData brands={brands} />
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {showAll ? brands.map((brand, i) => (
                <BrandCard brand={brand} key={i} />
              )) : brands.slice(0, 12).map((brand, i) => (
                <BrandCard brand={brand} key={i} />
              ))}
            </div>
            <div className="flex justify-center mt-0 ">
              <button
                onClick={() => dispatch(toggleShowAll())}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
