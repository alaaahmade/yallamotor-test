import React from 'react';
import type { ReactNode } from 'react';

interface GuideCardProps {
  guide: {
    title: string;
    description: string;
    icon: ReactNode | (() => ReactNode);
  }
}

const GuideCard = ({ guide }: GuideCardProps) => {
  const iconNode = typeof guide.icon === 'function' ? guide.icon() : guide.icon;
  
  return (
    <div className="bg-white rounded shadow p-10 flex items-center flex-col gap-2">
      {iconNode}
      <h3 className="text-center font-bold">{guide.title}</h3>
      <p className="text-center text-sm text-gray-600">{guide.description}</p>
    </div>
  );
};

export default GuideCard;
