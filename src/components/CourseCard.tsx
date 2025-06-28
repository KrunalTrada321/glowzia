import Image from 'next/image';
import React from 'react';
import { FC } from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const CourseCard: FC<CourseCardProps> = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={imageAlt} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 bg-gradient-to-r from-[#DFBE69] to-[#CEAB45]">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-style-1">{title}</h3>
        <p className="text-gray-600 mb-4 font-style-2">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;