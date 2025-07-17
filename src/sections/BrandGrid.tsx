import BrandCard from '@/components/cards/BrandCard';
import SearchBar from '@/components/SearchBar';
import { BrandStructuredData } from '@/components/StructuredData';
import React from 'react';
import BrandGridSkeleton from '../components/skeletons/BrandGridSkeleton';
import { BrandsI } from '@/types/cars';

interface BrandGridProps {
  brands: BrandsI[];
  loading: boolean;
  error: string | null;
  showAll: boolean;
  onToggleShowAll: () => void;
}

export default function BrandGrid({ brands, loading, error, showAll, onToggleShowAll }: BrandGridProps) {

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
            {brands.length > 0 ? (
              <div className="flex flex-wrap gap-6 justify-center mb-12">
                {showAll ? brands.map((brand) => (
                  <BrandCard brand={brand} key={brand.id} />
                )) : brands.slice(0, 12).map((brand) => (
                  <BrandCard brand={brand} key={brand.id} />
                ))}
              </div>
            ) : (
              <p className="text-center py-6 text-gray-500">No brands available.</p>
            )}
            <div className="flex justify-center mt-0 ">
              <button
                onClick={onToggleShowAll}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label={showAll ? 'Show Less car brands' : 'Show More car brands'}
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
