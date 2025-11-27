export default function Footer() {
  return (
    <footer className="bg-[#0f1419] text-gray-400 border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-white tracking-wider">SMART DRIVE</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-Based Detection and Haptic Feedback for Safer Driving
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-cyan-400 transition-colors duration-300">Home</a></li>
              <li><a href="/team" className="hover:text-cyan-400 transition-colors duration-300">Team</a></li>
              <li><a href="/product" className="hover:text-cyan-400 transition-colors duration-300">Product</a></li>
              <li><a href="/research" className="hover:text-cyan-400 transition-colors duration-300">Research</a></li>
              <li><a href="/gallery" className="hover:text-cyan-400 transition-colors duration-300">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider">RESOURCES</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Download Abstract</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">View Poster</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Watch Video</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-500/10 mt-8 pt-8 text-sm text-center text-gray-600">
          <p>&copy; 2025 SMART Driving Ergonomic Assistant. Human Computer Interaction Project.</p>
        </div>
      </div>
    </footer>
  );
}
