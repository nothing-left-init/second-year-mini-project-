import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Skills', href: '/skills' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Arcade', href: '/arcade' },
    { name: 'Community', href: '/community' },
    { name: 'Market Intel', href: '/market' },
    { name: 'AI Mentor', href: '/mentor' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-amber-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-700 text-white font-bold text-sm">
              NL
            </div>
            <span className="heading-display text-lg font-bold text-amber-900">
              Neura Link
            </span>
          </Link>

          {isLoggedIn && (
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-amber-900 font-semibold'
                      : 'text-slate-600 hover:text-amber-900'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-x-0 -bottom-0.5 h-1 bg-amber-600 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <button className="rounded-lg border border-amber-200 bg-amber-50 p-2 text-amber-700 transition-colors hover:bg-amber-100 hover:text-amber-900">
                  <User className="w-5 h-5" />
                </button>
                <button
                  onClick={handleLogout}
                  className="rounded-lg border border-amber-200 bg-amber-50 p-2 text-amber-700 transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-amber-900 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-lg bg-amber-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-amber-800"
                >
                  Contact
                </Link>
              </div>
            )}

            {isLoggedIn && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-lg border border-amber-200 bg-amber-50 p-2 text-amber-700 transition-colors hover:bg-amber-100 md:hidden"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-amber-100 py-4 md:hidden"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors rounded-lg mb-1 ${
                    location.pathname === item.href
                      ? 'bg-amber-100 text-amber-900 font-semibold'
                      : 'text-slate-600 hover:bg-amber-50 hover:text-amber-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;