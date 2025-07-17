import { reviewsCars } from '@/mock/cars';
import Image from "next/image";
import Link from "next/link";

export default function CarReviews() {
  

  return (
    <section className="py-8">
      <div className="mx-auto px-20">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-8">Discover How Each Car Scores in Expert Evaluations</h2>
        <button className="text-blue-500 border border-blue-500 hover:text-blue-600 hover:border-blue-600 font-bold py-1 px-4 rounded">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {reviewsCars.map((review, index) => (
            <Link
              key={index}
              href={review.link}
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={review.image}
                  alt={`${review.brand} ${review.model} ${review.year}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-500">Expert Car Ratings</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
                <div className="flex items-center text-sm flex-wrap gap-1 text-gray-500">
                <Image src="https://yallamotor-production-assets.s3.ap-south-1.amazonaws.com/uploads/misc/yallamotor-icon.png" alt="brand" width={15} height={15}/>
                  <p className="text-sm text-gray-500">YallaMotor</p>
                <span>•</span>
                  <span>{review.date}</span>
                  <span>•</span>
                  <span>{review.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
