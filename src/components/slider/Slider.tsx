import React from 'react'
import CarCard from '../cards/CarCard'
import groupCarsForMobile from '../groupCarsForMobile';

export interface CarI {
  brand: string;
  model: string;
  year: string;
  rank?: string;
  link: string;
  image: string;
  title: string;
  price: string;
  rating: number;
}

interface SlideProps {
  handlePrev: () => void;
  handleNext: () => void;
  currentSlide: number;
  totalSlides: number;
  slidesPerGroup: number;
  PopularCarsDATA: CarI[];
}
const Slider = ({handlePrev, handleNext, currentSlide, totalSlides, slidesPerGroup, PopularCarsDATA}: SlideProps) => {
  const mobileGroups = groupCarsForMobile(PopularCarsDATA);
  return (
        <div className="relative w-full shadow-gray-200 shadow-lg">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 z-100 cursor-pointer"
            disabled={currentSlide === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative overflow-hidden">
            {/* Mobile Layout: 1.5 columns per slide, each column = 2 cars stacked */}
            <div className="flex transition-transform duration-500 ease-in-out w-full md:hidden"
              style={{ transform: `translateX(-${currentSlide * 66.6667}%)` }}
            >
              {mobileGroups.map((group: CarI[], idx: number) => (
                <div key={idx} className="flex-shrink-0 w-2/3 px-1">
                  <div className="flex flex-col gap-2 h-full">
                    {group.map((car: CarI) => (
                      <CarCard key={car.title} car={car}/>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Layout: keep existing */}
            <div className="hidden md:flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {[...Array(totalSlides)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex-shrink-0 w-[100%]">
                  <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-0">
                    {PopularCarsDATA
                      .slice(groupIndex * slidesPerGroup, (groupIndex + 1) * slidesPerGroup)
                      .map((car, i) => (
                        <div key={car.title} className="flex flex-col gap-4">
                          <CarCard car={car}/>
                          {PopularCarsDATA[groupIndex * slidesPerGroup + i + 4] && (
                            <CarCard car={PopularCarsDATA[groupIndex * slidesPerGroup + i + 4]} key={PopularCarsDATA[groupIndex * slidesPerGroup + i + 4].title} />
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            disabled={currentSlide === totalSlides - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
  )
}

export default Slider
