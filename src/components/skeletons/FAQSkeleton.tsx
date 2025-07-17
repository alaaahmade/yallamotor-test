import React from 'react';

export default function FAQSkeleton() {
  return (
    <section className="py-12 animate-pulse" aria-label="Loading FAQs">
      <div className="container mx-auto px-4">
        <div className="mb-8 h-10 w-1/2 bg-gray-200 rounded mx-auto" />
        <div className="mb-8 h-5 w-2/3 bg-gray-200 rounded mx-auto" />
        <div className="flex flex-col gap-6 mb-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded-lg w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
