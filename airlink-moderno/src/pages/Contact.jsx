import React, { useState } from 'react';
import { Mail, ShieldCheck, MapPin, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', subject: '', file: null });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn py-20">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck size={48} className="text-white" />
        </div>
        <h2 className="text-4xl font-days text-white mb-4">Mensagem Enviada!</h2>
        <p className="text-gray-300 text-xl">Entraremos em contato em breve.</p>
        <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-400 hover:text-blue-300 underline text-lg">
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <div className="w-full py-12 animate-fadeIn">
      <div className="text-center mb-16 lg:hidden">
        <h1 className="text-4xl font-days text-white">Fale Conosco</h1>
      </div>


      <div className="flex flex-col lg:flex-row gap-12 w-full">
      
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 lg:pr-12">
          <h1 className="hidden lg:block text-5xl xl:text-7xl font-days text-white leading-tight">
            Vamos construir<br />
            <span className="text-blue-400">algo incrível.</span>
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed">
            Tem uma dúvida sobre o projeto Open Source? Quer sugerir uma feature nova? 
            Ou apenas mandar um "olá"? Estamos sempre ouvindo a comunidade.
          </p>
          
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Mail className="text-blue-300"/></div>
              <span className="text-lg">contato@airlink.dev</span>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><MapPin className="text-purple-300"/></div>
              <span className="text-lg">São Paulo, Brasil (Remoto)</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 h-full shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-blue-200 text-sm font-bold mb-2 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-blue-300" size={20} />
                  <input 
                    type="email" 
                    required
                    className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-blue-400/50"
                    placeholder="nome@exemplo.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-blue-200 text-sm font-bold mb-2 ml-1">Assunto</label>
                <textarea 
                  rows="5"
                  required
                  className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              <div>
                 <label className="block text-blue-200 text-sm font-bold mb-2 ml-1">Anexo (Opcional)</label>
                 <div className="border-2 border-dashed border-blue-700 rounded-xl p-8 text-center hover:bg-blue-900/30 transition-colors cursor-pointer">
                    <p className="text-blue-300">Arraste um arquivo ou clique para selecionar</p>
                 </div>
              </div>

              <Button variant="secondary" className="w-full py-5 text-xl shadow-blue-900/50 mt-4">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;