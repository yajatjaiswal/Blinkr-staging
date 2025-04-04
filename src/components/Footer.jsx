import React from 'react';
import { Twitter, Youtube, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-[98%] bg-gradient-to-br from-violet-500 to-indigo-600 p-12 rounded-[40px]   my-2 ml-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between text-white">
          {/* Quick Link Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <div className="space-y-2">
              <p className="hover:underline cursor-pointer">Terms & Condition</p>
              <div className="flex gap-2">
                <p className="hover:underline cursor-pointer">Privacy Policy</p>
                <span>|</span>
                <p className="hover:underline cursor-pointer">FAQs</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p>info@5minuteloan.com</p>
              <p>+91 93555 13592</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 my-8">
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <Twitter className="w-5 h-5 text-[#8B5CF6]" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <Youtube className="w-5 h-5 text-[#8B5CF6]" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <Facebook className="w-5 h-5 text-[#8B5CF6]" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <Instagram className="w-5 h-5 text-[#8B5CF6]" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <Linkedin className="w-5 h-5 text-[#8B5CF6]" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white">
          <p>Blinkr. 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;