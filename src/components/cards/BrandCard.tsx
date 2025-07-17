import Image from 'next/image'
import React from 'react'

const BrandCard = ({brand}: {brand: any }) => {
  return (
    <div  className="flex flex-col w-36 items-center p-4 hover:bg-gray-50 rounded-sm cursor-pointer shadow-md hover:shadow-md transition-shadow duration-200 border-1 border-gray-200">
    <div className="w-20 h-15 relative">
      <Image 
        src={brand.image} 
        alt={brand.brand} 
        fill
        className="object-contain"
      />
    </div>
    <span className="text-xs mt-2 text-center">{brand.brand}</span>
  </div>
  )
}

export default BrandCard
