import { FC } from 'react';
import Image from 'next/image';
import React from 'react';

interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
  awardedBy: string;
}

const AchievementCard: FC<AchievementCardProps> = ({ icon, title, description, awardedBy }) => {
  return (
    <div className="bg-gradient-to-r from-[#DFBE69] to-[#CEAB45] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center">
          <Image
            src={icon}
            alt="Icon"
            width={32}
            height={32}
            className="text-pink-600"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center font-style-1">{title}</h3>
      <p className="text-sm text-white mb-3 text-center font-style-2">{description}</p>
      <p className="text-xs text-white text-center font-style-2">Awarded by {awardedBy}</p>
    </div>
  );
};

export default AchievementCard;