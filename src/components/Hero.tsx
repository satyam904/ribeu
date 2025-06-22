import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Smartphone, Globe, Database, ShoppingBag } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(statsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(".floating-tech",
      { y: 20, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.6"
    );

    // Floating animation for tech icons
    gsap.to(".floating-tech", {
      y: "-=15",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.4
    });

  }, []);

  const techStack = [
    { icon: Globe, label: "Web Development", color: "from-blue-500 to-cyan-500" },
    { icon: Smartphone, label: "Mobile Apps", color: "from-purple-500 to-pink-500" },
    { icon: Database, label: "CRM/ERP Systems", color: "from-green-500 to-emerald-500" },
    { icon: ShoppingBag, label: "Shopify & WordPress", color: "from-orange-500 to-red-500" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-20"
      itemScope 
      itemType="https://schema.org/WebPageElement"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full opacity-25 blur-lg"></div>
        
        {/* Code-like background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 text-6xl font-mono text-blue-600 transform rotate-12">{'<>'}</div>
          <div className="absolute top-1/3 right-1/3 text-4xl font-mono text-purple-600 transform -rotate-12">{'{ }'}</div>
          <div className="absolute bottom-1/3 left-1/2 text-5xl font-mono text-cyan-600 transform rotate-45">{'</>'}</div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              🚀 Trusted tech partner for startups & enterprises
            </span>
          </div>

          <h1 
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-800 mb-8 leading-tight"
            itemProp="headline"
          >
            Crafting Scalable
            <span className="block bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 bg-clip-text text-transparent font-extrabold drop-shadow-sm mt-2">
              Digital Solutions
            </span>
          </h1>

          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-4xl mx-auto"
            itemProp="description"
          >
            Full-stack IT services specializing in custom website development, CRM systems, and mobile app solutions. 
            We empower businesses with tailored digital solutions that enhance productivity and scalability.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              aria-label="Start your project with Ribeu Solutions"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="group flex items-center space-x-3 text-neutral-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200"
              aria-label="View our portfolio of successful projects"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-neutral-200">
                <Play className="w-5 h-5 ml-1 text-blue-600" />
              </div>
              <span>View Our Work</span>
            </button>
          </div>

          {/* Tech Stack Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-20">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="floating-tech flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-neutral-700 font-medium text-sm" itemProp="name">{tech.label}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            {[
              { number: "150+", label: "Projects Delivered", schema: "numberOfProjects" },
              { number: "50+", label: "Happy Clients", schema: "numberOfClients" },
              { number: "5+", label: "Years Experience", schema: "yearsInOperation" }
            ].map((stat, index) => (
              <div key={index} className="text-center" itemScope itemType="https://schema.org/QuantitativeValue">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2" itemProp="value">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium" itemProp="name">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned with proper spacing */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;