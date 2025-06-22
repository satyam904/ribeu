import React, { useEffect, useRef } from 'react';
import { Star, Quote, Building2, Users, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, RetailFlow",
      company: "E-commerce Startup",
      avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "TechCraft delivered our complete e-commerce platform in just 8 weeks. Their Flutter mobile app increased our sales by 40% in the first month. Exceptional quality and communication throughout.",
      rating: 5,
      project: "E-commerce Platform + Mobile App"
    },
    {
      name: "Marcus Chen",
      role: "Operations Director, LogiTech Solutions",
      company: "Manufacturing Company",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "The custom CRM system they built transformed our entire workflow. We can now track everything from leads to delivery in real-time. ROI was evident within 3 months.",
      rating: 5,
      project: "Custom CRM & ERP System"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, HealthTech Innovations",
      company: "Healthcare Startup",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "From UI/UX design to full-stack development, they handled everything perfectly. The patient management app is now used by 500+ healthcare providers. Truly professional team.",
      rating: 5,
      project: "Healthcare Management Platform"
    }
  ];

  const stats = [
    { icon: Building2, number: "150+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
    { icon: Users, number: "50+", label: "Happy Clients", color: "from-purple-500 to-pink-500" },
    { icon: Zap, number: "98%", label: "Client Satisfaction", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 mb-6">
            Client Success
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            See how we've helped businesses across industries achieve their digital transformation goals with our tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative border border-neutral-100"
            >
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-neutral-800">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-neutral-500 text-xs">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-neutral-700 leading-relaxed italic mb-4">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-neutral-100">
                <span className="text-xs text-neutral-500 font-medium">PROJECT:</span>
                <p className="text-sm text-blue-600 font-medium">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-neutral-800 mb-8">Technologies We Master</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Flutter", "Node.js", "Python", "PHP", "Laravel", 
              "WordPress", "Shopify", "Firebase", "AWS", "MongoDB", "MySQL"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-neutral-700 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;