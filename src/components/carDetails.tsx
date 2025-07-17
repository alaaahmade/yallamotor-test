import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './breadcrumb'
import { CarI } from '@/types/cars'
import Image from 'next/image'

const CarDetails = ({car}: {car: CarI}) => {
  return (
    <div className='bg-white w-full'>
          <main className="max-w-4xl mx-auto p-4 md:p-8 bg-white">
      <div className="mb-4 text-sm text-gray-600">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Expert Car Ratings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{car.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{car.title}</h1>

      <div className="mb-8">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.title}
          width={800}
          height={450} 
          className="rounded-lg object-cover w-full h-auto"
          priority
        />
      </div>

      <div className="flex items-center gap-4 mb-8 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          {/* Placeholder for YallaMotor icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-car"
          >
            <path d="M19 17H5l-1.5-3.8a2 2 0 0 1-.1-1.5L5 9h14c.7 0 1.3.3 1.7.9l.8 1.2c.7 1.1.9 2.6.6 4L19 17Z" />
            <path d="M9 18h6" />
            <path d="M10 6H9" />
            <path d="M14 6h1" />
            <path d="M12 18V9" />
          </svg>
          <span>{car.author}</span>
        </div>
        <span>•</span>
        <span>{car.readTime}</span>
        <span>•</span>
        <span>{car.date}</span>
        <div className="ml-auto flex items-center">
          <span className="text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`inline h-5 w-5 ${i < car.rating ? "fill-yellow-400" : "fill-gray-300"}`}
                viewBox="0 0 20 20"
              >
                <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36" />
              </svg>
            ))}
          </span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800">
        {car.sections && car.sections.length > 0 ? (
          car.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{section.title}</h2>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))
        ) : (
          <p>No details available for this car.</p>
        )}
      </div>
    </main>
    </div>
  )
}

export default CarDetails
