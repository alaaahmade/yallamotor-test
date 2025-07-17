"use client";
import { useState } from "react";
import BrandGrid from "../sections/BrandGrid";
import GuideCards from "../sections/GuideCards";
import PopularCars from "../sections/PopularCars";
import PriceFilter from "../sections/PriceFilter";
import BudgetSection from '@/components/skeletons/BudgetSection';
import CarReviews from '@/sections/CarReviews';
import SellCarSection from '@/sections/SellCarSection';
import PopularVideosSection from '@/sections/PopularVideosSection';
import FAQSection from "../sections/FAQ";
import HeroBanner from "../sections/HeroBanner";
import SEO from '@/components/SEO';
import { BrandsI, CarI, FaqsI, Guide, ReviewsI, VideosI } from './types/cars';


export default function HomeClient({ cars, brands, faqs, videos, reviews, guides } : { cars: CarI[], brands: BrandsI[], faqs: FaqsI[], videos: VideosI[], reviews: ReviewsI[], guides: Guide[] }) {
  // UI state for all interactive sections
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  const handlePrev = () => setCurrentSlide((s) => Math.max(0, s - 1));
  const handleNext = () => setCurrentSlide((s) => s + 1);
  const onToggleShowAll = () => setShowAll((v) => !v);
  const onToggleOpenIndex = (idx: number) => setOpenIndex(idx);

  const loading = false;
  const error = null;

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen w-full flex flex-col relative overflow-x-hidden">
      <SEO
        title="BitTest - Your Ultimate Car Guide"
        description="Discover the best car deals, reviews, and guides. Find your perfect car with our comprehensive selection and expert advice."
        keywords={['cars', 'car deals', 'car reviews', 'car guides', 'automotive', 'vehicles']}
      />
      <div>
        <main className="flex-1">
          <HeroBanner />
          <BrandGrid
            brands={brands}
            loading={loading}
            error={error}
            showAll={showAll}
            onToggleShowAll={onToggleShowAll}
          />
          <GuideCards guides={guides} />
          <PopularCars
            cars={cars}
            loading={loading}
            error={error}
            currentSlide={currentSlide}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
          <PriceFilter />
          <BudgetSection />
          <SellCarSection />
          <CarReviews reviews={reviews} />
          <PopularVideosSection
            videos={videos}
            loading={loading}
            error={error}
          />
          <FAQSection
            faqs={faqs}
            loading={loading}
            error={error}
            openIndex={openIndex}
            onToggleOpenIndex={onToggleOpenIndex}
          />
        </main>
      </div>
    </div>
  );
}
