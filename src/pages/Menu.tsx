/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import menuData from '../data/menu.json';
import { MenuItem } from '../types.ts';
import MenuItemCard from '../components/MenuItem.tsx';

const menuItems = menuData as MenuItem[];
const categories = ['All', ...new Set(menuItems.map(item => item.category))];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div id="menu-page" className="bg-[#F9F8F6] pt-40 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-stone-400"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">EXQUISITE SELECTION</span>
          <span className="h-px w-8 bg-stone-400"></span>
        </div>
        <h1 className="text-6xl md:text-8xl font-serif mb-12 text-stone-900 italic">Curated <span className="text-stone-300 not-italic">Menu</span></h1>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-12 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-[10px] uppercase tracking-widest font-bold transition-all rounded-sm border ${
                activeCategory === cat 
                  ? 'bg-stone-900 text-white border-stone-900 shadow-lg' 
                  : 'bg-white text-stone-400 border-stone-100 hover:text-stone-900 hover:border-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <MenuItemCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-40 opacity-20 italic">
            No items found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
