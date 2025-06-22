import React, { useEffect, useRef } from 'react';
import { Globe, Smartphone, Database, Palette, ShoppingBag, Settings } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo('.section-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Static, dynamic, and eCommerce websites built with modern frameworks. Responsive, fast, and SEO-optimized for maximum performance.",
      features: ["React/Next.js", "WordPress", "eCommerce", "SEO Optimized"],
      color: "from-blue-500 to-cyan-500",
      schema: "WebDevelopment"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform Flutter apps and native Android/iOS development. User-friendly interfaces with seamless performance.",
      features: ["Flutter", "Native iOS/Android", "Cross-platform", "App Store Ready"],
      color: "from-purple-500 to-pink-500",
      schema: "MobileApplication"
    },
    {
      icon: Database,
      title: "CRM & ERP Solutions",
      description: "Custom CRM and ERP systems tailored to your business needs. Streamline operations and boost productivity.",
      features: ["Custom CRM", "ERP Systems", "Data Analytics", "Cloud Integration"],
      color: "from-green-500 to-emerald-500",
      schema: "SoftwareApplication"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience. From wireframes to pixel-perfect interfaces.",
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
      color: "from-orange-500 to-red-500",
      schema: "DesignService"
    },
    {
      icon: ShoppingBag,
      title: "Shopify & WordPress Websites",
      description: "Professional e-commerce stores and content management systems. Custom themes, plugins, and full-featured online stores.",
      features: ["Shopify Stores", "WordPress Sites", "Custom Themes", "Plugin Development"],
      color: "from-yellow-500 to-orange-500",
      schema: "WebDevelopment"
    },
    {
      icon: Settings,
      title: "Technical Consulting",
      description: "Expert guidance on technology stack, architecture decisions, and digital transformation strategies.",
      features: ["Tech Strategy", "Code Review", "Performance Optimization", "Scalability Planning"],
      color: "from-indigo-500 to-purple-500",
      schema: "ConsultingService"
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-24 bg-white"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title text-4xl sm:text-5xl font-bold text-neutral-800 mb-6">
            Our Core
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="section-title text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital solutions. 
            Our expert team delivers quality code, timely delivery, and client-first communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="service-card group relative bg-neutral-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-neutral-100 hover:border-neutral-200"
              itemScope
              itemType={`https://schema.org/${service.schema}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-blue-700 transition-colors duration-300" itemProp="name">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed mb-6" itemProp="description">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full font-medium group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-neutral-800 mb-12">Our Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", desc: "Building with quality code and best practices" },
              { step: "04", title: "Deployment", desc: "Testing, launching, and ongoing support" }
            ].map((process, index) => (
              <div key={index} className="relative" itemScope itemType="https://schema.org/HowToStep">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2" itemProp="name">{process.title}</h4>
                <p className="text-neutral-600 text-sm" itemProp="text">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-y-1/2" aria-hidden="true"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;