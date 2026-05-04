/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import configData from '../data/config.json';
import { RestaurantConfig } from '../types.ts';

const config = configData as RestaurantConfig;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      id="main-nav"
      className="fixed w-full z-50 transition-all duration-300 border-b bg-white/80 backdrop-blur-md py-3 border-stone-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all bg-stone-900 text-white">
            {config.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight uppercase transition-colors text-stone-900">
              {config.name}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-stone-900 ${
                location.pathname === link.path 
                  ? 'text-stone-900 border-b border-stone-900' 
                  : 'text-stone-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            className="px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all bg-stone-900 text-white hover:bg-stone-800"
          >
            ORDER ONLINE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="mobile-menu-toggle"
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-black" />
          ) : (
            <Menu className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white text-black p-8 shadow-xl md:hidden"
        >
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg uppercase tracking-widest font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              className="bg-black text-white py-4 rounded-full text-sm uppercase tracking-widest font-bold"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
