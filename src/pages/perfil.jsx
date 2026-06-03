import React from 'react';
import '../styles/EscolhaPerfil.css'; // Vamos criar esse arquivo de estilos no Passo 2
import logoImg from '../assets/logo.png'; // Garanta que sua imagem logo.png esteja na pasta assets

export default function EscolhaPerfil() {
  return (
    <div className="perfil-container">
      
      <div className="left-side">
        <div className="logo-container">
          <img src={logoImg} alt="Logo SOCIEX" className="logo-img" />
        </div>
        <h1>SOCIEX</h1>
        <p className="slogan">Faça do seu problema<br />uma oportunidade!</p>
      </div>

      <div className="right-side">
        <div className="card">
          <h2>Escolha um perfil</h2>
          <h3>Quem Eu Sou?</h3>
          
          <div className="buttons-container">
            {/* No React usamos links internos, mas deixei as tags padrão para não quebrar seu fluxo */}
            <a href="/cadastro-universidade" className="btn-profile">Membro da Universidade</a>
            <a href="/cadastro-empresario" className="btn-profile">Empresário</a>
            <a href="/cadastro-sociedade" className="btn-profile">Sociedade Civil</a>
          </div>
        </div>
      </div>

    </div>
  );
}