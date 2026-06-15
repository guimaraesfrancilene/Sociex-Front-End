import React from 'react';
import './VisualizarProjeto.css';

// Ícones simulados em SVG para manter o projeto independente de pacotes externos
const HealthIcon = () => (
  <svg className="icon-health" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#dc3545"/>
    <path d="M12 7v6M9 10h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function DemandPage() {
  return (
    <div className="sociex-container">
      {/* Topbar / Header */}
      <header className="sociex-header">
        <div className="header-logo">
          <div className="logo-icon">
            <span>🎓</span>
            <span>🏛️</span>
            <span>💼</span>
          </div>
          <span className="logo-text">SOCIEX</span>
        </div>
        <div className="header-actions">
          <button className="btn-back-top">Voltar</button>
          <button className="btn-enter">Entrar</button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="sociex-content">
        <a href="#voltar" className="link-back">
          &larr; Voltar para a lista de demandas
        </a>

        {/* Card de Detalhes da Demanda */}
        <div className="demand-card">
          
          {/* Cabeçalho do Card */}
          <div className="card-header">
            <div className="health-badge-wrapper">
              <HealthIcon />
            </div>
            <div className="card-header-titles">
              <span className="category-label">Saúde</span>
              <span className="status-badge">⚙️ Em Resolução</span>
            </div>
          </div>

          <h1 className="demand-title">Iniciativa de Telemedicina Rural</h1>
          
          <p className="demand-description">
            <strong>Problema:</strong> Comunidades isoladas no interior do Brasil sofrem com a falta de médicos especialistas e precisam se deslocar por horas para atendimento básico.
          </p>

          <hr className="divider" />

          {/* Grid de Informações */}
          <div className="info-grid">
            
            {/* Coluna Esquerda: Objetivo */}
            <div className="info-section">
              <h3 className="section-title">
                <span className="title-icon">🎯</span> Objetivo Esperado da Solução
              </h3>
              <p className="section-text">
                Desenvolver um sistema de triagem e consultas online estável que funcione mesmo com conexões de baixa qualidade.
              </p>
            </div>

            {/* Coluna Direita: População Afetada */}
            <div className="info-section">
              <h3 className="section-title">
                <span className="title-icon">👥</span> População Afetada / Público-Alvo
              </h3>
              <p className="section-text">
                Moradores de comunidades ribeirinhas e assentamentos rurais sem postos de atendimento médico fixo.
              </p>
            </div>

            {/* Coluna Esquerda: Status do Andamento */}
            <div className="info-section">
              <h3 className="section-title">
                <span className="title-icon">☑️</span> Status do Andamento
              </h3>
              <div className="status-phase-box">
                <strong>Fase 2:</strong> Instalação de antenas de internet via satélite e triagem de demandas nas primeiras 5 vilas.
              </div>
            </div>

            {/* Coluna Direita: Responsáveis */}
            <div className="info-section">
              <h3 className="section-title">
                <span className="title-icon">💼</span> Responsáveis pelo Envio / Triagem
              </h3>
              <div className="responsibles-list">
                <p className="relator">
                  <strong>Relator:</strong> Dra. Helena Souza (Infectologista)
                </p>
                <ul>
                  <li>• Dra. Helena Souza</li>
                  <li>• Dr. Marcos Freire (Clínico Geral)</li>
                  <li>• Amanda Costa (Tecnologia/Infra)</li>
                </ul>
              </div>
            </div>

          </div> {/* Fim da Grid */}
        </div> {/* Fim do Card */}
      </main>
    </div>
  );
}