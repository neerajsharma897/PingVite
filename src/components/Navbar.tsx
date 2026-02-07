import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center px-16 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-indigo-600 tracking-wide flex items-center gap-2 justify-self-start">
        <Link to="/">PingVite</Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex gap-14 items-center justify-self-center">
        <Link to="/" className="font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Home</Link>
        <Link to="/courses" className="font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Courses</Link>
        {/* <Link to="/faq" className="font-semibold text-slate-600 hover:text-indigo-600 transition-colors">FAQ</Link> */}
        <Link to="/about" className="font-semibold text-slate-600 hover:text-indigo-600 transition-colors">About Us</Link>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex gap-6 items-center justify-self-end">
        {/* Search Bar */}
        <div className="relative hidden xl:block">
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="pl-9 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-slate-50 text-sm w-48 transition-all focus:w-64 text-slate-700 placeholder-slate-400"
          />
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className= "border-salte-200 border rounded-xl p-0.5 hover: transition-colors shadow-sm hover:shadow-md">
            <button className="font-semibold text-slate-600 hover:text-indigo-600 px-5 py-1.5 ">
              Sign In
            </button>
            <span className="align-center">|</span>
            <button className="font-semibold text-slate-600 hover:text-indigo-600 px-5 py-1.5 ">
              Sign Up
            </button>
        </div>
      </div>
    </nav>
  );
}
