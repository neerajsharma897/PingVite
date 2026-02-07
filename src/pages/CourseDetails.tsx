import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the course based on the URL parameter (course title)
  // In a real app, you'd use a proper ID, but here we use the title string
  const courseTitle = decodeURIComponent(id || '');
  
  // Helper to find category info
  let categoryInfo = { title: '', color: '' };
  
  // Verify course exists
  const courseExists = courses.some(cat => {
    if (cat.points.includes(courseTitle)) {
        categoryInfo = { title: cat.title, color: cat.color }; // Capture category info
        return true;
    }
    return false;
  });

  if (!courseExists) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Course Not Found</h2>
                <Link to="/courses" className="text-indigo-600 hover:underline">Back to Courses</Link>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-4 text-sm text-slate-500">
          <Link to="/" className="hover:text-indigo-600">Home</Link> 
          <span className="mx-2">›</span> 
          <Link to="/courses" className="hover:text-indigo-600">Courses</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">{courseTitle}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-2">
          
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
                 <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                    {categoryInfo.title}
                 </span>
                 <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                    <span>★</span> 4.9 <span className="text-slate-400 font-normal">(3,200+ reviews)</span>
                 </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {courseTitle}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Master the fundamentals and advanced concepts of {courseTitle}. 
              This comprehensive module is designed to build industry-ready skills for beginners and professionals alike.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-slate-500">
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 4-6 Weeks
               </div>
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                 Self-paced
               </div>
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 Certificate Included
               </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-12">
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Overview</h2>
             
             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">What You'll Learn</h3>
                   <ul className="space-y-3">
                      {[
                        `Core concepts of ${courseTitle}`,
                        "Real-world application and case studies",
                        "Best practices and industry standards",
                        "Hands-on projects and exercises",
                        "Advanced techniques and optimization"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                           <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>

                <div>
                   <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Who This Course Is For</h3>
                   <ul className="space-y-3">
                      {[
                         "Beginners looking to start a career",
                         "Professionals wanting to upskill",
                         "Students preparing for placements",
                         "Anyone interested in this domain"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                           <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>

          {/* Syllabus Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Syllabus</h2>
            <div className="space-y-4">
                {[
                  "Introduction and Setup",
                  "Core Fundamentals",
                  "Intermediate Concepts",
                  "Advanced Topics",
                  "Final Project & Assessment"
                ].map((module, i) => (
                   <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white hover:border-indigo-200 transition-colors cursor-pointer group">
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-4">
                             <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-bold group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                {i + 1}
                             </span>
                             <span className="font-semibold text-slate-800">{module}</span>
                         </div>
                         <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                   </div>
                ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
               <span className="flex items-center gap-1">🔹 5 Modules</span>
               <span className="flex items-center gap-1">🔹 25 Lessons</span>
               <span className="flex items-center gap-1">🔹 12h 30m Total Length</span>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="lg:col-span-1">
           <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sticky top-24">
              {/* Course Media Placeholder */}
              <div className="bg-slate-200 rounded-xl h-48 mb-6 relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                       <svg className="w-5 h-5 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                 </div>
              </div>

              <div className="mb-6">
                 <div className="flex items-end gap-3 mb-2">
                    <span className="text-3xl font-bold text-slate-900">Free</span>
                    <span className="text-lg text-slate-400 line-through mb-1">₹4,999</span>
                 </div>
                 <div className="text-indigo-600 text-sm font-semibold bg-indigo-50 inline-block px-2 py-1 rounded">
                    100% Scholarship Available
                 </div>
              </div>

              <div className="space-y-3 mb-8">
                 <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
                    Enroll Now
                 </button>
                 <button className="w-full bg-white text-slate-700 font-bold py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                    Add to Wishlist
                 </button>
              </div>

              <div className="border-t border-slate-100 pt-6">
                 <h4 className="font-bold text-slate-900 mb-4 text-sm">This Course Includes:</h4>
                 <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-3">
                       <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                       Lifetime access to learning portal
                    </li>
                    <li className="flex items-center gap-3">
                       <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                       Project files & resources
                    </li>
                    <li className="flex items-center gap-3">
                       <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                       Community access
                    </li>
                     <li className="flex items-center gap-3">
                       <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                       Mobile accessible
                    </li>
                 </ul>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetails;
