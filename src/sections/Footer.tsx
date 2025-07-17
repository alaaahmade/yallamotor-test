"use client"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        {/* Mobile Footer */}
        <div className="lg:hidden">
          <div className="space-y-8 py-8">
            <div className="space-y-4">
              <h2 className="font-bold text-lg">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="font-bold text-lg">Help</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-300">Support</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden lg:grid grid-cols-4 gap-8 py-10">
          <div>
            <h2 className="font-bold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Help</h2>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Social</h2>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Contact</h2>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Email: info@yallamotor.com</a></li>
              <li><a href="#" className="hover:underline">Phone: +971 123 456 7890</a></li>
              <li><a href="#" className="hover:underline">Address: Dubai, UAE</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-800">
          © 2024 YallaMotor. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 