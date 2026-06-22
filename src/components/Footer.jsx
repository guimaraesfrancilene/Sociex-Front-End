// src/components/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/landing-page.css';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <h2 className="footer-logo">SOCIEX</h2>
          <p>A ponte entre a universidade e a sociedade. Transformamos necessidades reais em projetos acadêmicos.</p>
        </div>

        <div className="footer-col">
          <h3>Explore //</h3>
          <ul>
            <li><a href="#!" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Início</a></li>
            <li><a href="#!" onClick={(e) => { e.preventDefault(); navigate('/visaogeralprojeto'); }}>Explorar Projetos</a></li>
            <li><a href="#!" onClick={(e) => { e.preventDefault(); navigate('/sobre'); }}>Sobre Nós</a></li>
            <li><a href="#!" onClick={(e) => { e.preventDefault(); navigate('/Home'); }}>Publicar Desafio</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>The Devs //</h3>
          <ul>
            <li><a href="https://github.com/Hkelly-llyx" target="_blank" rel="noreferrer">➔ Hanna Kelly</a></li>
            <li><a href="https://github.com/keilane23" target="_blank" rel="noreferrer">➔ Keilane Nogueira</a></li>
            <li><a href="https://github.com/m4nuh-byt" target="_blank" rel="noreferrer">➔ Emanuele Vitória</a></li>
            <li><a href="https://github.com/guimaraesfrancilene" target="_blank" rel="noreferrer">➔ Francilene Guimarães</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contato //</h3>
          <p className="contact-label space-top">Onde estamos:</p>
          <p className="address-text">IFPI - Campus Floriano<br />TADS</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SOCIEX - Instituto Federal do Piauí. Todos os direitos reservados.</p>
        <button onClick={scrollToTop} className="btn-back-to-top">
          Voltar ao topo ↑
        </button>
      </div>
    </footer>
  );
}