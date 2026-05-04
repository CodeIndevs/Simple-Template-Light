/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import configData from '../data/config.json';
import { RestaurantConfig } from '../types.ts';

const config = configData as RestaurantConfig;

export default function About() {
  return (
    <div id="about-page" className="bg-[#0F0F0F] text-white pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50 mb-6 italic">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] text-white">
              FLAVOR MEETS <br /> PASSION
            </h1>
            <div className="space-y-6 text-stone-300 leading-relaxed text-lg italic serif">
              <p>
                Founded in 2012, {config.name} was born from a simple vision: to bring the highest quality seasonal ingredients to the neighborhood in an atmosphere of warmth and hospitality.
              </p>
              <p>
                Chef owner Julian Vance spent years traveling across Europe, mastering techniques that he now brings to every dish on our curated menu. Our kitchen operates on a "farm-to-table" philosophy, working directly with local growers to ensure every plate tells a story.
              </p>
              <p>
                Whether you're joining us for a celebratory dinner or a casual weekend brunch, we believe every meal is an opportunity to create lasting memories.
              </p>
            </div>
            
            <div className="mt-12 flex space-x-12 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-black tracking-tight mb-1 text-white">12+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 italic">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black tracking-tight mb-1 text-white">45k</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 italic">Happy Guests</p>
              </div>
              <div>
                <p className="text-3xl font-black tracking-tight mb-1 text-white">22</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 italic">Award Winning Dishes</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl translate-y-10"
            >
              <img src="https://picsum.photos/seed/chef1/600/800" alt="Chef preparing food" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl"
            >
              <img src="https://picsum.photos/seed/kitchen1/600/800" alt="Inside the kitchen" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
