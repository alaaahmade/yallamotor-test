import Feature from '@/components/Feature';
import Image from 'next/image';
import React from 'react';

export default function SellCarSection() {
  return (
    <section className="w-full bg-gray-100 py-8 md:py-12 flex justify-center px-8 md:px-0">
      <div>
        <div className="flex flex-col gap-2 mb-15">
        <h2 className="text-xl md:text-2xl font-bold mt-2 md:mt-10">
          Do you want to sell your car for <span className="text-blue-600">FREE</span>?
        </h2>
        <p className="text-gray-700">
          We have everything that makes it easier for you to <b>sell your car</b> on our platform quickly
        </p>
        </div>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 px-2 md:px-8">
        {/* Left: Car Illustration */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative">
            {/* Car image placeholder, replace src with your image */}
            <Image
              src="/assets/sell_cars.png"
              alt="Sell your car"
              className="w-[220px] md:w-[300px] h-auto"
              width={220}
              height={300}
            />
            {/* SELL flag */}
            <div className="absolute -top-6 left-8 md:left-12 bg-blue-500 text-white font-bold px-4 py-2 rounded-md rotate-[-24deg] shadow-md text-sm md:text-base">
              SELL
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-[2] flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 mb-2">
            <Feature text={<><b>100%</b> absolutely free on YallaMotor.</>} strong="Sell your car" />
            <Feature text={<><b>200+</b> Cars Sold Everyday.</>} strong="" />
            <Feature text={<><b>115,000+</b> Satisfied Sellers.</>} strong="" />
            <Feature text={<><b>500,000+</b> Monthly Buyers.</>} strong="" />
          </div>

          {/* Button with arrows */}
          <div className="flex justify-center items-center mt-4">
            <svg className="hidden md:block mr-2" width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.264 4.727C2.564 21.167 19.764 36.878 40.674 36.952V27.832L57.358 45.441L40.674 63.05V53.926C18.197 46.191 0 24.699 0 1.812A42.739 42.739 0 0 1 0.264 4.727Z" fill="#d8d8d8" />
            </svg>
            <a
              href="https://uae.yallamotor.com/used-cars/sell-my-car"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors text-base md:text-lg border-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sell your car for free on YallaMotor"
            >
              SELL YOUR CAR FOR FREE
            </a>
            <svg className="hidden md:block ml-2" width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.093 4.727C54.793 21.167 37.593 36.878 16.683 36.952V27.832L0 45.442L16.683 63.051V53.927C39.16 46.192 57.357 24.7 57.357 1.813A42.739 42.739 0 0 0 57.093 4.727Z" fill="#d8d8d8" />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}