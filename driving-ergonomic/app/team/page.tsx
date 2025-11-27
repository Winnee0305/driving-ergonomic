export default function TeamPage() {
  const teamMembers = [
    {
      name: "Christina Yap Xin Yi",
      role: "Project Lead & AI Developer",
      bio: "Specializes in computer vision and machine learning algorithms for posture detection.",
      image: "👤",
      id: "23028531"
    },
    {
      name: "Chew Win Nee",
      role: "Hardware Engineer",
      bio: "Designs and implements haptic feedback systems and sensor integration.",
      image: "👤",
      id: "23027964"
    },
    {
      name: "Lim Jia Yu",
      role: "UX/UI Designer",
      bio: "Creates intuitive interfaces and conducts ergonomic research for optimal user experience.",
      image: "👤",
      id: "22014773"
    },
    {
      name: "Lim Zi Xuan",
      role: "Full-Stack Developer",
      bio: "Develops the web dashboard and data analytics platform for the system.",
      image: "👤",
      id: "23031645"
    },
    {
      name: "Wong Jeng Man",
      role: "Research Analyst",
      bio: "Conducts user research and evaluates system usability and effectiveness.",
      image: "👤",
      id: "23026685"
    },
    {
      name: "Yeap Ching Wei",
      role: "System Integrator",
      bio: "Ensures seamless integration between hardware and software components.",
      image: "👤",
      id: "21047451"
    },
  ];

  return (
    <div className="pt-20 bg-[#0a0e1a] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0a0e1a] py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A multidisciplinary team of innovators passionate about improving driving safety 
              through AI and ergonomic design.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-2xl border border-cyan-500/10 overflow-hidden hover:border-cyan-500/30 hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center border-b border-cyan-500/10">
                  <span className="text-7xl group-hover:scale-110 transition-transform">{member.image}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-gray-500 mb-3">
                    ID: {member.id}
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                    {member.role}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Contributions */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Contributions</span>
            </h2>
            <p className="text-xl text-gray-400">
              How each team member drives the project forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                    Research & Development
                  </h3>
                  <p className="text-gray-400">
                    Conducted extensive user research, heuristic evaluations, and usability testing 
                    to validate our ergonomic solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                    Technical Implementation
                  </h3>
                  <p className="text-gray-400">
                    Developed AI models, hardware prototypes, and software systems that bring 
                    our vision to life with cutting-edge technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                    Design & Prototyping
                  </h3>
                  <p className="text-gray-400">
                    Created wireframes, mockups, and interactive prototypes through multiple 
                    iterations based on user feedback and testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                    Documentation & Communication
                  </h3>
                  <p className="text-gray-400">
                    Maintained comprehensive documentation, created presentations, and 
                    communicated our findings to stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Approach</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              We believe in user-centered design, iterative development, and evidence-based solutions 
              that prioritize both safety and usability.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-bold text-white mb-3 uppercase tracking-wide">User-Centered</h3>
                <p className="text-sm text-gray-400">Every decision driven by user needs and feedback</p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="font-bold text-white mb-3 uppercase tracking-wide">Iterative</h3>
                <p className="text-sm text-gray-400">Continuous improvement through testing and refinement</p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">🔬</div>
                <h3 className="font-bold text-white mb-3 uppercase tracking-wide">Evidence-Based</h3>
                <p className="text-sm text-gray-400">Grounded in research and validated through data</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
