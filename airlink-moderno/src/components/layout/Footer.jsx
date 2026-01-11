import React from 'react';
import { Youtube, Twitch, Twitter, Disc, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 mt-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm mb-1">Powered by</p>
          <h2 className="text-2xl font-days text-white">AIRLINK</h2>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {[Youtube, Twitch, Twitter, Disc, Linkedin, Github].map((Icon, i) => (
             <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 text-white transition-colors">
               <Icon size={20} />
             </a>
          ))}
        </div>

        <div className="text-right hidden md:block opacity-50 hover:opacity-100 transition-opacity">
           <div className="w-12 h-12 bg-white p-1 rounded">
             <img 
               src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AirLink" 
               alt="QR Code" 
               className="w-full h-full"
              />
           </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm px-4">
        © 2025 AirLink. Open Source Project.
      </div>
    </footer>
  );
};

export default Footer;