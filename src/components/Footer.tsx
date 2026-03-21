import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-amber-100 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-700">
                <span className="text-sm font-bold text-white">NL</span>
              </div>
              <span className="heading-display text-lg font-bold text-amber-900">
                Neura Link
              </span>
            </div>
            <p className="mb-6 max-w-md text-slate-600 leading-relaxed">
              Creative digital agency. Strategy, design and development for brands that want work with attitude.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded-lg border border-amber-200 bg-white p-3 text-amber-700 transition-all hover:bg-amber-50 hover:text-amber-900 hover:border-amber-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="rounded-lg border border-amber-200 bg-white p-3 text-amber-700 transition-all hover:bg-amber-50 hover:text-amber-900 hover:border-amber-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="rounded-lg border border-amber-200 bg-white p-3 text-amber-700 transition-all hover:bg-amber-50 hover:text-amber-900 hover:border-amber-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="rounded-lg border border-amber-200 bg-white p-3 text-amber-700 transition-all hover:bg-amber-50 hover:text-amber-900 hover:border-amber-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-amber-900 text-lg">Services</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="transition-colors hover:text-amber-900 hover:font-medium">Brand Sites</a></li>
              <li><a href="#" className="transition-colors hover:text-amber-900 hover:font-medium">Product Design</a></li>
              <li><a href="#" className="transition-colors hover:text-amber-900 hover:font-medium">Motion Systems</a></li>
              <li><a href="#" className="transition-colors hover:text-amber-900 hover:font-medium">Technical Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-amber-900 text-lg">Agency</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="transition-colors hover:text-amber-900 hover:font-medium">Projects</a></li>
              <li><a href="#" className="transition-colors hover:text-amber-900 hover:font-medium">Team</a></li>
              <li><a href="#" className="transition-colors hover:text-amber-900 hover:font-medium">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-amber-900 hover:font-medium">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-amber-100 pt-8 text-center text-sm text-slate-600">
          <p>&copy; 2026 Neura Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;