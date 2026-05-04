/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import configData from '../data/config.json';
import { RestaurantConfig } from '../types.ts';

const config = configData as RestaurantConfig;

export default function Contact() {
  return (
    <div id="contact-page" className="bg-[#070707] text-white pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50 mb-6 italic">Get in touch</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white">CONTACT US</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="bg-[#141414] p-12 rounded-[40px] text-white shadow-2xl h-full">
              <h2 className="text-3xl font-black tracking-tight mb-12">RESERVATION & INQUIRIES</h2>
              
              <ul className="space-y-10">
                <li className="flex items-start space-x-6">
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Our Address</h4>
                    <p className="text-lg opacity-80">{config.address}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-6">
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Phone Number</h4>
                    <p className="text-lg opacity-80">{config.phone}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-6">
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Email Address</h4>
                    <p className="text-lg opacity-80">{config.email}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-20 pt-10 border-t border-white/10 flex space-x-6">
                <a href="#" className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity">
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity">
                  <Facebook size={18} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-[#111111] p-12 rounded-[40px] shadow-xl flex-grow border border-white/10">
              <h2 className="text-3xl font-black tracking-tight mb-4 text-white">SEND A MESSAGE</h2>
              <p className="text-white/50 text-sm mb-10 italic">Have a question? We'd love to hear from you.</p>
              
              <form id="contact-form" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-black block mb-2 px-1 text-white">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#111111] border border-white/10 p-4 rounded-2xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-black block mb-2 px-1 text-white">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#111111] border border-white/10 p-4 rounded-2xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-black block mb-2 px-1 text-white">Message</label>
                  <textarea 
                    className="w-full bg-[#111111] border border-white/10 p-4 rounded-2xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-black hover:bg-black/80 transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
