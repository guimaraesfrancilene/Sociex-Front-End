import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // Ajuste o caminho do seu rodapé separado

export default function PublicLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* O Outlet serve para o React saber onde renderizar a página atual */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      
      {/* O rodapé fixo para essas páginas */}
      <Footer />
    </div>
  );
}