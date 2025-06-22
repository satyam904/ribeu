import React from 'react';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import RibeuIcon from './RibeuIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <RibeuIcon className="w-10 h-10 drop-shadow-lg" size={40} />
              </div>
              <div>
                <span className="text-xl font-bold">Ribeu</span>
                <div className="text-sm text-neutral-400 font-medium">Solutions</div>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              Full-stack IT services company specializing in custom website development, 
              CRM systems, and mobile app solutions. Empowering businesses with tailored 
              digital solutions since 2019.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "mailto:hello@ribeu.dev" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Website Development',
                'Mobile App Development',
                'CRM & ERP Solutions',
                'UI/UX Design',
                'API Integration',
                'Technical Consulting'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:hello@ribeu.dev" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  hello@ribeu.dev
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+15551234567" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-neutral-400 text-sm">San Francisco, CA</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Business Hours</h4>
              <p className="text-neutral-400 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                Weekend: Emergency support only
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 Ribeu Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-neutral-800">
            <p className="text-neutral-500 text-xs text-center">
              🚀 Ready to transform your business? Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;