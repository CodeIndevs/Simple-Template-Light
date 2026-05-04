/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import configData from '../data/config.json';
import { RestaurantConfig } from '../types.ts';

const config = configData as RestaurantConfig;

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-white border-t border-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
          © 2026 {config.name.toUpperCase()} Restaurant Group
        </div>
        
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-400">
          <a href="#" className="hover:text-stone-900 transition-colors">Instagram</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Facebook</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
