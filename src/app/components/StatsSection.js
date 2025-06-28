'use client';
import { useEffect } from 'react';

export default function StatsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          if (entry.target.classList.contains('counter')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            let count = 0;
            const duration = 2000;
            const increment = (target / duration) * 10;
            const suffix = entry.target.textContent.replace(/[0-9]/g, '');
            
            const updateCount = () => {
              if (count < target) {
                count = Math.min(count + increment, target);
                entry.target.textContent = Math.floor(count) + suffix;
                requestAnimationFrame(updateCount);
              } else {
                entry.target.textContent = target + suffix;
              }
            };
            
            updateCount();
          }
        }
      });
    });

    document.querySelectorAll('.fade-in, .counter').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 80000, suffix: '+', label: 'STUDENTS GLOBALLY' },
    { number: 80, suffix: '+', label: 'COURSES' },
    { number: 100, suffix: '+', label: 'BRANCHES' },
    { number: 2, suffix: '', label: 'COUNTRIES' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in">Orane: A Respected Name Beauty & Wellness Skilling</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-in">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2 counter" data-target={stat.number}>
                0{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}