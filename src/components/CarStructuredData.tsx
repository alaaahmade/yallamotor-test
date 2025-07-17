import { CarStructuredDataProps } from '@/app/types/cars';
import Script from 'next/script';



export default function CarStructuredData({ cars }: CarStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: cars.map((car, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: car.title,
        description: `${car.brand} ${car.model} ${car.year}`,
        image: car.image,
        brand: car.brand,
        model: car.model,
        year: parseInt(car.year),
        offers: {
          '@type': 'Offer',
          price: parseFloat(car.price),
          priceCurrency: 'AED',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  return (
    <Script
      id="car-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
