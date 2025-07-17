import CarDetails from '@/components/carDetails';
import { CarI } from '@/types/cars';
import type { Metadata } from "next"


async function getCar(carId: string): Promise<CarI | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://yallamotor-test.vercel.app';
    const res = await fetch(`${baseUrl}/api/cars/${carId}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      id: data.id,
      title: data.title,
      image: data.image,
      rating: data.rating,
      author: data.make || "YallaMotor",
      readTime: "5 min read",
      date: data.year || "2025",
      sections: data.sections || [],
      brand: data.brand || '',
      model: data.model || '',
      year: data.year || '',
      price: data.price || '',
      link: data.link || '',
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ carId: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const car = await getCar(resolvedParams.carId);

  if (!car) {
    return { title: "Car Not Found" };
  }

  // Use the first section's content for the main description for SEO
  const description = car?.sections && (car?.sections?.length > 0 ? car?.sections[0].content : `Details about the ${car.title}.`);

  return {
    title: `${car.title}`,
    description: description,
    openGraph: {
      title: car.title,
      description: description,
      images: [car.image],
    },
  };
}

export default async function CarPage({ params }: { params: Promise<{ carId: string }> }) {
  const resolvedParams = await params;
  
  const car = await getCar(resolvedParams.carId);
  
  if (!car) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
        <p>The car you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <CarDetails car={car}/>
  )
}
