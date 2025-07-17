import { ReviewsI } from '@/types/cars';
import DiscoverCarCard from '@/components/cards/DiscoverCarCard';

interface CarReviewsProps {
  reviews: ReviewsI[];
}

export default function CarReviews({ reviews }: CarReviewsProps) {
  

  return (
    <section className="py-8 px-6 md:px-35">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4 py-2">
          <h2 className="text-2xl font-bold mb-4 md:mb-8 py-2">Discover How Each Car Scores in Expert Evaluations</h2>
          <button className="self-start md:self-auto text-blue-500 border border-blue-500 hover:text-blue-600 hover:border-blue-600 font-bold py-1 px-4 rounded">View All</button>
        </div>
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            {reviews.map((review) => (
              <DiscoverCarCard key={review.id} review={review}/>
            ))}
          </div>
        ) : (
          <p className="text-center py-6 text-gray-500">No reviews available.</p>
        )}
      </div>
    </section>
  );
}
