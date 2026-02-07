import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';
import { courses } from '../data/courses';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section (Image 1 Placeholder) */}
      <header className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto w-full gap-12">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-slate-900">
            Master Technical Skills & <br/>
            Unlock <span className="text-indigo-600">Your Career Potential</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Learn with expert-led courses designed for curious learners, developers upskilling, and students preparing for corporate life.
          </p>
          
          <div className="flex items-center gap-6 mb-8 text-sm text-slate-600">
             <div className="flex items-center gap-1">
               <span className="text-yellow-500">★</span> 4.9 (3,200+ reviews)
             </div>
             <div>👥 15,200+ students</div>
          </div>

          <div className="flex gap-4">
        
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              Enroll Now
            </button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex-1 w-full max-w-[640px] relative z-10">
          <div className="w-full h-[400px] rounded-[32px] shadow-2xl overflow-hidden relative group border-4 border-white/50">
             <img 
               src={heroImage} 
               alt="Learning student" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
             />
             
  
          </div>
          
          {/* Subtle blurred backdrop for glow effect */}
          <div className="absolute -z-10 bottom-0 left-4 right-4 h-full bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>
        </div>
      </header>

      {/* Stats / Community Section */}
      <section className="py-16 px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Global Community</h2>
              <p className="text-slate-600">Discover, Learn, and Succeed with Us Through Education</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stat 1: Flexible Learning */}
            <div className="bg-white p-4 rounded-xl flex items-center gap-4 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Flexible Learning</h4>
                <p className="text-xs text-slate-600">Anytime Anywhere</p>
              </div>
            </div>

            {/* Stat 2: Certificates */}
            <div className="bg-white p-4 rounded-xl flex items-center gap-4 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
               <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 text-sm">1000+</h4>
                 <p className="text-xs text-slate-600">Certificates Generated</p>
               </div>
            </div>

             {/* Stat 4: Online Courses */}
             <div className="bg-white p-4 rounded-xl flex items-center gap-4 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
               <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 text-sm">50+</h4>
                 <p className="text-xs text-slate-600">Online Courses</p>
               </div>
            </div>

            {/* Stat 5: Registrations */}
            <div className="bg-white p-4 rounded-xl flex items-center gap-4 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
               <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 text-sm">75,000+</h4>
                 <p className="text-xs text-slate-600">Registrations</p>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Courses Section (Image 2 Context - List of courses) */}
      <section id="courses" className="py-20 px-8 bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Skill Domains
          </h2>
          <p className="text-slate-600">
            Choose a learning path aligned with your career goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`
                bg-white rounded-2xl p-8 border border-slate-200 shadow-sm 
                hover:shadow-md transition-all duration-300 flex flex-col items-start text-left
              `}
            >
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {course.title}
              </h3>
              
              <p className="text-slate-500 text-sm mb-6">
                {course.subtitle}
              </p>

              <Link 
                to="/courses" 
                className="text-indigo-600 font-semibold text-sm flex items-center mt-auto group"
              >
                View Courses 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Us</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-slate-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Comprehensive<br/>Resources</h3>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-slate-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Self-Assessment<br/>Platform</h3>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-slate-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.854 1.591-2.16 1.115-.366 1.91-1.412 1.91-2.649 0-1.557-1.263-2.812-2.812-2.812-1.549 0-2.812 1.255-2.812 2.812 0 1.237.795 2.283 1.91 2.649.933.306 1.591 1.177 1.591 2.16V18m-9 0h9" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Career-defining<br/>Courses</h3>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-slate-700">
                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                 </svg>
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">User-friendly<br/>Interface</h3>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 text-slate-700">
                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2.125c0-.621-.504-1.125-1.125-1.125H9.125C8.504 1 8 1.504 8 2.125v1.75c0 .621.504 1.125 1.125 1.125h5.75c.621 0 1.125-.504 1.125-1.125V2.125z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 21a2.25 2.25 0 01-2.25-2.25V18h4.5v.75A2.25 2.25 0 0112.75 21z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18C7.13 18 5.42 16.983 4.417 15.289c-.585-.989-.138-2.26.963-2.5 4.092-.89 8.214-.236 10.963 1.905.811.632 1.343 1.56 1.488 2.585.086.606-.316 1.171-.926 1.218A12.046 12.046 0 0113.125 19.5v-1.5h-4.5v1.5c-1.189 0-2.336-.206-3.417-.584" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                 </svg>
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Customer<br/>Support</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">What Our Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute top-8 right-8 text-indigo-400 opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.0547 15.372 15.1182 16.6367 14.6123C17.6562 14.2045 18.0176 13.5186 18.0176 12.5537V11.2373H14.0176V3H21.0176V12.5537C21.0176 17.5 17.0605 21 14.0176 21H14.017ZM3 21L3 18C3 16.0547 4.35515 15.1182 5.61914 14.6123C6.63953 14.2045 7 13.5186 7 12.5537V11.2373H3V3H10V12.5537C10 17.5 6.04297 21 3 21Z" />
                  </svg>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Student Name</h4>
                    <p className="text-sm text-slate-500">Course Taken</p>
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  "The courses here are fantastic. The instructors are knowledgeable and the content is very practical. I was able to apply what I learned immediately in my job."
                </p>
                
                <div className="flex text-amber-400 text-sm">
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

    </>
  );
};

export default Home;
