'use client'
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setMobileMenuOpen, toggleMobileMenu } from '../store/slices/headerSlice';
import { ChevronDown, User, Menu, X } from "lucide-react";
import Image from 'next/image';

export default function Header() {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector(state => state.header.mobileMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={'/assets/logo.svg'} alt="Logo" width={120} height={50} />
          </div>

          {/* Mobile menu button */}
          <button 
            aria-label="Open navigation menu"
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                <div className="w-6 h-4 bg-gradient-to-b from-green-500 via-white to-red-500 rounded-sm flex items-center justify-center">
                  <div className="w-5 h-3 bg-gradient-to-b from-green-600 via-white to-red-600 rounded-sm"></div>
                </div>
                <span className="text-sm font-medium text-gray-700">UAE</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <span className="text-sm text-gray-600">العربية</span>
            </div>

            {/* Navigation links */}
            <div className="relative">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center gap-1">
                Offers
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">New</span>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              New
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Used
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Electric
            </a>
            <div className="relative">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center gap-1">
                Chinese
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">New</span>
              </a>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="bg-green-700 text-xs md:text-sm hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg" aria-label="Sell My Car">
              Sell My Car
            </button>

            {/* User Account */}
            <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <User className="w-5 h-5 text-gray-600" />
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`} 
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <button 
              aria-label="Close navigation menu"
              onClick={() => dispatch(setMobileMenuOpen(false))}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <nav className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                <div className="w-6 h-4 bg-gradient-to-b from-green-500 via-white to-red-500 rounded-sm flex items-center justify-center">
                  <div className="w-5 h-3 bg-gradient-to-b from-green-600 via-white to-red-600 rounded-sm"></div>
                </div>
                <span className="text-sm font-medium text-gray-700">UAE</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <span className="text-sm text-gray-600">العربية</span>
            </div>

            <div className="relative">
              <a 
                href="#" 
                className="block text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center gap-1"
              >
                Offers
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">New</span>
              </a>
            </div>
            <a 
              href="#" 
              className="block text-gray-700 hover:text-blue-600 font-medium text-sm"
            >
              New
            </a>
            <a 
              href="#" 
              className="block text-gray-700 hover:text-blue-600 font-medium text-sm"
            >
              Used
            </a>
            <a 
              href="#" 
              className="block text-gray-700 hover:text-blue-600 font-medium text-sm"
            >
              Electric
            </a>
            <div className="relative">
              <a 
                href="#" 
                className="block text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center gap-1"
              >
                Chinese
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">New</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
