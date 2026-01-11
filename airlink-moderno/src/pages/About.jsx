import React from 'react';
import { Users, ShieldCheck, Layout, Code } from 'lucide-react';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <div className="w-full py-12 animate-fadeIn">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-7xl font-days text-white mb-6">Sobre o AirLink</h1>
        <p className="text-xl md:text-2xl text-blue-200">
          Sua plataforma gratuita para organizar e compartilhar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        

        <div className="lg:col-span-8 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 h-full">
          <h2 className="text-3xl font-days text-white mb-6 flex items-center gap-3">
            <Users className="text-blue-400" /> Nossa Missão
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Oferecer uma ferramenta poderosa e intuitiva que capacite os usuários a maximizar sua visibilidade online. 
            Não acreditamos em paywalls para funcionalidades básicas. Nosso objetivo é democratizar a criação de páginas de links.
          </p>
        </div>


        <div className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-blue-900 p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col justify-center text-center h-full">
          <h3 className="text-2xl font-days text-white mb-4">Contribua</h3>
          <p className="text-blue-100 mb-6">Ajude a construir o futuro open source.</p>
          <Button variant="primary" className="w-full">GitHub</Button>
        </div>
        <div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10">
           <div className="flex items-center gap-4 mb-2">
             <ShieldCheck className="text-green-400" size={32} />
             <h3 className="text-xl font-bold text-white">100% Gratuito</h3>
           </div>
           <p className="text-gray-400">Sem taxas mensais surpresa.</p>
        </div>

        <div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10">
           <div className="flex items-center gap-4 mb-2">
             <Layout className="text-blue-400" size={32} />
             <h3 className="text-xl font-bold text-white">Intuitivo</h3>
           </div>
           <p className="text-gray-400">Arraste e solte para criar.</p>
        </div>

        <div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10">
           <div className="flex items-center gap-4 mb-2">
             <Code className="text-pink-400" size={32} />
             <h3 className="text-xl font-bold text-white">Open Source</h3>
           </div>
           <p className="text-gray-400">Código transparente e auditável.</p>
        </div>

      </div>
    </div>
  );
};

export default About;