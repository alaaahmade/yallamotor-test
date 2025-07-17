import { Guide } from '@/app/types/cars';
import GuideCard from '@/components/cards/GuideCard';
import { GuideStructuredData } from '@/components/StructuredData';


interface GuideCardsProps {
  guides: Guide[];
}

export default function GuideCards({ guides }: GuideCardsProps) {
  return (
    <section className="py-12 bg-gray-100 px-6 md:px-8 flex align-center justify-center" id="car-guides" aria-label="Car Guides and Information">
      <div className="container mx-auto px-2 md:px-8">
        <h2 className="text-2xl font-bold mb-8">Car Guides</h2>
        <p className="text-gray-600 mb-8">
          Explore our comprehensive guides to help you make informed decisions about your car.
        </p>
        <GuideStructuredData guides={guides} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <GuideCard guide={guide} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}