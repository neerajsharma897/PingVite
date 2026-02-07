import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Flatten the courses data to get individual course items
  const allCourses = courses.flatMap(category => 
    category.points.map(courseName => ({
      title: courseName,
      category: category.title,
      categoryId: category.id,
      description: `Master the fundamentals and advanced concepts of ${courseName}. This comprehensive module is designed to build industry-ready skills.`,
      duration: "4-6 Weeks",
      level: "Intermediate",
      rating: "4.8"
    }))
  );

  const filteredCourses = selectedCategory === 'All' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  const categories = ['All', ...courses.map(c => c.title)];

  return (
    <div className="py-8 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-800 rounded-3xl px-8 md:p-6 mb-12 text-white relative overflow-hidden shadow-xl">
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-2xl"></div>

           <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide uppercase mb-4 border border-white/10">
                Start Learning Today
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tigher">
                You're closer than you think to your dream career.
              </h1>
              <p className="text-blue-100 text-md max-w-lg">
                Unlock your potential with our expert-led courses. Gain the skills that top companies are hiring for right now.
              </p>
              {/* <div className="flex flex-wrap gap-4">
                 <button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all transform hover:-translate-y-0.5">
                    View All Courses
                 </button>
                 <button className="px-6 py-3 bg-indigo-800/50 text-white font-semibold rounded-xl border border-white/20 hover:bg-indigo-800/70 transition-all backdrop-blur-sm">
                    Talk to an Advisor
                 </button>
              </div> */}
           </div>
        </div>

        {/* <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-slate-900">Explore Our Catalog</h2>
           <p className="text-slate-500 mt-2">Filter by domain to find the perfect course for you</p>
        </div> */}

        {/* Category Filter */}
        <div className="flex overflow-x-auto gap-3 mb-10 pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-200 ring-offset-1'
                  : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Link 
              to={`/courses/${encodeURIComponent(course.title)}`}
              key={index} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Course Image Placeholder */}
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br opacity-50 ${
                  course.categoryId % 2 === 0 ? 'from-purple-500 to-indigo-600' : 'from-blue-500 to-cyan-600'
                }`}></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-black/30 px-2 py-1 rounded backdrop-blur-sm border border-white/20">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(Math.round(parseFloat(course.rating)))}
                    <span className="text-slate-400 ml-1">({course.rating})</span>
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                  {course.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                   <div className="flex items-center text-slate-500 text-xs">
                     <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     {course.duration}
                   </div>
                   
                   <button className="text-indigo-600 font-bold text-sm hover:underline">
                     Enroll Now
                   </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCourses.length === 0 && (
           <div className="text-center py-20">
             <p className="text-slate-500 text-lg">No courses found in this category.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
