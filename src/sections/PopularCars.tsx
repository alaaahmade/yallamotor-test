import React from 'react';
import CarStructuredData from '@/components/CarStructuredData';
import Slider from '@/components/slider/Slider';
import PopularCarsSkeleton from '../components/skeletons/PopularCarsSkeleton';
import { CarI } from '@/types/cars';

interface PopularCarsProps {
  cars: CarI[];
  loading: boolean;
  error: string | null;
  currentSlide: number;
  handlePrev: () => void;
  handleNext: () => void;
}

export default function PopularCars({ cars, loading, error, currentSlide, handlePrev, handleNext }: PopularCarsProps) {
  const slidesPerGroup = 5;
  const totalSlides = Math.ceil(cars.length / slidesPerGroup);
  return (
    <section className="py-8 px-6 md:px-35" id="popular-cars" aria-label="Popular Electric Cars in UAE">
      <div className="">
        <h2 className="text-lg font-semibold mb-4">Popular Electric Cars in UAE</h2>
        <p className="text-gray-600 mb-6">
          Discover our curated selection of the most popular electric vehicles in the UAE. 
          Each car is carefully chosen based on performance, value, and customer satisfaction.
        </p>
        {loading && (
          <PopularCarsSkeleton />
        )}
        {error && (
          <div className="text-center py-6 text-red-500">{error}</div>
        )}
        {!loading && !error && (
          cars.length > 0 ? (
            <>
              <CarStructuredData cars={cars} />
              <Slider handlePrev={handlePrev} handleNext={handleNext} currentSlide={currentSlide} totalSlides={totalSlides} slidesPerGroup={slidesPerGroup} PopularCarsDATA={cars}/>
            </>
          ) : (
            <p className="text-center py-6 text-gray-500">No popular cars available.</p>
          )
        )}
      </div>
    </section>
  );
} 