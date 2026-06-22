import React from 'react';
import './VisualizarProjeto.css'; 
import logo from './logo-vazada (1).png'; 
import iconeSaude from './assets/saude.png'; // Importando a imagem da saúde do caminho indicado

export default function VisualizarProjeto() {
  return (
    <div className="container-page">
      {/* Navbar Superior */}
      <header className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Logo SOCIEX" className="logo-img" />
          <span className="logo-text">SOCIEX</span>
        </div>
        <div className="nav-actions">
          <button className="btn-back-text">Voltar</button>
          <button className="btn-enter">Entrar</button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <a href="#back" className="link-back-list">
          &larr; Voltar para a lista de demandas
        </a>

        {/* Card Principal */}
        <section className="card">
          <div className="card-header">
            {/* Nova estrutura: Imagem da saúde ao lado do texto */}
            <div className="category-block">
              <img src={iconeSaude} alt="Ícone Saúde" className="health-icon-img" />
              <div className="badge-wrapper">
                <span className="category-tag">Saúde</span>
                <span className="status-tag">⚙️ Em Resolução</span>
              </div>
            </div>
          </div>

          <h1 className="main-title">Iniciativa de Telemedicina Rural</h1>
          
          <p className="problem-container">
            <strong>Problema:</strong> Comunidades isoladas no interior do Brasil sofrem com a falta de médicos especialistas e precisam se deslocar por horas para atendimento básico.
          </p>

          <hr className="divider" />

          {/* Informações em Duas Colunas */}
          <div className="grid-info">
            
            {/* Coluna Esquerda */}
            <div className="grid-column">
              <div className="section-wrapper">
                <h3 className="section-title">🎯 Objetivo Esperado da Solução</h3>
                <p className="section-description">
                  Desenvolver um sistema de triagem e consultas online estável que funcione mesmo com conexões de baixa qualidade.
                </p>
              </div>

              <div className="section-wrapper">
                <h3 className="section-title">📈 Status do Andamento</h3>
                <div className="phase-alert-box">
                  <strong>Fase 2:</strong> Instalação de antenas de internet via satélite e triagem de demandas nas primeiras 5 vilas.
                </div>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="grid-column">
              <div className="section-wrapper">
                <h3 className="section-title">👥 População Afetada / Público-Alvo</h3>
                <p className="section-description">
                  Moradores de comunidades ribeirinhas e assentamentos rurais sem postos de atendimento médico fixo.
                </p>
              </div>

              <div className="section-wrapper">
                <h3 className="section-title">💼 Responsáveis pelo Envio / Triagem</h3>
                <div className="team-container">
                  <p className="team-relator"><strong>Relator:</strong> Dra. Helena Souza (Infectologista)</p>
                  <ul className="team-list">
                    <li>Dra. Helena Souza</li>
                    <li>Dr. Marcos Freire (Clínico Geral)</li>
                    <li>Amanda Costa (Tecnologia/Infra)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}