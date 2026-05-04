/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import configData from '../data/config.json';
import menuData from '../data/menu.json';
import { RestaurantConfig, MenuItem } from '../types.ts';
import MenuItemCard from '../components/MenuItem.tsx';

const config = configData as RestaurantConfig;
const favorites = (menuData as MenuItem[]).filter(item => item.featured);

export default function Home() {
  return (
    <div id="home-page" className="bg-[#F9F8F6]">
      {/* Hero Section - Split Screen Feel */}
      <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 overflow-hidden border-b border-stone-200">
        <div className="lg:col-span-5 p-12 md:p-24 flex flex-col justify-center bg-white border-r border-stone-100">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-stone-400"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">ESTABLISHED 2024</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-light leading-[0.95] mb-8 text-stone-900"
          >
            Title <br />
            <span className="italic text-stone-500">Subtitle</span> <br />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-stone-500 text-lg mb-10 leading-relaxed max-w-md font-sans font-light"
          >
            {config.tagline}. Experience artisanal dining with ingredients sourced directly from our garden to your plate.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              to="/menu" 
              className="px-8 py-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest font-bold hover:bg-stone-800 transition-all rounded-sm"
            >
              View Full Menu
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 border border-stone-300 text-stone-800 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-50 transition-all rounded-sm"
            >
              Our Story
            </Link>
          </motion.div>

          <div className="mt-20 pt-10 border-t border-stone-100 grid grid-cols-2 gap-8">
            <div>
              <span className="block text-[8px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-1">LOCATION</span>
              <span className="text-xs text-stone-600 font-medium">{config.address}</span>
            </div>
            <div>
              <span className="block text-[8px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-1">HOURS</span>
              <span className="text-xs text-stone-600 font-medium">Tue – Sun: 5pm – 11pm</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[50vh] lg:h-auto overflow-hidden">
          <img 
            src={config.heroImage} 
            alt="Restaurant Setting"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/10" />
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2">WEEKLY HIGHLIGHTS</h3>
            <h2 className="text-4xl md:text-5xl">Chef's Recommendations</h2>
          </div>
          <Link to="/menu" className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-900 border-b border-stone-900 pb-1 mt-4">
            Browse All Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <MenuItemCard item={item} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
