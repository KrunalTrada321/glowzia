'use client';
import Image from "next/image";
import Header from "../components/Header";
import CourseSection from "../components/CourseSection";
import AchievementsSection from "../components/AchievementsSection";
import WhyChooseSection from "../components/WhyChooseSection";

import { useEffect } from 'react';
  
export default function Home() {   
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


  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CourseSection />
      <WhyChooseSection />
      <AchievementsSection />
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in">Orane: A Respected Name Beauty & Wellness Skilling</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 80000, suffix: '+', label: 'STUDENTS GLOBALLY' },
              { number: 80, suffix: '+', label: 'COURSES' },
              { number: 100, suffix: '+', label: 'BRANCHES' },
              { number: 2, suffix: '', label: 'COUNTRIES' }
            ].map((stat, index) => (
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-pink-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative fade-in">
              <Image
                src="/beauty-professional.jpg"
                alt="Beauty Professional"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            
            {/* Right Column - Content */}
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
                  Lets Begin to Enroll Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in">Our Professional Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in">Get your professional class CF Your Certificate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Makeup Artistry',
                description: 'Master the art of professional makeup application with hands-on training',
                icon: '/file.svg'
              },
              {
                title: 'Hair Styling',
                description: 'Learn cutting-edge hair styling techniques from industry experts',
                icon: '/globe.svg'
              },
              {
                title: 'Nail Technology',
                description: 'Become an expert in nail care and design with our comprehensive program',
                icon: '/window.svg'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in border border-gray-100">
                <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
                  <Image src={service.icon} alt={service.title} width={48} height={48} className="text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors hover:translate-x-2 transform inline-flex items-center group">
                  Learn More <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 fade-in">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah J.',
                role: 'Certified Makeup Artist',
                quote: 'The comprehensive training I received at Beauty Academy transformed my passion into a successful career.'
              },
              {
                name: 'Emily D.',
                role: 'Professional Hair Stylist',
                quote: 'The instructors are industry experts who truly care about student success. I learned so much more than I expected.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow fade-in flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-pink-600">{testimonial.name[0]}</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-pink-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Beauty Career Today</h2>
            <p className="text-gray-600 mb-8">Join our academy and transform your passion into a successful career in the beauty industry.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transform hover:scale-105 transition-all"
              >
                Request Information
              </button>
            </form>
          </div>
        </div>
      </section>

      <style jsx global>{
        `
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .hover-float:hover {
          animation: float 2s ease-in-out infinite;
        }
        `
      }</style>
    </main>
  );
}
