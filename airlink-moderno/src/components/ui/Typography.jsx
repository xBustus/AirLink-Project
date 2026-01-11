import React from 'react';

export const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-days text-white mb-6 leading-tight">
    {children}
  </h2>
);

export const Paragraph = ({ children }) => (
  <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed mb-8">
    {children}
  </p>
);