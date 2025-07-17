import { NextResponse } from "next/server";
import { CARS } from "@/mock/cars";

export async function GET(request, { params }) {
  const carId = params.carId
  const car = CARS.find((c) => c.id.toString() === carId);

  if (!car) {
    return NextResponse.json({ error: "Car not found" }, { status: 404 });
  }
  return NextResponse.json(car);
}
