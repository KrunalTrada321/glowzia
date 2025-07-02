import { FC } from 'react';
import CourseCard from './CourseCard';
import React from 'react';

interface Course {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const courses: Course[] = [
  {
    title: 'Hair course',
    description: 'Master the art of hairstyling, cutting, coloring, and hair treatments with our professional Hair Course. Ideal for aspiring stylists, this course blends theory with hands-on training...',
    imageUrl: '/img/hair-course.jpg',
    imageAlt: 'Cosmetology Course'
  },
  {
    title: 'Nails extension course ',
    description: 'Learn the latest techniques in nail art, gel, acrylic, and nail extensions. This course is perfect for those looking to start a career in nail styling or upgrade their salon skills with trending designs and professional tools.',
    imageUrl: '/img/nail-course.jpg',
    imageAlt: 'Nutrition Course'
  },
  {
    title: 'Beauty course',
    description: 'Gain in-depth knowledge of skincare, makeup, and facial treatments with our Beauty Course. Designed for beginners and professionals alike, it prepares you for a rewarding career...',
    imageUrl: '/img/beauty-course.jpg',
    imageAlt: 'Nail Course' 
  }

];



const coursesData: Course[] = [
  {
    title: 'Skin course',
    description: 'Learn advanced skincare techniques including facials, clean-ups, skin analysis, and treatments for various skin types. This course is ideal for those aiming to become certified skincare experts in the beauty industry.',
    imageUrl: '/img/skin.jpg',
    imageAlt: 'Cosmetology Course'
  },
  {
    title: 'Micro blading course ',
    description: 'Master the art of semi-permanent eyebrow enhancement with our Microblading Course. Learn precise techniques for shaping, designing, and creating natural-looking brows to kickstart a professional career in cosmetic tattooing.',
    imageUrl: '/img/microblading.jpg',
    imageAlt: 'Nutrition Course' 
  },

];

const CourseSection: FC = () => {
  return (
    <section className="py-16 bg-[#242426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-style-1 bg-gradient-to-r from-[#F8EDAD] to-[#CEAB45] bg-clip-text text-transparent">
            EXPLORE OUR COURSES 
          </h2>
          <p className="text-xl text-white font-style-2">Learn from internationally certified trainers with real-world expertise.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                imageAlt={course.imageAlt}
              />
            ))}
          </div>

          {/* below cources */}
          <div className='max-w-[865px] mx-auto  sm:px-6 '> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {coursesData.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  imageUrl={course.imageUrl}
                  imageAlt={course.imageAlt}
                />
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CourseSection;