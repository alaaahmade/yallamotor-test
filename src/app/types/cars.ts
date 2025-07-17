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
  link?: string;
  url?: string;
}