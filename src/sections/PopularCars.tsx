'use client'
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { nextSlide, prevSlide, fetchPopularCars } from '../store/slices/popularCarsSlice';
import CarStructuredData from '@/components/CarStructuredData';
import Slider from '@/components/slider/Slider';
import PopularCarsSkeleton from '../components/skeletons/PopularCarsSkeleton';

export default function PopularCars() {
  const dispatch = useAppDispatch();
  const { cars, loading, error, currentSlide } = useAppSelector(state => state.popularCars);
  const slidesPerGroup = 5;
  const totalSlides = Math.ceil(cars.length / slidesPerGroup);

  useEffect(() => {
    dispatch(fetchPopularCars());
  }, [dispatch]);

  const handlePrev = () => {
    dispatch(prevSlide());
  };

  const handleNext = () => {
    dispatch(nextSlide(totalSlides - 1));
  };

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
          <>
            <CarStructuredData cars={cars} />
            <Slider handlePrev={handlePrev} handleNext={handleNext} currentSlide={currentSlide} totalSlides={totalSlides} slidesPerGroup={slidesPerGroup} PopularCarsDATA={cars}/>
          </>
        )}
      </div>
    </section>
  );
} 