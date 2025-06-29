import React from 'react';
import { useEffect, useState } from 'react';

export default function StatsSection() {
  const stats = [
    { number: 80000, suffix: '+', label: 'STUDENTS GLOBALLY' },
    { number: 80, suffix: '+', label: 'COURSES' },
    { number: 100, suffix: '+', label: 'BRANCHES' },
    { number: 2, suffix: '', label: 'COUNTRIES' }
  ]; 

  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // ms
    const intervalTime = 20;
    const steps = duration / intervalTime;

    stats.forEach((stat, i) => {
      let current = 0;
      const increment = stat.number / steps;

      const interval = setInterval(() => {
        current += increment;
        setAnimatedValues(prev =>
          prev.map((val, index) =>
            index === i ? Math.min(Math.floor(current), stat.number) : val
          )
        );

        if (current >= stat.number) clearInterval(interval);
      }, intervalTime);
    });
  }, []);

  return (
    <section className="py-16 bg-[#242426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-style-1 bg-gradient-to-r from-[#F8EDAD] to-[#CEAB45] bg-clip-text text-transparent">
            Orane: A Respected Name Beauty & Wellness Skilling
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-in">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {animatedValues[index]}{stat.suffix}
              </div>
              <div className="text-lg font-bold mb-4 font-style-1 bg-gradient-to-r from-[#F8EDAD] to-[#CEAB45] bg-clip-text text-transparent">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
