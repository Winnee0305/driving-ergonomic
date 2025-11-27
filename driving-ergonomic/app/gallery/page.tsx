import Link from 'next/link';

export default function GalleryPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#0a0e1a] py-32 overflow-hidden">
        <div className="absolute inset-0 diagonal-lines opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-sm font-medium mb-6 text-cyan-400">
              PROJECT JOURNEY
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gallery & Milestones
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A visual timeline showcasing our project evolution from concept to implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Project Resources */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="#"
              className="group bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2-Minute Demo Video
              </h3>
              <p className="text-gray-600 text-sm">
                Watch our project demonstration and see the system in action
              </p>
            </a>

            <a
              href="#"
              className="group bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Project Poster
              </h3>
              <p className="text-gray-400 text-sm">
                Download PPTX & PDF versions of our project poster
              </p>
            </a>

            <a
              href="#"
              className="group bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Project Abstract
              </h3>
              <p className="text-gray-400 text-sm">
                Download DOC & PDF versions of our abstract
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project Timeline
            </h2>
            <p className="text-xl text-gray-400">
              Key milestones in our development journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Milestone 1 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Week 1-2
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Research & Discovery
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Conducted user interviews, literature review, and identified ergonomic 
                    challenges faced by drivers.
                  </p>
                  <div className="inline-flex items-center text-sm text-cyan-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-[#0a0e1a] shadow-lg shadow-cyan-500/50 z-10"></div>
                  <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6">
                    <div className="aspect-video bg-[#0a0e1a] rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🔍</div>
                        <p className="text-sm text-gray-600">Research Phase Image</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Week 3-4
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ideation & Concept Development
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Brainstorming sessions, initial sketches, and defining the AI-powered 
                    haptic feedback solution concept.
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed
                  </div>
                </div>
                <div className="relative md:order-1">
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-[#0a0e1a] shadow-lg shadow-blue-500/50 z-10"></div>
                  <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6">
                    <div className="aspect-video bg-[#0a0e1a] rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">💡</div>
                        <p className="text-sm text-gray-400">Ideation Sketches</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block bg-purple-500/20 border border-purple-500/30 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Week 5-7
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Prototyping & Development
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Built low-fidelity prototypes, developed AI detection model, and integrated 
                    haptic feedback hardware.
                  </p>
                  <div className="inline-flex items-center text-sm text-purple-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-[#0a0e1a] shadow-lg shadow-purple-500/50 z-10"></div>
                  <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6">
                    <div className="aspect-video bg-[#0a0e1a] rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">⚙️</div>
                        <p className="text-sm text-gray-400">Prototype Images</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="inline-block bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Week 8-9
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Usability Testing
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Conducted three rounds of usability testing with real users, collected 
                    feedback, and refined the design.
                  </p>
                  <div className="inline-flex items-center text-sm text-green-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed
                  </div>
                </div>
                <div className="relative md:order-1">
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-4 border-[#0a0e1a] shadow-lg shadow-green-500/50 z-10"></div>
                  <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6">
                    <div className="aspect-video bg-[#0a0e1a] rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🧪</div>
                        <p className="text-sm text-gray-400">Testing Session Photos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone 5 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Week 10-11
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Refinement & Integration
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Implemented feedback from testing, improved AI accuracy, and polished 
                    the user interface design.
                  </p>
                  <div className="inline-flex items-center text-sm text-yellow-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full border-4 border-[#0a0e1a] shadow-lg shadow-yellow-500/50 z-10"></div>
                  <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6">
                    <div className="aspect-video bg-[#0a0e1a] rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">✨</div>
                        <p className="text-sm text-gray-400">Final Design Mockups</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone 6 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Week 12
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Final Showcase
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Prepared presentation materials, demo video, poster, and this website 
                    for the final project showcase.
                  </p>
                  <div className="inline-flex items-center text-sm text-pink-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed
                  </div>
                </div>
                <div className="relative md:order-1">
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-gradient-to-br from-pink-500 to-red-500 rounded-full border-4 border-[#0a0e1a] shadow-lg shadow-pink-500/50 z-10"></div>
                  <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6">
                    <div className="aspect-video bg-[#0a0e1a] rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎉</div>
                        <p className="text-sm text-gray-400">Showcase Materials</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Visual Gallery
            </h2>
            <p className="text-xl text-gray-400">
              Screenshots, diagrams, and photos from our project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="aspect-video bg-[#0a0e1a] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">📊</div>
                  <p className="text-sm text-gray-400">Research Data Visualization</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">User Research Findings</h3>
                <p className="text-sm text-gray-400">Survey results and interview insights</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="aspect-video bg-[#0a0e1a] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🎨</div>
                  <p className="text-sm text-gray-400">Design System</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">UI/UX Design</h3>
                <p className="text-sm text-gray-400">Interface mockups and design system</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="aspect-video bg-[#0a0e1a] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🤖</div>
                  <p className="text-sm text-gray-400">AI Model</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">Posture Detection</h3>
                <p className="text-sm text-gray-400">AI detection system in action</p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="aspect-video bg-[#0a0e1a] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">⚙️</div>
                  <p className="text-sm text-gray-400">Hardware Prototype</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">Haptic Device</h3>
                <p className="text-sm text-gray-400">Physical prototype components</p>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="aspect-video bg-[#0a0e1a] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🧪</div>
                  <p className="text-sm text-gray-400">Testing Session</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">Usability Testing</h3>
                <p className="text-sm text-gray-400">User testing sessions and feedback</p>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="aspect-video bg-[#0a0e1a] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">📱</div>
                  <p className="text-sm text-gray-400">Dashboard</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">Analytics Dashboard</h3>
                <p className="text-sm text-gray-400">Real-time monitoring interface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Achievement */}
      <section className="py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/20 rounded-2xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 diagonal-lines opacity-5"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Project Completed Successfully! 🎉
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                From initial research to final implementation, we have created an innovative 
                solution that addresses real-world ergonomic challenges in driving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all"
                >
                  Back to Home
                </Link>
                <Link
                  href="/team"
                  className="px-8 py-3 bg-[#0a0e1a] border border-cyan-500/30 rounded-lg font-semibold hover:border-cyan-500/50 transition-all"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
