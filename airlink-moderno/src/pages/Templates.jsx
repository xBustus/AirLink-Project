//
import React from 'react';
import Button from '../components/ui/Button';

const Templates = ({ onSelect }) => { // Recebendo a prop onSelect
  const templates = [
    { id: 1, name: "Dev Minimal", role: "Developer", desc: "Performance first.", image: "👨‍💻", color: "from-blue-600 to-cyan-500", style: "minimal" },
    { id: 2, name: "Artist Portfolio", role: "Designer", desc: "Visual gallery.", image: "🎨", color: "from-purple-600 to-pink-500", style: "glass" },
    { id: 3, name: "Startup Launch", role: "Business", desc: "High conversion.", image: "🚀", color: "from-slate-800 to-black", style: "solid" },
    { id: 4, name: "Streamer Hub", role: "Content", desc: "Twitch & YT.", image: "🎮", color: "from-violet-600 to-indigo-600", style: "neon" },
    { id: 5, name: "Bio Link", role: "Personal", desc: "Simple & Clean.", image: "✨", color: "from-emerald-500 to-teal-600", style: "soft" },
    { id: 6, name: "Store Front", role: "E-commerce", desc: "Product highlight.", image: "🛍️", color: "from-orange-500 to-red-500", style: "bold" },
    { id: 7, name: "Event Page", role: "Marketing", desc: "RSVP & Info.", image: "📅", color: "from-pink-500 to-rose-500", style: "glass" },
    { id: 8, name: "Podcast", role: "Media", desc: "Audio focus.", image: "🎙️", color: "from-cyan-600 to-blue-700", style: "minimal" },
  ];

  return (
    <div className="w-full h-full animate-fadeIn">
      {/* Cabeçalho inalterado ... */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-days text-white mb-2">Templates</h1>
          <p className="text-gray-400">Escolha seu estilo para começar.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 w-full">
        {templates.map((t) => (
          <div key={t.id} className="group relative bg-[#0f172a]/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 flex flex-col">
            
            <div className={`h-40 bg-gradient-to-br ${t.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
              <div className="transform group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                {t.image}
              </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white truncate pr-2">{t.name}</h3>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider shrink-0">
                  {t.role}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                {t.desc}
              </p>
              
              <Button 
                onClick={() => onSelect(t)} 
                variant="outline" 
                className="w-full py-2 text-sm border-white/10 hover:bg-blue-600/20"
              >
                Usar Template
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;