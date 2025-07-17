export interface CarI {
  brand: string;
  model: string;
  year: string;
  title: string;
  price: string;
  image: string;
  link: string;
  rating: number;
}
export interface CarStructuredDataProps {
  cars: Array<CarI>;
}

export interface Guide {
  title: string;
  description: string;
  icon: any;
  link?: string;
  url?: string;
}