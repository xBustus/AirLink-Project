import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyle = "relative px-6 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    // Principal: Gradiente com brilho azul
    primary: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:brightness-110 border border-white/10",
    
    // Secundário: Branco
    secondary: "bg-white text-blue-900 shadow-lg hover:bg-blue-50",
    
    // Outline (O NOVO PADRÃO PARA OS CARDS): Fundo transparente com borda fina e hover iluminado
    outline: "bg-white/5 border border-white/20 text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm",
    
    // Dark: Um azul muito escuro em vez de preto puro
    dark: "bg-[#0f172a] text-white border border-white/10 hover:bg-[#1e293b] hover:border-white/30"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;