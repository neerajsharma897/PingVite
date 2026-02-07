export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-indigo-600 text-white border-t border-indigo-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Brand Column */}
        <div>
          <h3 className="font-bold text-xl mb-4">PingVite</h3>
          <p className="text-indigo-100 text-sm leading-relaxed mb-4">
            Empowering learners worldwide with cutting-edge skills for the digital future.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <a href="#" className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-indigo-400 transition-colors">
              <span className="text-sm">X</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-indigo-400 transition-colors">
              <span className="text-sm">in</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-indigo-400 transition-colors">
              <span className="text-sm">fb</span>
            </a>
          </div>
        </div>

        {/* Courses Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Courses</h4>
          <ul className="space-y-2 text-indigo-100 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cloud Computing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
            <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-indigo-100 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-indigo-100 text-sm">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>123 Learning Street, Tech City, TC 90210</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:support@pingvite.com" className="hover:text-white transition-colors">support@pingvite.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-indigo-500 flex justify-center items-center text-center text-indigo-200 text-sm">
        <p>&copy; {new Date().getFullYear()} PingVite Learning. All rights reserved.</p>
      </div>
    </footer>
  );
}
