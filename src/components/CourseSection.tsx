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
    description: 'Embrace An Exciting Future with Combo Courses Have...',
    imageUrl: '/images/cosmetology.jpg',
    imageAlt: 'Cosmetology Course'
  },
  {
    title: 'Nails extension course ',
    description: 'Nutrition Certification: Your Gateway to a Rewarding Career Have...',
    imageUrl: '/images/nutrition.jpg',
    imageAlt: 'Nutrition Course'
  },
  {
    title: 'Beauty course',
    description: 'Nail Art Courses for Sure Career Success Nail art...',
    imageUrl: '/images/nail.jpg',
    imageAlt: 'Nail Course'
  }

];



const coursesData: Course[] = [
  {
    title: 'Skin course',
    description: 'Embrace An Exciting Future with Combo Courses Have...',
    imageUrl: '/images/cosmetology.jpg',
    imageAlt: 'Cosmetology Course'
  },
  {
    title: 'Micro blading course ',
    description: 'Nutrition Certification: Your Gateway to a Rewarding Career Have...',
    imageUrl: '/images/nutrition.jpg',
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
          <p className="text-xl text-white font-style-2">A Global Glory Of Your Ambitions.</p>
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