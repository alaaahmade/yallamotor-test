import { NextResponse } from "next/server";
import { CARS, PopularCarsDATA } from "@/mock/cars";

export async function GET(request, { params }) {
  
  const car = [...CARS, ...PopularCarsDATA].find((c) => String(c.id) === String(params.carId));
  console.log('Car found:', car);
  
  if (!car) {
    return NextResponse.json({ error: "Car not found" }, { status: 404 });
  }
  return NextResponse.json(car);
}
