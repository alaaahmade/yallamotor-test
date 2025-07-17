import { Links } from '@/mock/cars';
import Link from "next/link";

export default function BudgetSection() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 pl-4 pt-4">
          <h2 className="font-bold text-2xl">Electric Cars By Budget in UAE</h2>
        </div>
        
        <div className="flex flex-wrap justify-start gap-0 pl-4 pr-10">
          {Links.length > 0 ? Links.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className={link.className}
              data-item-rank={link.dataItemRank} 
              data-item-type={link.dataItemType}
            >
              <span className="inline-block px-6 py-1 m-2 border border-gray-300 rounded-full text-gray-700 hover:border-blue-500 hover:text-blue-500 transition-colors">
                {link.title} <span className="text-blue-600">{link.count}</span>
              </span>
            </Link>
          )) : (
            <p>No links available</p>
          )}

        </div>
      </div>
    </div>
  );
}