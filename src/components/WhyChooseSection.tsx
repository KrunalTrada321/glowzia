import { FC } from 'react';
import React from 'react';

interface AdvantagePoint {
  number: number;
  title: string;
  description: string;
}

const advantages: AdvantagePoint[] = [
  {
    number: 1,
    title: 'Modern Curriculum',
    description: 'Our courses are designed with current beauty industry trends to ensure students learn what really matters in today’s market.'
  },
  {
    number: 2,
    title: 'Experienced Trainers',
    description: 'Our trainers bring real-world salon and makeup studio experience, giving students hands-on, practical learning.'
  },
  {
    number: 3,
    title: 'Focused on Career Skills',
    description: 'Every course is tailored to develop real, job-ready skills needed to work in salons, spas, or even start your own venture.'
  },
  {
    number: 4,
    title: 'Industry Exposure',
    description: 'Workshops, guest sessions, and demo classes help students connect with professionals and build confidence.'
  },
  {
    number: 5,
    title: 'Easy Fee Plans & 50% Off',
    description: 'Get 50% off on course fees for a limited time, along with flexible payment plans to make your learning journey stress-free.'
  },
  {
    number: 6,
    title: '100% Placement Assistance',
    description: 'Get placement support to launch your career with top salons and beauty brands in India and abroad.'
  }
];

const WhyChooseSection: FC = () => {
  return (
    <section className="py-16 bg-[#242426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase font-bold bg-gradient-to-r from-[#F8EDAD] to-[#CEAB45] bg-clip-text text-transparent mb-4 fade-in font-style-1">Why Choose Glowzia to Give Wings to Your Career?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <div
              key={advantage.number}
              className="bg-gradient-to-r from-[#DFBE69] to-[#CEAB45] p-6 rounded-2xl text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold font-style-2 text-black ">{advantage.number}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-style-1 text-black">{advantage.title}</h3>
                  <p className="text-white/90 font-style-2">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;