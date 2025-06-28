import { FC } from 'react';
import Image from 'next/image';
import React from 'react';

const Header: FC = () => {
  return (
    <header>
      <div className="bg-gradient-to-r from-[#DFBE69] to-[#CEAB45] py-16 sm:py-24 !pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 font-style-1">
                Become a Certified Beauty Professional
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl font-style-2">
                Learn from Experienced Professionals and Launch Your Dream Career
              </p>
            </div>
            <div className="relative aspect-square w-full mx-auto">
              <Image
                src="/img/banner-img.png"
                alt="Beauty Professional"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;