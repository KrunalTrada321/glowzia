'use client';
import Image from 'next/image';

export default function CourseSlider() {
  const courses = [
    {
      title: 'Combo Cosmetology',
      description: 'Embrace An Exciting Future with Combo Courses Have...',
      image: '/cosmetology.jpg',
      category: 'cosmetology'
    },
    {
      title: 'Nutrition',
      description: 'Nutrition Certification: Your Gateway to a Rewarding Career Have...',
      image: '/nutrition.jpg',
      category: 'nutrition'
    },
    {
      title: 'Nail',
      description: 'Nail Art Courses for Sure Career Success Nail art...',
      image: '/nail.jpg',
      category: 'nail'
    }
  ];

  return (
    <section className="py-16 bg-[#D8B775]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in">EXPLORE OUR COURSES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fade-in">A Global Glory Of Your Ambitions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 fade-in">
              <div className="relative h-64">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors hover:translate-x-2 transform inline-flex items-center group">
                  Learn More <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}