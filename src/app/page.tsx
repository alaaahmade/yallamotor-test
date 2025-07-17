import HeroBanner from "../sections/HeroBanner";
import BrandGrid from "../sections/BrandGrid";
import GuideCards from "../sections/GuideCards";
import PopularCars from "../sections/PopularCars";
import PriceFilter from "../sections/PriceFilter";
import FAQ from "../sections/FAQ";
import BudgetSection from '@/components/skeletons/BudgetSection';
import CarReviews from '@/sections/CarReviews';
import SEO from '@/components/SEO';

export default function Home() {
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
          <BrandGrid />
          <GuideCards />
          <PopularCars />
          <PriceFilter />
          <BudgetSection/>
          <CarReviews />
          <FAQ />
        </main>
      </div>
    </div>
  );
}
