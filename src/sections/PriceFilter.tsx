'use client'
import { CARS } from '@/mock/cars';
import CarCard from '@/components/cards/CarCard';
import { useState } from 'react';

const priceRanges = [
  {
    label: 'FROM 50,000 AED TO 100,000',
    from: '50,000',
    to: '100,000',
    key: 'under100k'
  },
  {
    label: 'FROM 100,000 AED TO 200,000',
    from: '101,000',
    to: '150,000',
    key: '100k-200k'
  },
  {
    label: 'Above AED 200,000',
    from: '151,000',
    to: '',
    key: 'above200k'
  }
];

export default function PriceFilter() {
  const [selectedRange, setSelectedRange] = useState<string>('under100k');

  const filterCars = (range: { from: string; to: string }) => {
    return CARS.filter(car => {
      let carPrice = 0;
      if (car.price.includes('From')) {
        const priceStr = car.price.replace('From ', '').replace('AED', '').replace(',', '').trim();
        carPrice = parseInt(priceStr);
      } else if (car.price.includes('AED')) {
        const priceStr = car.price.replace('AED', '').replace(',', '').split('-')[0].trim();
        carPrice = parseInt(priceStr);
      } else {
        return false;
      }

      const from = parseInt(range.from.replace(/,/g, ''));
      const to = range.to ? parseInt(range.to.replace(/,/g, '')) : Infinity;
      
      return carPrice >= from && carPrice <= to;
    });
  };

  return (
    <section className="bg-gray-100 py-8 px-6 md:px-20">
      <div className="mx-auto px-4 md:px-20 flex flex-col items-center md:items-start justify-center md:justify-start">
        <h1 className="text-2xl font-semibold mb-6">Electric Cars By Budget in UAE</h1>
        <div className="flex flex-wrap gap-0 mb-6">
          {priceRanges.map((range) => (
            <button
              key={range.key}
              onClick={() => setSelectedRange(range.key)}
              className={`px-4 py-2 rounded-0 font-medium ${
                selectedRange === range.key
                ?  ' text-blue-600 border-b-2  border-blue-600 hover:bg-gray-50'
                : ' text-gray-600 border-b-2 border-gray-300 hover:bg-gray-50'
              }`}
              aria-label={`Select price range: ${range.label}`}
            >
              {range.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 w-full">
          {filterCars(priceRanges.find(r => r.key === selectedRange)!).map((car) => (
            <CarCard key={car.title} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
} 