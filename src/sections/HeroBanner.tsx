'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroBanner() {

  const router = useRouter()

  return (
    <section className="w-full flex flex-col items-center bg-gray-100 py-4 px-2 align-center justify-center">
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div
            className="w-full rounded-2xl overflow-hidden min-h-[320px] md:min-h-[400px] cursor-pointer relative"
            style={{ minHeight: '320px' }}
            onClick={() => {
              router.push('https://uae.yallamotor.com/used-cars/search')
            }}
          >
            <Image
              src="/assets/banner.png"
              alt="Hero Banner"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover object-left md:object-center"
              priority
              onError={(e) => {
                // fallback to PNG if webp fails
                const target = e.target as HTMLImageElement;
                if (target.src.endsWith('.webp')) {
                  target.src = '/assets/banner.png';
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}