import React from 'react';
import './VisualizarProjeto.css';
import logo from '../../assets/logo.png';
import iconeSaude from '../../assets/saude.png';

const VisualizarProjeto = () => {
  return (
    <div className="telemedicina-page">
      {/* Barra de Navegação Superior */}
      <header className="sociex-header">
        <div className="sociex-logo-container">
          <img src={logo} alt="SOCIEX Logo" className="sociex-logo-img" />
        </div>
        <a href="#voltar" className="header-link">Voltar Entrar</a>
      </header>

      {/* Conteúdo Central */}
      <main className="sociex-main-container">
        <a href="#lista" className="sociex-btn-back">
          ← Voltar para a lista de demandas
        </a>

        <div className="sociex-card">
          {/* Cabeçalho do Card (Tags) */}
          <div className="sociex-card-header">
            <span className="sociex-tag-category">
              <img src={iconeSaude} alt="Ícone Saúde" className="sociex-icon-img" /> Saúde
            </span>
            <span className="sociex-tag-status">⚙️ Em Resolução</span>
          </div>

          {/* Título Principal */}
          <h1 className="sociex-card-title">Iniciativa de Telemedicina Rural</h1>

          {/* Descrição do Problema */}
          <div className="sociex-problem-section">
            <p>
              <strong>Problema:</strong> Comunidades isoladas no interior do Brasil sofrem com a falta de médicos especialistas e precisam se deslocar por horas para atendimento básico.
            </p>
          </div>

          <hr className="sociex-divider" />

          {/* Grid de Duas Colunas (Lado a Lado) */}
          <div className="sociex-card-grid">
            
            {/* Coluna da Esquerda */}
            <div className="sociex-grid-column">
              <div className="sociex-info-block">
                <h3>🎯 Objetivo Esperado da Solução</h3>
                <p>
                  Desenvolver um sistema de triagem e consultas online estável que funcione mesmo com conexões de baixa qualidade.
                </p>
              </div>

              <div className="sociex-info-block">
                <h3>📋 Status do Andamento</h3>
                <div className="sociex-highlight-box">
                  <p>
                    <strong>Fase 2:</strong> Instalação de antenas de internet via satélite e triagem de demandas nas primeiras 5 vilas.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna da Direita */}
            <div className="sociex-grid-column">
              <div className="sociex-info-block">
                <h3>👥 População Afetada / Público-Alvo</h3>
                <p>
                  Moradores de comunidades ribeirinhas e assentamentos rurais sem postos de atendimento médico fixo.
                </p>
              </div>

              <div className="sociex-info-block">
                <h3>💼 Responsáveis pelo Envio / Triagem</h3>
                <p className="sociex-relator">
                  <strong>Relator:</strong> Dra. Helena Souza (Infectologista)
                </p>
                <ul className="sociex-team-list">
                  <li>Dra. Helena Souza</li>
                  <li>Dr. Marcos Freire (Clínico Geral)</li>
                  <li>Amanda Costa (Tecnologia/Infra)</li>
                </ul>
              </div>
            </div>

          </div> {/* Fim da Grid */}
        </div>
      </main>
    </div>
  );
};

export default VisualizarProjeto;