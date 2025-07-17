import { CarI } from '@/types/cars';

const groupCarsForMobile = (cars: CarI[]): CarI[][] => {
  const groups: CarI[][] = [];
  for (let i = 0; i < cars.length; i += 2) {
    groups.push(cars.slice(i, i + 2));
  }
  return groups;
};
export default groupCarsForMobile;
