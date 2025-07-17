import React from 'react';

export default function BrandGridSkeleton() {
  return (
    <section className="py-12 animate-pulse" aria-label="Loading Car Brands">
      <div className="container mx-auto px-4">
        <div className="mb-8 h-10 w-1/2 bg-gray-200 rounded mx-auto" />
        <div className="mb-8 h-5 w-2/3 bg-gray-200 rounded mx-auto" />
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-32 h-20 bg-gray-200 rounded-lg" />
          ))}
        </div>
        <div className="flex justify-center">
          <div className="h-10 w-32 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
