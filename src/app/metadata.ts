import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BitTest - Your Ultimate Car Guide',
  description: 'Discover the best car deals, reviews, and guides. Find your perfect car with our comprehensive selection and expert advice.',
  keywords: 'cars, car deals, car reviews, car guides, automotive, vehicles',
  
  // Open Graph
  openGraph: {
    title: 'BitTest - Your Ultimate Car Guide',
    description: 'Discover the best car deals, reviews, and guides.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'BitTest',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'BitTest - Your Ultimate Car Guide',
    description: 'Discover the best car deals, reviews, and guides.',
  },
  
  // Additional SEO
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};
