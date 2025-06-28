'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative fade-in">
            <Image
              src="/beauty-professional.jpg"
              alt="Beauty Professional"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 fade-in">
              Are you passionate about beauty and makeup
            </h1>
            <p className="text-lg text-gray-600 fade-in">
              Do you want to learn the skills you need to start a successful career in the beauty industry?
            </p>
            <p className="text-lg text-gray-600 fade-in">
              If so, Orane International can help you! We offer a variety of beauty courses that can help you launch your career in as little as 6 months or less.
            </p>
            <p className="text-lg text-gray-600 fade-in">
              Our courses are taught by experienced professionals who will share their knowledge and expertise with you. We focus on practical learning over theory, so you gain the skills you need to start working as a beauty professional right away.
            </p>
            <div className="flex items-center gap-4 fade-in">
              <button className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transform hover:scale-105 transition-all flex items-center gap-2">
                Let's Begin to Enroll Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}