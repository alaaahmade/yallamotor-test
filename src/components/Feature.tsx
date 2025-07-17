import React from 'react'

const Feature = ({ text, strong }: { text: React.ReactNode; strong?: string }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Checkmark SVG */}
      <svg width="20" height="20" viewBox="0 0 16 16" className="min-w-[20px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#ebf1fc" />
        <path d="M7.338 12.593L5.68 10.934l-.565.561 2.223 2.223 4.773-4.773-.561-.561z" fill="#5892f9" stroke="#5892f9" strokeWidth="0.5" />
      </svg>
      <div className="ml-2 text-gray-800 text-base">
        {strong && <span className="font-semibold mr-1">{strong}</span>}
        {text}
      </div>
    </div>
  );
}

export default Feature
