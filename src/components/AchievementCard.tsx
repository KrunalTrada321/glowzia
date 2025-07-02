import { FC } from 'react';
import Image from 'next/image';
import React from 'react';

interface AchievementCardProps {
  icon: string;
  title: string;

}

const AchievementCard: FC<AchievementCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-gradient-to-r from-[#DFBE69] to-[#CEAB45] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-4 flex justify-center">
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center font-style-1">{title}</h3>
    </div>
  );
};

export default AchievementCard;