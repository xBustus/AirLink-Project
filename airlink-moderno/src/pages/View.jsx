import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const View = ({ navigateTo }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('gb_airlink_data');
    if (saved) setData(JSON.parse(saved));
  }, []);

  if (!data) return <div className="h-screen flex items-center justify-center bg-gray-900 text-white">Carregando...</div>;

  const { profile, links, appearance } = data;

  // Lógica de Estilos Dinâmicos (Linktree Style)
  const bgStyle = appearance?.bgType === 'gradient' 
    ? { backgroundImage: appearance.bgValue } 
    : { backgroundColor: appearance?.bgValue || '#111827' };

  const buttonBase = "w-full py-4 px-6 mb-3 text-center transition-transform active:scale-95 flex items-center justify-center min-h-[56px]";
  
  const getButtonStyle = () => {
    const shape = appearance?.buttonShape === 'rect' ? 'rounded-none' : appearance?.buttonShape === 'pill' ? 'rounded-full' : 'rounded-xl';
    const color = appearance?.buttonColor || '#ffffff';
    const textColor = appearance?.buttonTextColor || '#000000';

    switch (appearance?.buttonStyle) {
      case 'outline': return `${shape} border-2 border-[${color}] text-[${color}] hover:bg-[${color}] hover:text-[${textColor}]`;
      case 'soft': return `${shape} bg-[${color}]/10 text-[${color}] hover:bg-[${color}]/20`;
      default: return `${shape} bg-[${color}] text-[${textColor}] shadow-md hover:opacity-90`; // Fill
    }
  };

  // Inline styles para cores dinâmicas que o Tailwind não pega nativamente com classes arbitrárias
  const btnStyleObj = appearance?.buttonStyle === 'outline' 
    ? { borderColor: appearance.buttonColor, color: appearance.buttonColor }
    : appearance?.buttonStyle === 'soft'
    ? { backgroundColor: `${appearance.buttonColor}20`, color: appearance.buttonColor }
    : { backgroundColor: appearance.buttonColor, color: appearance.buttonTextColor };

  const fontStyle = appearance?.font === 'mono' ? 'font-mono' : appearance?.font === 'serif' ? 'font-serif' : 'font-sans';

  return (
    <div 
      className={`min-h-screen w-full flex flex-col items-center py-12 px-4 ${fontStyle} animate-fadeIn`}
      style={bgStyle}
    >
      {/* Botão de Voltar (Apenas para o dono) */}
      <button 
        onClick={() => navigateTo('editor')} 
        className="fixed top-4 left-4 z-50 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition backdrop-blur-sm"
        title="Voltar para Editor"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="w-full max-w-[680px] flex flex-col items-center z-10">
        
        {/* Perfil */}
        <div className="mb-8 text-center flex flex-col items-center">
          {profile.avatar && (
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-white/20 shadow-xl">
               {profile.avatar.length > 4 ? (
                 <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full bg-white/10 flex items-center justify-center text-4xl">{profile.avatar}</div>
               )}
            </div>
          )}
          <h1 className="text-xl font-bold mb-2" style={{ color: appearance?.textColor || '#ffffff' }}>{profile.name}</h1>
          <p className="text-sm font-medium opacity-80 max-w-sm" style={{ color: appearance?.textColor || '#ffffff' }}>{profile.bio}</p>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`${buttonBase} ${getButtonStyle()}`}
              style={btnStyleObj} // Aplica as cores personalizadas
            >
              <span className="font-semibold text-sm sm:text-base">{link.title}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 opacity-50">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: appearance?.textColor || '#ffffff' }}>AirLink</span>
        </div>

      </div>
    </div>
  );
};

export default View;