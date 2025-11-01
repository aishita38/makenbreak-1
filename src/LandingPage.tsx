import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: "☁️",
      title: "Cloud-Based Access",
      description: "Access your spreadsheets from anywhere, anytime. No downloads or installations required."
    },
    {
      icon: "👥",
      title: "Real-Time Collaboration",
      description: "Work together seamlessly. See changes instantly and track who's editing what."
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Perfect experience on phones and tablets with touch-friendly controls."
    },
    {
      icon: "🔗",
      title: "Simple Sharing",
      description: "Share spreadsheets with view-only or edit permissions in one click."
    },
    {
      icon: "💬",
      title: "Built-in Comments",
      description: "Add comments to cells and have threaded conversations with your team."
    },
    {
      icon: "⏰",
      title: "Version History",
      description: "Never lose work again. Preview and restore previous versions easily."
    }
  ];

  const painPoints = [
    {
      icon: "📄",
      title: "No More Version Conflicts",
      description: "Say goodbye to confusing file versions and email attachments."
    },
    {
      icon: "🌐",
      title: "Access From Any Device",
      description: "Work on desktop, tablet, or mobile without missing a beat."
    },
    {
      icon: "⚡",
      title: "Real-Time Updates",
      description: "See who's editing and changes appear instantly for everyone."
    },
    {
      icon: "🚀",
      title: "Up and Running in Seconds",
      description: "Create, share, and collaborate without complex setup."
    }
  ];

  const useCases = [
    {
      icon: "💰",
      title: "Personal Budgeting",
      description: "Track expenses, plan savings, and manage your finances with ease."
    },
    {
      icon: "📦",
      title: "Inventory Tracking",
      description: "Monitor stock levels, suppliers, and reorder points efficiently."
    },
    {
      icon: "🎯",
      title: "Project Planning",
      description: "Organize tasks, timelines, and resources for successful projects."
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description: "Import, analyze, and visualize your data with powerful formulas."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Coordinate schedules, track progress, and share updates in real-time."
    },
    {
      icon: "📈",
      title: "Sales Tracking",
      description: "Monitor leads, deals, and performance metrics for your business."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create a Spreadsheet",
      description: "Start with a blank sheet or import your existing data. No setup required.",
      illustration: "📊"
    },
    {
      step: "02", 
      title: "Share with Your Team",
      description: "Invite collaborators with one click. Set permissions for viewing or editing.",
      illustration: "👥"
    },
    {
      step: "03",
      title: "Collaborate in Real-Time",
      description: "Work together seamlessly. See changes instantly and communicate via comments.",
      illustration: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 bg-white rounded-md grid grid-cols-2 gap-px p-0.5">
                  <div className="bg-blue-600 rounded-sm"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-blue-600 rounded-sm"></div>
                </div>
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight">Gridly</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
              <button 
                onClick={() => navigate('/app')}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Launch App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              New: Real-time collaboration features
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Spreadsheets Made
              <span className="block text-gradient">Simple</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              The collaborative spreadsheet that just works. Real-time editing, 
              powerful formulas, and seamless sharing—all in one beautiful interface.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => navigate('/app')}
                className="btn-primary group"
              >
                Start Free
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="btn-secondary">
                🎥 Watch Demo
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium">Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span className="font-medium">No setup needed</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div 
            className="mt-20 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 p-8 backdrop-blur-sm">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  {/* Spreadsheet Header */}
                  <div className="grid grid-cols-8 gap-2 mb-6">
                    <div className="h-10 bg-gray-200 rounded-lg"></div>
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="h-10 bg-blue-100 rounded-lg border-2 border-blue-200 flex items-center justify-center">
                        <span className="text-blue-700 font-bold text-sm">{String.fromCharCode(65 + i)}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Spreadsheet Rows */}
                  {Array.from({ length: 6 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-8 gap-2 mb-2">
                      <div className="h-10 bg-blue-100 rounded-lg border-2 border-blue-200 flex items-center justify-center">
                        <span className="text-blue-700 font-bold text-sm">{rowIndex + 1}</span>
                      </div>
                      {Array.from({ length: 7 }).map((_, colIndex) => (
                        <div key={colIndex} className={`h-10 rounded-lg border-2 flex items-center px-3 ${
                          rowIndex === 1 && colIndex === 2 
                            ? 'bg-blue-50 border-blue-300 shadow-inner' 
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        } transition-colors`}>
                          {rowIndex === 1 && colIndex === 2 && (
                            <span className="text-blue-800 font-medium text-sm">Welcome to Gridly!</span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  Online: 3 users
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  Real-time sync
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stop Fighting with Complex
              <span className="block text-gray-600">Spreadsheets</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Traditional spreadsheets are frustrating. Version conflicts, device limitations, 
              and clunky interfaces make collaboration painful. There's a better way.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center group"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{point.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="block text-gradient">Collaborate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful features that make spreadsheet collaboration effortless and enjoyable.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-8 group cursor-pointer"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes, not hours
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                variants={fadeInUp}
              >
                <div className="relative mb-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <span className="text-4xl">{step.illustration}</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-16 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Perfect for Every
              <span className="block text-gradient">Use Case</span>
            </h2>
            <p className="text-xl text-gray-600">
              From personal projects to team collaboration
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="card p-8 hover:border-blue-200 group"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{useCase.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Gridly?
            </h2>
          </motion.div>

          <motion.div 
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12">
                <h3 className="font-bold text-gray-900 mb-6 text-xl">Feature</h3>
                <div className="space-y-4 text-base">
                  <div className="py-2">Real-time collaboration</div>
                  <div className="py-2">Cloud storage</div>
                  <div className="py-2">Mobile app</div>
                  <div className="py-2">Version history</div>
                  <div className="py-2">Comments & discussions</div>
                  <div className="py-2">Advanced formulas</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-8 lg:p-12 border-x border-gray-200">
                <h3 className="font-bold text-red-600 mb-6 text-xl flex items-center gap-3">
                  <span>Traditional</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">❌</span>
                </h3>
                <div className="space-y-4 text-base">
                  <div className="py-2 text-red-600">Email attachments only</div>
                  <div className="py-2 text-red-600">Local files only</div>
                  <div className="py-2 text-red-600">Desktop only</div>
                  <div className="py-2 text-red-600">Manual saves</div>
                  <div className="py-2 text-red-600">Separate tools</div>
                  <div className="py-2 text-red-600">Basic formulas</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 lg:p-12">
                <h3 className="font-bold text-green-600 mb-6 text-xl flex items-center gap-3">
                  <span>Gridly</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">✅</span>
                </h3>
                <div className="space-y-4 text-base">
                  <div className="py-2 text-green-600 flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    Live editing
                  </div>
                  <div className="py-2 text-green-600 flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    Auto-saved
                  </div>
                  <div className="py-2 text-green-600 flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    Mobile optimized
                  </div>
                  <div className="py-2 text-green-600 flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    Full history
                  </div>
                  <div className="py-2 text-green-600 flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    Built-in comments
                  </div>
                  <div className="py-2 text-green-600 flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    Advanced formulas
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Ready to Simplify Your
              <span className="block">Spreadsheets?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of teams who have already made the switch to effortless collaboration.
            </p>
            <button 
              onClick={() => navigate('/app')}
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-white/25 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto group"
            >
              Get Started Free
              <span className="text-2xl group-hover:translate-x-2 transition-transform">🚀</span>
            </button>
            <p className="text-blue-200 mt-6 text-lg font-medium">
              No credit card required • Free forever • Setup in seconds
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-md grid grid-cols-2 gap-px p-0.5">
                    <div className="bg-blue-600 rounded-sm"></div>
                    <div className="bg-transparent"></div>
                    <div className="bg-transparent"></div>
                    <div className="bg-blue-600 rounded-sm"></div>
                  </div>
                </div>
                <span className="font-bold text-2xl tracking-tight">Gridly</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                The collaborative spreadsheet that just works. Built for teams who want powerful features without the complexity.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <span className="text-xl">💻</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <span className="text-xl">✉️</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Product</h4>
              <ul className="space-y-4 text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
              <ul className="space-y-4 text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-base text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base">
              © 2024 Gridly. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
