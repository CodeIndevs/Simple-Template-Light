/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import menuData from '../data/menu.json';
import { MenuItem } from '../types.ts';

const items = menuData as MenuItem[];
// Combine menu images with some extras for a gallery feel
const galleryImages = [
  ...items.map(i => i.image),
  "https://picsum.photos/seed/restaurant1/800/800",
  "https://picsum.photos/seed/restaurant2/800/800",
  "https://picsum.photos/seed/restaurant3/800/800",
  "https://picsum.photos/seed/restaurant4/800/800"
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#070707]">
      <div id="gallery-page" className="bg-[#070707] text-white pt-32 pb-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50 mb-6 italic">Visual Feast</p>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white">GALLERY</h1>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={src + idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-3xl cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Gallery ${idx}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
