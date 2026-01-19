import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Smartphone, Save, ArrowLeft, ExternalLink, GripVertical, Image as ImageIcon, Layout, Type, Palette } from 'lucide-react';
import Button from '../components/ui/Button';

// Preview Componentizado para o Editor
const MobilePreview = ({ data }) => {
  // Proteção: Se appearance não existir (dados antigos), usa um objeto vazio para não quebrar
  const { profile, links, appearance = {} } = data;
  
  // Valores padrão caso algo esteja undefined
  const bgType = appearance.bgType || 'color';
  const bgValue = appearance.bgValue || '#111827';
  const textColor = appearance.textColor || '#ffffff';
  const buttonShape = appearance.buttonShape || 'rounded';
  const buttonStyleType = appearance.buttonStyle || 'fill';
  const buttonColor = appearance.buttonColor || '#ffffff';
  const buttonTextColor = appearance.buttonTextColor || '#000000';
  const font = appearance.font || 'sans';

  // Estilos inline
  const bgStyle = bgType === 'gradient' 
    ? { backgroundImage: bgValue } 
    : { backgroundColor: bgValue };

  const btnShapeClass = buttonShape === 'rect' ? 'rounded-none' : buttonShape === 'pill' ? 'rounded-full' : 'rounded-xl';
  const fontClass = font === 'mono' ? 'font-mono' : font === 'serif' ? 'font-serif' : 'font-sans';

  // Lógica de cor do botão
  const btnStyle = buttonStyleType === 'outline'
    ? { border: `2px solid ${buttonColor}`, color: buttonColor, background: 'transparent' }
    : buttonStyleType === 'soft'
    ? { background: `${buttonColor}20`, color: buttonColor }
    : { background: buttonColor, color: buttonTextColor }; // Fill default

  return (
    <div className="h-full w-full overflow-y-auto custom-scrollbar relative flex flex-col transition-all duration-300" style={bgStyle}>
      <div className={`pt-16 pb-8 px-6 flex flex-col items-center min-h-full ${fontClass}`}>
        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-white/20 bg-white/10 flex items-center justify-center text-4xl shadow-lg shrink-0">
           {profile.avatar && profile.avatar.length > 4 ? <img src={profile.avatar} className="w-full h-full object-cover"/> : (profile.avatar || '😎')}
        </div>
        <h2 className="font-bold text-lg text-center mb-1" style={{ color: textColor }}>{profile.name || '@seu.nome'}</h2>
        <p className="text-xs text-center mb-8 max-w-[200px]" style={{ color: textColor, opacity: 0.8 }}>{profile.bio || 'Sua bio aqui'}</p>

        <div className="w-full space-y-3 mb-auto">
          {links.map((link) => (
            <div key={link.id} className={`w-full py-3.5 px-4 text-center text-sm font-semibold shadow-sm transition-all ${btnShapeClass}`} style={btnStyle}>
              {link.title || 'Link Título'}
            </div>
          ))}
        </div>
        
        <div className="pt-8 opacity-40">
           <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: textColor }}>AirLink</span>
        </div>
      </div>
    </div>
  );
};

const Editor = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState('links');
  
  // Estado Inicial Padrão
  const defaultState = {
    profile: { name: '', bio: '', avatar: '😎' },
    links: [{ id: 1, title: 'Meu Site', url: 'https://google.com' }],
    appearance: {
      bgType: 'color',
      bgValue: '#111827',
      textColor: '#ffffff',
      buttonStyle: 'fill',
      buttonShape: 'rounded',
      buttonColor: '#ffffff',
      buttonTextColor: '#000000',
      font: 'sans'
    }
  };

  const [data, setData] = useState(defaultState);

  // CORREÇÃO: Carregamento inteligente que mescla dados antigos com novos
  useEffect(() => {
    const saved = localStorage.getItem('gb_airlink_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Se os dados salvos não tiverem 'appearance', usamos o padrão
        setData({
          ...defaultState, // Começa com o padrão
          ...parsed,       // Sobrescreve com o salvo (links, perfil)
          appearance: {    // Garante que appearance esteja completo
             ...defaultState.appearance, 
             ...(parsed.appearance || {}) 
          }
        });
      } catch (e) {
        console.error("Erro ao carregar dados", e);
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('gb_airlink_data', JSON.stringify(data));
    alert("✅ Salvo! Clique em 'Ver Preview' ou navegue para ver o resultado.");
  };

  const updateProfile = (field, value) => setData(prev => ({ ...prev, profile: { ...prev.profile, [field]: value } }));
  const updateAppearance = (field, value) => setData(prev => ({ ...prev, appearance: { ...prev.appearance, [field]: value } }));
  const addLink = () => setData(prev => ({ ...prev, links: [...prev.links, { id: Date.now(), title: '', url: '' }] }));
  const removeLink = (id) => setData(prev => ({ ...prev, links: prev.links.filter(l => l.id !== id) }));
  const updateLink = (id, field, value) => setData(prev => ({ ...prev, links: prev.links.map(l => l.id === id ? { ...l, [field]: value } : l) }));

  // Presets
  const bgPresets = [
    { type: 'color', value: '#111827', name: 'Dark' },
    { type: 'color', value: '#ffffff', name: 'White' },
    { type: 'gradient', value: 'linear-gradient(to bottom right, #4f46e5, #9333ea)', name: 'Indigo' },
    { type: 'gradient', value: 'linear-gradient(to bottom, #000000, #434343)', name: 'Metal' },
    { type: 'gradient', value: 'linear-gradient(to bottom right, #ff512f, #dd2476)', name: 'Sunset' },
    { type: 'gradient', value: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)', name: 'Cloud' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a2e] text-white flex flex-col animate-fadeIn">
      
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#0a0a2e]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('home')} className="p-2 text-white/50 hover:text-white bg-white/5 rounded-lg"><ArrowLeft size={20} /></button>
            <h1 className="text-xl font-bold hidden sm:block">Editor</h1>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigateTo('view')} variant="outline" className="text-xs h-9 px-3"><ExternalLink size={14} className="mr-2"/> Ver Preview</Button>
            <Button onClick={handleSave} className="text-xs h-9 px-4 shadow-lg shadow-blue-500/20"><Save size={14} className="mr-2"/> Publicar</Button>
          </div>
        </div>
      </div>

      <div className="flex-grow w-full max-w-7xl mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUNA ESQUERDA: Controles */}
        <div className="lg:col-span-7 flex flex-col h-full">
          
          <div className="flex bg-white/5 p-1 rounded-xl mb-6 border border-white/10">
            <button onClick={() => setActiveTab('links')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'links' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>
              <Layout size={16} /> Links & Perfil
            </button>
            <button onClick={() => setActiveTab('appearance')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'appearance' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>
              <Palette size={16} /> Aparência
            </button>
          </div>

          {/* ABA: LINKS */}
          {activeTab === 'links' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Perfil</h3>
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 bg-black/30 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center shrink-0 overflow-hidden relative group cursor-pointer">
                    {data.profile.avatar && data.profile.avatar.length > 4 ? <img src={data.profile.avatar} className="w-full h-full object-cover" /> : <span className="text-2xl">{data.profile.avatar}</span>}
                  </div>
                  <div className="flex-grow space-y-3">
                    <input type="text" placeholder="Nome do Perfil" value={data.profile.name} onChange={(e) => updateProfile('name', e.target.value)} className="w-full bg-black/20 border-b border-white/10 py-2 px-3 text-white focus:border-blue-500 focus:outline-none rounded-t-md" />
                    <textarea rows="2" placeholder="Bio..." value={data.profile.bio} onChange={(e) => updateProfile('bio', e.target.value)} className="w-full bg-black/20 border-b border-white/10 py-2 px-3 text-white focus:border-blue-500 focus:outline-none resize-none text-sm"></textarea>
                  </div>
                </div>
                <div className="mt-4">
                    <label className="text-xs text-gray-500 uppercase font-bold">URL do Avatar ou Emoji</label>
                    <input type="text" value={data.profile.avatar} onChange={(e) => updateProfile('avatar', e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-lg p-2 mt-1 text-sm text-gray-300" placeholder="https://... ou 😎" />
                </div>
              </div>

              <div className="space-y-3">
                <Button onClick={addLink} className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl mb-4 font-bold">+ Adicionar Link</Button>
                {data.links.map((link) => (
                  <div key={link.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 items-center group hover:border-white/30 transition-all">
                    <div className="text-white/20 cursor-move"><GripVertical size={20} /></div>
                    <div className="flex-grow space-y-2">
                      <input type="text" value={link.title} onChange={(e) => updateLink(link.id, 'title', e.target.value)} placeholder="Título" className="w-full bg-transparent font-bold text-white focus:outline-none placeholder-white/30" />
                      <input type="text" value={link.url} onChange={(e) => updateLink(link.id, 'url', e.target.value)} placeholder="URL (https://...)" className="w-full bg-transparent text-sm text-blue-400 focus:outline-none placeholder-white/20" />
                    </div>
                    <button onClick={() => removeLink(link.id)} className="p-2 text-white/30 hover:text-red-400 transition"><Trash2 size={18} /></button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ABA: APARÊNCIA */}
          {activeTab === 'appearance' && (
            <div className="space-y-8 animate-fadeIn pb-10">
              <section>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Plano de Fundo</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {bgPresets.map((bg, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => { updateAppearance('bgType', bg.type); updateAppearance('bgValue', bg.value); }}
                      className={`h-24 rounded-lg border-2 transition-all ${data.appearance.bgValue === bg.value ? 'border-white scale-105 shadow-xl' : 'border-transparent opacity-70 hover:opacity-100'}`}
                      style={{ background: bg.value }}
                    >
                        {data.appearance.bgValue === bg.value && <div className="w-full h-full flex items-center justify-center bg-black/20 text-white">✓</div>}
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Botões</h3>
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                   <label className="text-xs text-gray-400 uppercase font-bold mb-2 block">Formato</label>
                   <div className="flex gap-2">
                      {['rect', 'rounded', 'pill'].map(shape => (
                        <button key={shape} onClick={() => updateAppearance('buttonShape', shape)} className={`flex-1 h-10 border border-white/20 ${shape === 'rect' ? 'rounded-none' : shape === 'pill' ? 'rounded-full' : 'rounded-lg'} ${data.appearance.buttonShape === shape ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/5'}`}>
                          {shape === 'rect' ? 'Quadrado' : shape === 'pill' ? 'Circular' : 'Arredondado'}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                   <label className="text-xs text-gray-400 uppercase font-bold mb-2 block">Preenchimento</label>
                   <div className="flex gap-2">
                      {['fill', 'outline', 'soft'].map(style => (
                        <button key={style} onClick={() => updateAppearance('buttonStyle', style)} className={`flex-1 h-10 rounded-lg border border-white/20 ${data.appearance.buttonStyle === style ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/5'}`}>
                          {style === 'fill' ? 'Cheio' : style === 'outline' ? 'Borda' : 'Suave'}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="text-xs text-gray-400 uppercase font-bold mb-2 block">Cor do Botão</label>
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                        <input type="color" value={data.appearance.buttonColor} onChange={(e) => updateAppearance('buttonColor', e.target.value)} className="w-8 h-8 rounded bg-transparent border-none cursor-pointer" />
                        <span className="text-xs text-gray-400">{data.appearance.buttonColor}</span>
                      </div>
                   </div>
                   <div>
                      <label className="text-xs text-gray-400 uppercase font-bold mb-2 block">Cor do Texto</label>
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                        <input type="color" value={data.appearance.buttonTextColor} onChange={(e) => updateAppearance('buttonTextColor', e.target.value)} className="w-8 h-8 rounded bg-transparent border-none cursor-pointer" />
                        <span className="text-xs text-gray-400">{data.appearance.buttonTextColor}</span>
                      </div>
                   </div>
                </div>
              </section>

              <section>
                 <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Fonte</h3>
                 <div className="grid grid-cols-3 gap-3">
                    {['sans', 'serif', 'mono'].map(font => (
                       <button key={font} onClick={() => updateAppearance('font', font)} className={`py-3 border border-white/10 rounded-lg ${font === 'sans' ? 'font-sans' : font === 'serif' ? 'font-serif' : 'font-mono'} ${data.appearance.font === font ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/5'}`}>Aa</button>
                    ))}
                 </div>
              </section>
            </div>
          )}
        </div>

        {/* COLUNA DIREITA: PREVIEW FIXO */}
        <div className="lg:col-span-5 hidden lg:block">
           <div className="sticky top-24">
              <div className="flex items-center justify-center gap-2 mb-4 text-gray-400 text-xs uppercase tracking-widest font-bold">
                 <Smartphone size={14} /> Preview ao Vivo
              </div>
              <div className="relative mx-auto border-gray-800 bg-gray-900 border-[12px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl overflow-hidden ring-4 ring-white/10">
                 <MobilePreview data={data} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;