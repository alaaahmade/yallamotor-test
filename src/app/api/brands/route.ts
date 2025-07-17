import { NextResponse } from 'next/server';

const brands = [
  { brand: "Toyota", image: "/assets/Toyota.jpg", name: 'Toyota', logo: '/brands/toyota.png', description: 'Reliable vehicles with a focus on quality and safety' },
  { brand: "Nissan", image: "/assets/nissan.png", name: 'Nissan', logo: '/brands/nissan.png', description: 'Innovative vehicles with advanced technology' },
  { brand: "Hyundai", image: "/assets/hyundai.jpg", name: 'Hyundai', logo: '/brands/hyundai.png', description: 'Affordable and reliable vehicles with modern features' },
  { brand: "Mercedes-Benz", image: "/assets/mercedes.png", name: 'Mercedes', logo: '/brands/mercedes.png', description: 'Premium automobiles and luxury vehicles' },
  { brand: "Kia", image: "/assets/kia.png", name: 'Kia', logo: '/brands/kia.png', description: 'Affordable and feature-packed vehicles' },
  { brand: "GAC", image: "/assets/GAC.png", name: 'GAC', logo: '/brands/gac.png', description: 'Chinese vehicles with a focus on quality and innovation' },
  { brand: "BMW", image: "/assets/BMW.png", name: 'BMW', logo: '/brands/bmw.png', description: 'Luxury vehicles with advanced technology and performance' },
  { brand: "Chevrolet", image: "/assets/chevrolet.jpeg", name: 'Chevrolet', logo: '/brands/chevrolet.png', description: 'American vehicles with diverse range of models' },
  { brand: "Ford", image: "/assets/ford.jpeg", name: 'Ford', logo: '/brands/ford.png', description: 'American vehicles with a focus on quality and reliability' },
  { brand: "Honda", image: "/assets/Honda.jpg", name: 'Honda', logo: '/brands/honda.png', description: 'Japanese vehicles with a focus on reliability and efficiency' },
  { brand: "Lexus", image: "/assets/lexus.png", name: 'Lexus', logo: '/brands/lexus.png', description: 'Luxury vehicles with advanced technology and comfort' },
  { brand: "Audi", image: "/assets/Audi.jpeg", name: 'Audi', logo: '/brands/audi.png', description: 'German luxury vehicles with advanced technology' },
  { brand: "BYD", image: "/assets/Byd.png", name: 'BYD', logo: '/brands/byd.png', description: 'Chinese electric vehicles with a focus on innovation' },
  { brand: "Bestune", image: "/assets/bestune.jpeg", name: 'Bestune', logo: '/brands/bestune.png', description: 'Chinese vehicles with a focus on quality and design' },
  { brand: "Mahindra", image: "/assets/mahindra.jpeg", name: 'Mahindra', logo: '/brands/mahindra.png', description: 'Indian vehicles with a focus on quality and reliability' },
  { brand: "Abarth", image: "/assets/abarth.png", name: 'Abarth', logo: '/brands/abarth.png', description: 'Italian performance vehicles with a focus on design' },
  { brand: "Jaguar", image: "/assets/jaguar.jpeg", name: 'Jaguar', logo: '/brands/jaguar.png', description: 'British luxury vehicles with a focus on performance and design' },
  { brand: "Lotus", image: "/assets/lotus.svg", name: 'Lotus', logo: '/brands/lotus.png', description: 'British sports cars with a focus on performance and handling' },
  { brand: "Mazda", image: "/assets/Mazda.jpeg", name: 'Mazda', logo: '/brands/mazda.png', description: 'Japanese vehicles with a focus on design and performance' },
  { brand: "MG", image: "/assets/Mg.png", name: 'MG', logo: '/brands/mg.png', description: 'British vehicles with a focus on quality and reliability' },
  { brand: "Mini", image: "/assets/mini.png", name: 'Mini', logo: '/brands/mini.png', description: 'British vehicles with a focus on design and performance' },
  { brand: "Peugeot", image: "/assets/peugeot.png", name: 'Peugeot', logo: '/brands/peugeot.png', description: 'French vehicles with a focus on quality and design' },
  { brand: "Porsche", image: "/assets/porsche.png", name: 'Porsche', logo: '/brands/porsche.png', description: 'German sports cars with a focus on performance and design' },
  { brand: "Renault", image: "/assets/renault.png", name: 'Renault', logo: '/brands/renault.png', description: 'French vehicles with a focus on quality and innovation' },
  { brand: "Volvo", image: "/assets/volvo.png", name: 'Volvo', logo: '/brands/volvo.png', description: 'Swedish vehicles with a focus on safety and quality' },
  { brand: "Zotye", image: "/assets/zotye.png", name: 'Zotye', logo: '/brands/zotye.png', description: 'Chinese vehicles with a focus on quality and design' }
];

export async function GET() {
  return NextResponse.json(brands);
}
