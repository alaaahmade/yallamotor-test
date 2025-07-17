import React from 'react'
import Image from 'next/image'

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    url: string;
    thumbnail: string;
    category: string;
    details: string;
  };
}
const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition border border-gray-100"
    >
      <div className="relative w-full h-56 bg-gray-200">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
          <rect width="54" height="54" rx="27" fill="#0C0C0C" fillOpacity="0.7" />
          <path d="M20.333 35.6249V18.3749C20.333 17.9027 20.4997 17.5069 20.833 17.1874C21.1663 16.868 21.5552 16.7083 21.9997 16.7083C22.1386 16.7083 22.2844 16.7291 22.4372 16.7708C22.59 16.8124 22.7358 16.8749 22.8747 16.9583L36.458 25.5833C36.708 25.7499 36.8955 25.9583 37.0205 26.2083C37.1455 26.4583 37.208 26.7221 37.208 26.9999C37.208 27.2777 37.1455 27.5416 37.0205 27.7916C36.8955 28.0416 36.708 28.2499 36.458 28.4166L22.8747 37.0416C22.7358 37.1249 22.59 37.1874 22.4372 37.2291C22.2844 37.2708 22.1386 37.2916 21.9997 37.2916C21.5552 37.2916 21.1663 37.1319 20.833 36.8124C20.4997 36.493 20.333 36.0971 20.333 35.6249Z" fill="white" />
        </svg>
      </div>
      <span className="block text-xs text-red-600 font-semibold mt-2 px-4">{video.category}</span>
      <h3 className="text-base font-semibold px-4 mt-1 line-clamp-2">{video.title}</h3>
      <div className="flex items-center gap-2 text-xs text-gray-600 px-4 py-3">
        <Image src="https://yallamotor-production-assets.s3.ap-south-1.amazonaws.com/uploads/misc/yallamotor-icon.png" alt="YallaMotor" width={14} height={14} className="inline-block" />
        {video.details}
      </div>
    </a>
  )
}

export default VideoCard
