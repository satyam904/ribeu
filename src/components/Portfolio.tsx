import React, { useEffect, useRef, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  ArrowRight,
  Filter,
  X
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  timeline: string;
  teamSize: string;
  liveUrl?: string;
  githubUrl?: string;
  results: {
    metric: string;
    value: string;
  }[];
}

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.portfolio-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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

  const categories = ['All', 'Web Development', 'Mobile Apps', 'CRM/ERP', 'UI/UX Design'];

  const projects: Project[] = [
    {
      id: 1,
      title: "RetailFlow E-commerce Platform",
      category: "Web Development",
      description: "Complete e-commerce solution with admin dashboard, inventory management, and payment integration.",
      longDescription: "A comprehensive e-commerce platform built for RetailFlow, featuring a modern React frontend, Node.js backend, and integrated payment processing. The platform includes advanced inventory management, real-time analytics, and a powerful admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory tracking",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
        "Payment gateway integration",
        "Order management system"
      ],
      timeline: "8 weeks",
      teamSize: "4 developers",
      liveUrl: "https://retailflow-demo.com",
      results: [
        { metric: "Sales Increase", value: "40%" },
        { metric: "Page Load Speed", value: "2.1s" },
        { metric: "Mobile Users", value: "65%" }
      ]
    },
    {
      id: 2,
      title: "HealthTech Patient Management",
      category: "Mobile Apps",
      description: "Cross-platform mobile app for healthcare providers to manage patient records and appointments.",
      longDescription: "A comprehensive healthcare management application built with Flutter, serving over 500+ healthcare providers. Features secure patient data management, appointment scheduling, and telemedicine capabilities.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
      features: [
        "Secure patient records",
        "Appointment scheduling",
        "Telemedicine integration",
        "Prescription management",
        "Insurance verification",
        "HIPAA compliant"
      ],
      timeline: "12 weeks",
      teamSize: "5 developers",
      results: [
        { metric: "Healthcare Providers", value: "500+" },
        { metric: "Patient Records", value: "10K+" },
        { metric: "App Rating", value: "4.8/5" }
      ]
    },
    {
      id: 3,
      title: "LogiTech CRM System",
      category: "CRM/ERP",
      description: "Custom CRM solution for manufacturing company with real-time tracking and analytics.",
      longDescription: "A powerful CRM and ERP system designed for LogiTech Solutions, streamlining their entire workflow from lead generation to product delivery. Features real-time tracking, advanced analytics, and automated reporting.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker"],
      features: [
        "Lead management system",
        "Real-time order tracking",
        "Automated reporting",
        "Inventory management",
        "Customer portal",
        "Analytics dashboard"
      ],
      timeline: "16 weeks",
      teamSize: "6 developers",
      results: [
        { metric: "Efficiency Increase", value: "60%" },
        { metric: "Processing Time", value: "-45%" },
        { metric: "Customer Satisfaction", value: "95%" }
      ]
    },
    {
      id: 4,
      title: "FinanceFlow Dashboard",
      category: "UI/UX Design",
      description: "Modern financial dashboard with data visualization and user-friendly interface design.",
      longDescription: "A comprehensive UI/UX design project for a financial technology company, featuring intuitive data visualization, responsive design, and accessibility-first approach. The design system includes 50+ components and detailed style guides.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      technologies: ["Figma", "React", "D3.js", "Tailwind CSS"],
      features: [
        "Interactive data visualization",
        "Responsive design system",
        "Accessibility compliant",
        "Dark/light mode",
        "Custom icon library",
        "Prototype animations"
      ],
      timeline: "6 weeks",
      teamSize: "3 designers",
      results: [
        { metric: "User Engagement", value: "+75%" },
        { metric: "Task Completion", value: "+50%" },
        { metric: "User Satisfaction", value: "4.9/5" }
      ]
    },
    {
      id: 5,
      title: "EduTech Learning Platform",
      category: "Web Development",
      description: "Online learning platform with video streaming, progress tracking, and interactive quizzes.",
      longDescription: "A comprehensive e-learning platform built for educational institutions, featuring video streaming, interactive content, progress tracking, and assessment tools. Supports thousands of concurrent users with scalable architecture.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      technologies: ["Next.js", "Python", "PostgreSQL", "AWS", "WebRTC"],
      features: [
        "HD video streaming",
        "Interactive quizzes",
        "Progress tracking",
        "Discussion forums",
        "Certificate generation",
        "Multi-language support"
      ],
      timeline: "14 weeks",
      teamSize: "7 developers",
      results: [
        { metric: "Active Students", value: "5K+" },
        { metric: "Course Completion", value: "85%" },
        { metric: "Platform Uptime", value: "99.9%" }
      ]
    },
    {
      id: 6,
      title: "FoodieApp Delivery Platform",
      category: "Mobile Apps",
      description: "Food delivery app with real-time tracking, payment integration, and restaurant management.",
      longDescription: "A complete food delivery ecosystem including customer app, restaurant dashboard, and delivery partner app. Features real-time order tracking, multiple payment options, and advanced restaurant management tools.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps"],
      features: [
        "Real-time order tracking",
        "Multiple payment options",
        "Restaurant dashboard",
        "Delivery partner app",
        "Rating and reviews",
        "Push notifications"
      ],
      timeline: "10 weeks",
      teamSize: "5 developers",
      results: [
        { metric: "Daily Orders", value: "2K+" },
        { metric: "Restaurant Partners", value: "150+" },
        { metric: "Delivery Time", value: "25 min avg" }
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development': return Globe;
      case 'Mobile Apps': return Smartphone;
      case 'CRM/ERP': return Database;
      case 'UI/UX Design': return Code;
      default: return Filter;
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="portfolio-item text-4xl sm:text-5xl font-bold text-neutral-800 mb-6">
            Our Featured
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="portfolio-item text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across web development, mobile apps, 
            CRM systems, and UI/UX design. Each project showcases our commitment to quality and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="portfolio-item flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-item group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-neutral-100 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-neutral-700 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-neutral-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="portfolio-item text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a tailored solution that drives your business forward.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200 shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-800 mb-2">{selectedProject.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <div className="flex space-x-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-900 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-8">
                {selectedProject.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-neutral-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-4">Project Results</h4>
                  <div className="space-y-4">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-neutral-600">{result.metric}</span>
                        <span className="font-bold text-blue-600">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <h4 className="text-lg font-semibold text-neutral-800 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;