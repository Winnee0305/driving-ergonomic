import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20 bg-[#0a0e1a]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0a0e1a] text-white overflow-hidden min-h-screen flex items-center">
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 diagonal-lines opacity-30"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                    SMART driving ergonomic
                  </span>
                  <br />
                  <span className="text-white">
                    ASSISTANT
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 tracking-wide uppercase font-light">
                  AI-BASED DETECTION AND HAPTIC FEEDBACK FOR SAFER DRIVING
                </p>
              </div>

              {/* Team Information */}
              <div className="space-y-3 pt-8 border-t border-cyan-500/20">
                <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">Team Members</div>
                <div className="space-y-2 text-gray-300 font-mono text-sm">
                  <p>Christina Yap Xin Yi | 23028531</p>
                  <p>Chew Win Nee | 23027964</p>
                  <p>Lim Jia Yu | 22014773</p>
                  <p>Lim Zi Xuan | 23031645</p>
                  <p>Wong Jeng Man | 23026685</p>
                  <p>Yeap Ching Wei | 21047451</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/product"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 text-center uppercase tracking-wide text-sm"
                >
                  Explore Solution
                </Link>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-full font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center uppercase tracking-wide text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="relative lg:block hidden fade-in">
              <div className="relative">
                {/* Decorative diagonal lines */}
                <div className="absolute -right-10 top-0 w-64 h-64 diagonal-lines opacity-50"></div>
                
                {/* Car image placeholder */}
                <div className="relative z-10">
                  <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-cyan-500/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">🚗</div>
                      <p className="text-sm text-gray-500">Tesla Model 3 Placeholder</p>
                      <p className="text-xs text-gray-600 mt-2">Replace with actual car image</p>
                    </div>
                  </div>
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section id="features" className="py-32 bg-[#0f1419] border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">AI</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">DETECTION SYSTEM</div>
              <div className="text-gray-400 text-sm leading-relaxed">Advanced computer vision algorithms</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">Real-time</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">HAPTIC FEEDBACK</div>
              <div className="text-gray-400 text-sm leading-relaxed">Instant posture correction alerts</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">Ergonomic</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">DESIGN FOCUS</div>
              <div className="text-gray-400 text-sm leading-relaxed">Human-centered design approach</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">MONITORING</div>
              <div className="text-gray-400 text-sm leading-relaxed">Continuous posture tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Driving Safety</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Our intelligent system combines AI-based posture detection with haptic feedback 
              technology to help drivers maintain optimal ergonomic positioning, reducing fatigue 
              and enhancing safety on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">AI Detection</h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced computer vision algorithms detect improper posture and positioning in real-time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Haptic Feedback</h3>
              <p className="text-gray-400 leading-relaxed">
                Gentle vibration alerts guide drivers to correct their posture without distraction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Data Insights</h3>
              <p className="text-gray-400 leading-relaxed">
                Track ergonomic metrics and driving patterns to improve long-term posture habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              See It In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Action</span>
            </h2>
            <p className="text-xl text-gray-400">
              Watch our 2-minute demonstration video
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 flex items-center justify-center overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer glow-hover">
                  <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-400 font-semibold">Video Placeholder</p>
                <p className="text-sm text-gray-600 mt-2">Add your demo video embed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#0a0e1a] via-[#1a1f2e] to-[#0a0e1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Project Journey</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn more about our research process, team, and the technology behind SMART Drive
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/research"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm"
            >
              View Research
            </Link>
            <Link
              href="/team"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-full font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
