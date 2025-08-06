import React from 'react';
import { Heart, Shield, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  useLanguage();

  return (
    <footer className="bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-yellow-300" />
              <div>
                <div className="font-bold text-lg">অন্তরঙ্গ পূজো</div>
                <div className="text-sm opacity-90">Antôrôngo Pujo</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Ensuring safe and joyful Durga Puja celebrations for everyone in our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/safety" className="text-sm hover:text-yellow-300 transition-colors">Safety Tips</a></li>
              <li><a href="/report" className="text-sm hover:text-yellow-300 transition-colors">Report Incident</a></li>
              <li><a href="/volunteer" className="text-sm hover:text-yellow-300 transition-colors">Become Volunteer</a></li>
              <li><a href="/locator" className="text-sm hover:text-yellow-300 transition-colors">Find Pandals</a></li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Emergency</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>Police: 100</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>Fire: 101</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>Ambulance: 108</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>Women Helpline: 1091</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>help@antorongo.org</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 33 2XXX XXXX</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">f</span>
                  </div>
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">t</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-300" />
            <span>for the safety of our community</span>
          </p>
          <p className="text-xs opacity-75 mt-2">
            © 2024 অন্তরঙ্গ পূজো (Antôrôngo Pujo). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;