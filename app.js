import React from 'react';

const App = () => {
  // Aapke updated projects ki list
  const myProjects = [
    { 
      title: 'Flipkart Clone', 
      desc: 'A full stack e-commerce app replica with payment gateway.', 
      img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '#' 
    },
    { 
      title: 'CIFAR-10 Classifier', 
      desc: 'Deep learning model for multi-class image classification.', 
      img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '#' 
    },
    { 
      title: 'Resume Analyzer', 
      desc: 'NLP based tool to extract keywords and rank resumes.', 
      img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '#' 
    },
    { 
      title: 'Spam Detector', 
      desc: 'Machine learning model to classify emails and texts as spam or legitimate.', 
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '#' 
    },
    { 
      title: 'AI Agent Scheduler', 
      desc: 'Intelligent scheduling system powered by AI agents for task automation.', 
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: 'https://github.com/GuptaSigma/AI-Agent-Scheduler' 
    }
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-white font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 pt-20 pb-16 flex flex-col md:flex-row items-center justify-between">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]"></div>
        </div>

        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-[#3b82f6]">Sigma</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 font-medium tracking-wide">
            AI/ML Engineer | Deep Learning Enthusiast
          </p>
          <button className="bg-[#111827] border border-blue-900/50 hover:bg-blue-900/80 text-sm font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] text-blue-400">
            Download Resume
          </button>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-end relative z-10">
          {/* Hero Image */}
          <div className="w-full max-w-[350px] aspect-square rounded-b-full bg-gradient-to-t from-blue-900/40 to-[#111827] border-b-4 border-blue-800/50 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.2)]">
             <img 
               src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
               alt="Sigma Profile" 
               className="w-full h-full object-cover opacity-90 mix-blend-overlay"
               style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
             />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="w-full bg-gradient-to-b from-transparent to-[#0a0e1a] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 tracking-wide">About Me</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl text-sm md:text-base">
            I'm a passionate AI/ML engineer from Mumbai, India, driven by a deep curiosity for cutting-edge research. 
            I specialize in machine learning and deep learning, constantly exploring innovative solutions 
            to complex problems.
          </p>
        </div>
      </section>

      {/* My Skills */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 tracking-wide">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Python */}
          <div className="bg-[#0d1224] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-yellow-500/50 hover:-translate-y-1 shadow-lg">
            <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            <span className="text-gray-300 font-medium text-sm">Python</span>
          </div>
          {/* TensorFlow */}
          <div className="bg-[#0d1224] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1 shadow-lg">
            <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            <span className="text-gray-300 font-medium text-sm">TensorFlow</span>
          </div>
          {/* Deep Learning */}
          <div className="bg-[#0d1224] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1 shadow-lg">
            <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span className="text-gray-300 font-medium text-sm">Deep Learning</span>
          </div>
          {/* Flask */}
          <div className="bg-[#0d1224] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-gray-400/50 hover:-translate-y-1 shadow-lg">
            <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span className="text-gray-300 font-medium text-sm">Flask</span>
          </div>
        </div>
      </section>

      {/* My Projects */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 tracking-wide">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {myProjects.map((project, index) => (
            <div key={index} className="bg-[#0b101e] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-900/50 transition-all duration-300 flex flex-col">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-32 object-cover bg-gray-800 opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-200 mb-2 text-sm">{project.title}</h3>
                <p className="text-gray-500 text-xs mb-4 flex-grow">{project.desc}</p>
                <a href={project.link} target={project.link !== '#' ? "_blank" : "_self"} rel="noreferrer" className="w-full">
                  <button className="w-full bg-[#162032] hover:bg-blue-600 hover:text-white text-blue-400 border border-blue-900/30 text-xs py-2 rounded transition-colors cursor-pointer">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Hackathons */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 tracking-wide">Certifications & Hackathons</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((cert, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <img 
                src={`https://via.placeholder.com/300x200/1a202c/ffffff?text=Certificate+${cert}`} 
                alt={`Certificate ${cert}`}
                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Get In Touch */}
      <section className="w-full bg-gradient-to-t from-[#05070f] to-transparent pt-12 pb-8 border-t border-gray-900 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 tracking-wide">Get In Touch</h2>
          <div className="flex flex-wrap gap-8 md:gap-16 mb-16">
            <a href="mailto:sigmadata@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span className="text-sm">sigmadata@gmail.com</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/GuptaSigma" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              <span className="text-sm">GitHub</span>
            </a>
          </div>
          
          <div className="text-gray-600 text-xs pt-8 border-t border-gray-800/50">
            © 2026 Sigma. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;