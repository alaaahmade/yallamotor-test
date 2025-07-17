import { JSX } from 'react';

export interface CarI {
  brand: string;
  model: string;
  year: string;
  title: string;
  price: string;
  image: string;
  link: string;
  rating: number;
  rank?: string;
}
export interface CarStructuredDataProps {
  cars: CarI[];
}

export interface Guide {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  url?: string;
}

export interface BrandsI {
  id: number;
  name: string;
  image: string;
  logo: string;
  description: string;
  brand: string;
  model: string;
}

export interface FaqsI {
  id: number;
  q: string;
  a: string;
}

export interface VideosI {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  details: string;
  category: string;
}

export interface ReviewsI {
  link: string;
  image: string;
  title: string;
  rating: number;
  date: string;
  readingTime: string;
  brand: string;
  model: string;
  year: string;
}

