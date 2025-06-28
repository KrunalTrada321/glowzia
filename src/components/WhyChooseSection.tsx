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
    title: 'A Trusted Name',
    description: 'Orane is NSDC-recognised and a Grade A training partner.'
  },
  {
    number: 2,
    title: 'Proven Success',
    description: 'Over 120 academies and 100,000+ students trained across India.'
  },
  {
    number: 3,
    title: 'CIDESCO-affiliated courses',
    description: 'Earn globally recognized skills with CIDESCO-affiliated courses that open doors to international opportunities in the beauty and wellness industry.'
  },
  {
    number: 4,
    title: 'International Presence',
    description: 'Orane also has a beauty college in British Columbia, Canada, bringing global exposure to our students.'
  },
  {
    number: 5,
    title: 'Flexible Payment Plans',
    description: 'With 0% EMI options, nothing is holding you back from starting your career.'
  },
  {
    number: 6,
    title: '100% Placement Assistance',
    description: 'Get support to land your dream job in top brands and salons.'
  }
];

const WhyChooseSection: FC = () => {
  return (
    <section className="py-16 bg-[#242426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase font-bold bg-gradient-to-r from-[#F8EDAD] to-[#CEAB45] bg-clip-text text-transparent mb-4 fade-in font-style-1">Why Choose Orane to Give Wings to Your Career?</h2>
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