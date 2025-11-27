export default function ProductPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#0a0e1a] py-32 overflow-hidden">
        <div className="absolute inset-0 diagonal-lines opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-sm font-medium mb-6 text-cyan-400">
              AI-POWERED ERGONOMIC SOLUTION
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                About the Product
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our intelligent system combines cutting-edge AI with haptic technology 
              to revolutionize driving ergonomics and enhance road safety.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-bold text-cyan-400 mb-3 tracking-widest">THE PROBLEM</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Ergonomic Challenge in Driving
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Poor driving posture is a widespread but often overlooked problem that affects millions 
                  of drivers worldwide. Improper seating position, incorrect steering wheel grip, and 
                  prolonged driving without breaks lead to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Chronic pain and discomfort</strong> in the neck, back, and shoulders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Reduced reaction time</strong> and compromised vehicle control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Long-term musculoskeletal disorders</strong> affecting quality of life</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Increased fatigue</strong> during long-distance travel</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">⚠️</div>
                  <p className="text-gray-400">Problem Illustration</p>
                  <p className="text-sm text-gray-500 mt-2">Add diagram/image showing poor posture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-cyan-400 mb-3 tracking-widest">OUR SOLUTION</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Driven Ergonomic Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SMART Drive combines real-time AI posture detection with intuitive haptic feedback 
              to help drivers maintain optimal ergonomic positioning throughout their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-gray-400">Solution Diagram</p>
                  <p className="text-sm text-gray-500 mt-2">Add system architecture or demo image</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">AI Vision Detection</h4>
                    <p className="text-gray-400">
                      Camera-based system continuously monitors driver posture using computer vision algorithms
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Real-time Analysis</h4>
                    <p className="text-gray-400">
                      AI processes posture data and identifies deviations from optimal ergonomic positioning
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Haptic Feedback</h4>
                    <p className="text-gray-400">
                      Gentle vibrations alert the driver to adjust posture without causing distraction
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Continuous Learning</h4>
                    <p className="text-gray-400">
                      System adapts to individual driver patterns and provides personalized recommendations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive ergonomic support powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Posture Detection
              </h3>
              <p className="text-gray-400">
                Advanced computer vision identifies neck angle, back alignment, and shoulder positioning in real-time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Smart Alerts
              </h3>
              <p className="text-gray-400">
                Context-aware haptic feedback adjusts intensity based on driving conditions and urgency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-400">
                Track ergonomic metrics over time and receive personalized insights for improvement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Break Reminders
              </h3>
              <p className="text-gray-400">
                Intelligent system suggests optimal break times based on driving duration and posture quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Customizable Settings
              </h3>
              <p className="text-gray-400">
                Adjust sensitivity, feedback patterns, and alert preferences to match your driving style.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Privacy First
              </h3>
              <p className="text-gray-400">
                All processing happens locally on-device. No video data is stored or transmitted externally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-32 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 text-white relative">
        <div className="absolute inset-0 bg-[#0a0e1a]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why It Matters
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              By addressing ergonomic issues proactively, SMART Drive not only improves comfort 
              but also enhances overall driving safety and reduces the risk of long-term health problems.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/20 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">85%</div>
                <p className="text-gray-400">of drivers experience posture-related discomfort</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/20 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">40%</div>
                <p className="text-gray-400">reduction in fatigue with proper ergonomics</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/20 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
                <p className="text-gray-400">continuous monitoring and support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400">
              Built with cutting-edge tools and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-6 rounded-xl border border-cyan-500/10 text-center hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="font-semibold text-white mb-1">AI/ML</h4>
              <p className="text-sm text-gray-400">TensorFlow, OpenCV</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-6 rounded-xl border border-cyan-500/10 text-center hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="font-semibold text-white mb-1">Hardware</h4>
              <p className="text-sm text-gray-400">Arduino, Sensors</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-6 rounded-xl border border-cyan-500/10 text-center hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold text-white mb-1">Frontend</h4>
              <p className="text-sm text-gray-400">React, Next.js</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-6 rounded-xl border border-cyan-500/10 text-center hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="font-semibold text-white mb-1">Backend</h4>
              <p className="text-sm text-gray-400">Python, Node.js</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
