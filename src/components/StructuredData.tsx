import Script from 'next/script';
import type { JSX } from 'react';
import { BrandsI } from '@/app/types/cars';

// Brand Structured Data
export function BrandStructuredData({ brands }: { brands: BrandsI[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: brands.map((brand, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Brand',
        name: brand.name,
        logo: brand.logo,
        description: brand.description,
      },
    })),
  };

  return (
    <Script
      id="brand-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// FAQ Structured Data
export function FAQStructuredData({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Guide Structured Data
export interface GuideStructuredDataProps {
  guides: Array<{
    title: string;
    description: string;
    icon: JSX.Element | (() => JSX.Element);
    link?: string;
    url?: string;
  }>;
}

export function GuideStructuredData({ guides }: GuideStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    step: guides.map((guide, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: guide.title,
      description: guide.description,
      url: guide.url,
    })),
  };

  return (
    <Script
      id="guide-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Review Structured Data
export function ReviewStructuredData({ reviews }: { reviews: Array<{ name: string; rating: number; review: string; date: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: reviews.map(review => ({
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
      review: review.review,
      author: review.name,
      datePublished: review.date,
    })),
  };

  return (
    <Script
      id="review-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
