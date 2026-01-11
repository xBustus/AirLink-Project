import React from 'react';
import { Layout, Share2, Code, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = ({ navigateTo }) => {
  return (
    <div className="animate-fadeIn w-full">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-12 lg:py-24 w-full">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs md:text-sm font-semibold mb-2">
            🚀 100% Gratuito e Open Source
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-days text-white leading-tight">
            Seus links,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Um só lugar.
            </span>
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
            A alternativa definitiva ao LinkTree. Crie, personalize e compartilhe sua presença online sem custos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Button onClick={() => navigateTo('templates')} className="w-full sm:w-auto">Ver Templates</Button>
            <Button variant="outline" onClick={() => navigateTo('about')} className="w-full sm:w-auto">Saiba Mais</Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center relative px-4">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 w-full max-w-md xl:max-w-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 shrink-0"></div>
              <div><div className="h-4 w-32 bg-white/20 rounded mb-2"></div><div className="h-3 w-20 bg-white/10 rounded"></div></div>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 w-full bg-white/10 rounded-xl flex items-center justify-between px-4 hover:bg-white/20 cursor-pointer transition-colors">
                  <div className="h-2 w-24 bg-white/30 rounded"></div><ArrowRight size={16} className="text-white/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 w-full">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors w-full">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 text-white"><Layout /></div>
            <h3 className="text-2xl font-days text-white mb-4">Criatividade Real</h3>
            <p className="text-gray-400">Organize perfis de mídia social, conteúdos e portfólios em um único lugar.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors w-full">
             <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 text-white"><Share2 /></div>
            <h3 className="text-2xl font-days text-white mb-4">Tudo Centralizado</h3>
            <p className="text-gray-400">Seu público não precisa pular de site em site.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors w-full">
             <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-6 text-white"><Code /></div>
            <h3 className="text-2xl font-days text-white mb-4">100% Open Source</h3>
            <p className="text-gray-400">Sem custos ocultos. Código aberto para a comunidade.</p>
          </div>
        </div>
      </section>
      <section className="py-16 text-center bg-gradient-to-b from-transparent to-blue-900/30 rounded-3xl border border-white/5 px-6 w-full">
        <h2 className="text-3xl md:text-5xl font-days text-white mb-6">Apoie-nos 💡</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg mb-8">Acreditamos em uma internet mais aberta. Considere apoiar nosso trabalho.</p>
          <Button variant="primary" className="mt-4 w-full md:w-auto">💙 Apoiar Agora</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;