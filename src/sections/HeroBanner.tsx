'use client'
import { useRouter } from 'next/navigation';

export default function HeroBanner() {

  const router = useRouter()

  return (
    <section className="w-full flex flex-col items-center bg-gray-100 py-4 px-2 align-center justify-center">
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div
            className="w-full rounded-2xl overflow-hidden min-h-[320px] md:min-h-[400px] bg-[url('/assets/banner.png')] bg-cover bg-center cursor-pointer"
            style={{ minHeight: '320px' }}
            onClick={() => {
              router.push('https://uae.yallamotor.com/used-cars/search')
            }}
          />
        </div>
      </div>
    </section>
  );
}