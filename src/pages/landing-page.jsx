import React, { useState, useEffect, useRef } from 'react';
import './landing-page.css'; // Certifique-se de que o arquivo CSS está na mesma pasta ou ajuste o caminho
import imgLogo from '../assets/logo.png'
import imgMenu from '../assets/menulateral.png'
import { useNavigate } from 'react-router-dom'
export default function SobreNos() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const openMenuBtnRef = useRef(null);
  const sidebarRef = useRef(null);
const navigate = useNavigate()
  // Função para rolar suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Efeito para fechar o menu ao clicar fora dele (equivalente ao seu script original)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se a sua sidebar estivesse ativa e o clique ocorresse fora dela e do botão de abrir...
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) &&
        openMenuBtnRef.current && 
        !openMenuBtnRef.current.contains(event.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* AVISO: As tags que estavam dentro do <head> (meta, links de fontes, title) 
        devem ser inseridas no arquivo 'public/index.html' do seu projeto React 
        ou gerenciadas por pacotes como 'react-helmet'.
      */}

      <main className="main-container">
        <header className="navbar">
          <button 
            className="btn-menu" 
            id="open-menu" 
            aria-label="Abrir menu"
            ref={openMenuBtnRef}
            onClick={() => setIsSidebarActive(true)}
          >
            <img src={imgMenu} alt="Abrir Menu" className="menu-icon-img" />
          </button>
          <nav className="nav-links">
            <a href=" ">Início</a>
            <a href="sobre.html" className="active">Sobre nós</a>
          </nav>
        </header>

        {/* Caso seu projeto use o elemento #sidebar, adicione a ref e a classe condicional dele assim:
          <div id="sidebar" ref={sidebarRef} className={isSidebarActive ? 'active' : ''}>
            <button onClick={() => setIsSidebarActive(false)}>Fechar</button>
          </div>
        */}

        <section className="vidyard-hero">
          <div className="hero-content">
            <span className="eyebrow">SOBRE O SOCIEX</span>
            <h1>Transformando problemas em <span>oportunidades.</span></h1>
            <p>O SOCIEX é a ponte entre o conhecimento acadêmico e as necessidades do mundo real. Projetado para transformar desafios complexos em oportunidades de impacto direto na sociedade.</p>
            <div className="hero-btns">
             <a 
  href="#!" 
  onClick={(e) => { e.preventDefault(); navigate('/visaogeralprojeto'); }} 
  className="btn-primary"
>
  Ver Projetos
</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-container">
              <img src={imgLogo} alt="Ilustração SOCIEX" />
              <div className="blob-bg"></div>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="section-header">
            <h2>Transformando o Ecossistema</h2>
            <p>Nossa plataforma funciona através da cooperação direta, onde os problemas da sociedade e do mercado encontram soluções dentro da universidade.</p>
          </div>
          
          <div className="triple-helix-grid">
            <div className="helix-card">
              <div className="helix-icon">🏛️</div>
              <h3>Governo</h3>
              <p>Submete desafios públicos e demandas sociais para transformar as necessidades da comunidade em projetos de melhoria coletiva.</p>
            </div>
            <div className="helix-card">
              <div className="helix-icon">🎓</div>
              <h3>Universidade</h3>
              <p>Transformação do conhecimento acadêmico e científico em aplicações práticas que geram valor real.</p>
            </div>
            <div className="helix-card">
              <div className="helix-icon">💼</div>
              <h3>Empresas &amp; ONGs</h3>
              <p>Submete problemas e necessidades reais do mercado para serem transformados em projetos práticos.</p>
            </div>
          </div>
        </section>

        <section className="logo-story">
          <div className="logo-story-container">
            <div className="logo-text">
              <h2>A Colaboração no Centro</h2>
              <p>A identidade visual da marca foi inspirada no conceito da Tríplice Hélice, no qual cada uma das três colmeias representa um pilar fundamental da sociedade: o governo, a universidade e as empresas (além de organizações do terceiro setor, como ONGs).</p>
              <p>No centro, a abelha simboliza a colaboração e a união entre essas entidades. O animal foi escolhido por ser o maior símbolo de trabalho em equipe e cooperação na natureza.</p>
              <p className="highlight-final">Assim, o objetivo do ecossistema SOCIEX é conectar essas forças de forma rápida, eficiente e integrada.</p>
            </div>
            <div className="logo-image">
              <div className="hexagon-bg">
                <img src={imgLogo} alt="Ilustração SOCIEX" />
              </div>
            </div>
          </div>
        </section>

        <section className="team-section-new">
          <h2 className="team-title">Sobre a equipe </h2>
          <p className="team-subtitle"> Desenvolvido por alunas do IFPI Campus Floriano, do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS).</p>
          
          <div className="team-cards-container">
            <div className="dev-card">
              <div className="avatar-circle avatar-vinho">HK</div>
              <h3>Hanna Kelly</h3>
              <p className="dev-role">PRODUCT OWNER</p>
              <a href="https://github.com/Hkelly-llyx" className="view-profile">view profile ➔</a>
            </div>

            <div className="dev-card">
              <div className="avatar-circle avatar-ouro">KN</div>
              <h3>Keilane N.</h3>
              <p className="dev-role">SCRUM MASTER</p>
              <a href="https://github.com/keilane23" className="view-profile">view profile ➔</a>
            </div>

            <div className="dev-card">
              <div className="avatar-circle avatar-vinho">EV</div>
              <h3>Emanuele V.</h3>
              <p className="dev-role">DEVELOPER</p>
              <a href="https://github.com/m4nuh-byt" className="view-profile">view profile ➔</a>
            </div>

            <div className="dev-card">
              <div className="avatar-circle avatar-ouro">FG</div>
              <h3>Francilene G.</h3>
              <p className="dev-role">DEVELOPER</p>
              <a href="https://github.com/guimaraesfrancilene" className="view-profile">view profile ➔</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <h2 className="footer-logo">SOCIEX</h2>
            <p>A ponte entre a universidade e a sociedade. Transformamos necessidades reais em projetos acadêmicos.</p>
          </div>

          <div className="footer-col">
            <h3>Explore </h3>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Explorar Projetos</a></li>
              <li><a href="sobre.html">Sobre Nós</a></li>
              <li><a href="#">Publicar Desafio</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Equipe </h3>
            <ul>
              <li><a href="#">➔ Hanna Kelly</a></li>
              <li><a href="#">➔ Keilane Nogueira</a></li>
              <li><a href="#">➔ Emanuele Vitória</a></li>
              <li><a href="#">➔ Francilene Guimarães</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contato </h3>
            <p className="contact-label space-top">Onde estamos:</p>
            <p className="address-text">IFPI - Campus Floriano<br />TADS</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SOCIEX - Instituto Federal do Piauí. Todos os direitos reservados.</p>
          <button onClick={scrollToTop} className="btn-back-to-top">
            Voltar ao topo ➔
          </button>
        </div>
      </footer>
    </>
  );
}