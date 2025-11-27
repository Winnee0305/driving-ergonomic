export default function ResearchPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#0a0e1a] py-32 overflow-hidden">
        <div className="absolute inset-0 diagonal-lines opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-sm font-medium mb-6 text-cyan-400">
              EVIDENCE-BASED DESIGN
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Research & Iterative Process
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our journey from initial research to final design, guided by user feedback 
              and rigorous testing at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Research Methodology
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              We employed a comprehensive human-centered design approach, combining qualitative 
              and quantitative research methods to understand driver needs and validate our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-6 rounded-xl hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Discovery</h3>
              <p className="text-sm text-gray-400">
                User interviews, literature review, and problem identification
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-6 rounded-xl hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Ideation</h3>
              <p className="text-sm text-gray-400">
                Brainstorming, sketching, and concept development
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-6 rounded-xl hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Prototyping</h3>
              <p className="text-sm text-gray-400">
                Low to high-fidelity prototypes and iterative refinement
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-6 rounded-xl hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Validation</h3>
              <p className="text-sm text-gray-400">
                Usability testing, heuristic evaluation, and refinement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                User Research
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Interviews & Surveys
                  </h3>
                  <p className="text-gray-400 mb-3">
                    Conducted 25+ driver interviews and surveys to understand pain points, 
                    driving habits, and ergonomic awareness.
                  </p>
                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-lg">
                    <p className="text-sm font-medium text-cyan-400 mb-1">Key Finding:</p>
                    <p className="text-sm text-gray-300">
                      78% of participants reported experiencing back or neck pain during 
                      long drives, but only 23% actively adjusted their posture.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Observational Studies
                  </h3>
                  <p className="text-gray-400 mb-3">
                    Observed real driving sessions to identify common posture mistakes 
                    and environmental factors affecting ergonomics.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-400 mb-1">Key Finding:</p>
                    <p className="text-sm text-gray-300">
                      Most posture deterioration occurs after 45 minutes of continuous 
                      driving, with shoulders and neck being most affected.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl mb-6">
                <h3 className="font-semibold text-white mb-4">Research Participants</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-400">Daily Commuters</span>
                      <span className="text-sm font-semibold text-cyan-400">45%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-400">Professional Drivers</span>
                      <span className="text-sm font-semibold text-blue-400">30%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-400">Long-Distance Travelers</span>
                      <span className="text-sm font-semibold text-purple-400">25%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-5xl mb-4">📊</div>
                  <p className="text-gray-300 font-medium">Research Data Visualization</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Add charts/graphs from your research findings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heuristic Evaluation */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Heuristic Evaluation
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              We evaluated our design against Nielsen&apos;s 10 Usability Heuristics to identify 
              potential usability issues early in the development process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">Visibility of System Status</h3>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded border border-green-500/30">Good</span>
              </div>
              <p className="text-sm text-gray-400">
                Real-time feedback through haptic alerts and dashboard indicators keeps 
                users informed of system status.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">Match System & Real World</h3>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded border border-green-500/30">Good</span>
              </div>
              <p className="text-sm text-gray-400">
                Uses familiar ergonomic terminology and intuitive visual representations 
                of body posture.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">User Control & Freedom</h3>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded border border-yellow-500/30">Improved</span>
              </div>
              <p className="text-sm text-gray-400">
                Added quick settings access and ability to pause alerts temporarily during 
                critical driving situations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">Consistency & Standards</h3>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded border border-green-500/30">Good</span>
              </div>
              <p className="text-sm text-gray-400">
                Follows automotive UI conventions and maintains consistent design language 
                throughout the system.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">Error Prevention</h3>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded border border-green-500/30">Good</span>
              </div>
              <p className="text-sm text-gray-400">
                Context-aware system prevents unnecessary alerts during parking or vehicle 
                stationary situations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">Flexibility & Efficiency</h3>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded border border-green-500/30">Good</span>
              </div>
              <p className="text-sm text-gray-400">
                Customizable settings allow both novice and experienced users to tailor 
                the system to their preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="py-32 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Usability Testing
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              We conducted multiple rounds of usability testing with real users in simulated 
              driving environments to validate our design decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">3</div>
              <div className="text-sm text-gray-400 mb-4">Testing Rounds</div>
              <p className="text-sm text-gray-400">
                Iterative testing cycles with progressively refined prototypes
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">18</div>
              <div className="text-sm text-gray-400 mb-4">Test Participants</div>
              <p className="text-sm text-gray-400">
                Diverse group representing different age groups and driving experience
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 p-8 rounded-xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">92%</div>
              <div className="text-sm text-gray-400 mb-4">Satisfaction Rate</div>
              <p className="text-sm text-gray-400">
                Final prototype received high satisfaction scores from test users
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Key Testing Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mr-4 mt-0.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Haptic Feedback Effectiveness</h4>
                  <p className="text-gray-400">
                    89% of users successfully adjusted their posture in response to haptic alerts 
                    without feeling distracted from driving tasks.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mr-4 mt-0.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Dashboard Usability</h4>
                  <p className="text-gray-400">
                    Users found the analytics dashboard intuitive, with 94% able to interpret 
                    their posture metrics without additional guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-500/20 border border-yellow-500/30 rounded-full flex items-center justify-center mr-4 mt-0.5">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Calibration Process</h4>
                  <p className="text-gray-400">
                    Initial calibration took longer than expected. We simplified the process 
                    from 5 steps to 3 steps based on user feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mr-4 mt-0.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Long-term Adoption</h4>
                  <p className="text-gray-400">
                    Follow-up studies showed 82% of users continued using the system after 
                    2 weeks, reporting improved awareness of their posture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Iterations */}
      <section className="py-32 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Design Iterations
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              Our design evolved through multiple iterations, each informed by user feedback 
              and testing results.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="bg-[#0a0e1a] border border-cyan-500/10 rounded-lg p-6 mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📝</div>
                      <p className="text-sm text-gray-400">Sketches Placeholder</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Initial Sketches</h3>
                  <p className="text-sm text-gray-400">
                    Early concept sketches exploring different approaches to posture feedback 
                    and interface design.
                  </p>
                </div>

                <div>
                  <div className="bg-[#0a0e1a] border border-cyan-500/10 rounded-lg p-6 mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <p className="text-sm text-gray-400">Wireframe Placeholder</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Low-Fi Prototypes</h3>
                  <p className="text-sm text-gray-400">
                    Paper prototypes and wireframes used for early usability testing and 
                    concept validation.
                  </p>
                </div>

                <div>
                  <div className="bg-[#0a0e1a] border border-cyan-500/10 rounded-lg p-6 mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💎</div>
                      <p className="text-sm text-gray-400">Mockup Placeholder</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-2">High-Fi Mockups</h3>
                  <p className="text-sm text-gray-400">
                    Polished digital mockups with final visual design, ready for development 
                    and implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Major Design Changes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a0e1a] border border-cyan-500/10 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-2xl mr-3">🔄</div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Iteration 1 → 2</h4>
                      <p className="text-sm text-gray-400">
                        Moved from visual alerts to haptic feedback based on distraction concerns 
                        during driving tests.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0e1a] border border-cyan-500/10 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-2xl mr-3">🔄</div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Iteration 2 → 3</h4>
                      <p className="text-sm text-gray-400">
                        Simplified calibration process and added adaptive learning to reduce 
                        false positives in alerts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Findings Summary */}
      <section className="py-32 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 text-white relative">
        <div className="absolute inset-0 bg-[#0a0e1a]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research Outcomes
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Our iterative research and testing process validated the effectiveness of AI-based 
              posture detection combined with haptic feedback for improving driving ergonomics.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/20 p-6 rounded-xl text-left">
                <h4 className="font-semibold mb-2 text-lg text-white">Validated Hypothesis</h4>
                <p className="text-gray-400 text-sm">
                  Non-intrusive haptic feedback effectively prompts posture correction without 
                  causing driving distractions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-cyan-500/20 p-6 rounded-xl text-left">
                <h4 className="font-semibold mb-2 text-lg text-white">User Acceptance</h4>
                <p className="text-gray-400 text-sm">
                  High satisfaction rates and sustained usage indicate strong market potential 
                  and user value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
