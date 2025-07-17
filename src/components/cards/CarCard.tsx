import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function CarCard({ car }: { car: any }) {
  return (
    <div
      className="w-full max-w-[206px] h-[257px] bg-white shadow-lg border-1 border-gray-200 text-sm inline-block overflow-hidden rounded-sm"
      data-car-brand={car.brand}
      data-car-model={car.model}
      data-car-year={car.year}
      data-item-rank={car.rank || ""}
      data-item-type="Car Card"
    >
      <Link href={car.link} className="block w-full h-[150px]">
        <Image
          src={car.image}
          alt={car.title}
          width={206}
          height={150}
          className="w-full h-full object-contain rounded-t bg-white"
        />
      </Link>

      <div className="px-3 pt-2 pb-3 flex flex-col justify-between h-[107px]">
        {/* Title */}
        <div className="h-[34px] overflow-hidden leading-tight font-bold">
          <Link href={car.link} className="text-black hover:underline block text-sm">
            {car.title}
          </Link>
        </div>

        {/* Price */}
        <div className="text-blue-700 font-semibold text-xs mt-1 h-[23px] truncate">
          {car.price}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-1 h-[24px] space-x-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              icon="iconamoon:star-fill"
              width="18"
              height="18"
              className={i < (car.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
