import React, { useState } from 'react';
import './VisaoGeralProjetos.css';

// Dados fictícios baseados na imagem para renderizar os cards dinamicamente
const projetosIniciais = [
  { id: 1, nome: 'Gestão de Rebanho', categoria: 'Agropecuária', data: '25/Nov/2025' },
  { id: 2, nome: 'Fluxo de Pacientes', categoria: 'Saúde', data: '25/Nov/2025' },
  { id: 3, nome: 'Museu Virtual', categoria: 'Turismo & Cultura', data: '25/Nov/2025' },
  { id: 4, nome: 'Culturafest', categoria: 'Turismo & Cultura', data: '25/Nov/2025' },
  { id: 5, nome: 'Med Connect', category: 'Saúde', data: '25/Nov/2025' },
  { id: 6, nome: 'Educa App', categoria: 'Educação', data: '25/Nov/2025' },
  { id: 7, nome: 'Pecuária+', categoria: 'Agropecuária', data: '25/Nov/2025' },
  { id: 8, nome: 'Smart Study', categoria: 'Educação', data: '25/Nov/2025' },
];

export default function VisaoGeralProjetos() {
  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('Todos');

  return (
    <div className="projetos-page">
      {/* BARRA DE NAVEGAÇÃO SUPERIOR */}
      <header className="navbar-projetos">
        <div className="navbar-left">
          {/* Ícone pequeno do favicón/logo hexagonal */}
          <div className="mini-logo-hex"></div>
          <div className="brand-title-group">
            <h1 className="main-title">Visão Geral de Projetos</h1>
            <span className="subtitle-pending">(10 pendentes)</span>
          </div>
        </div>
        <nav className="navbar-right-links">
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#sobre" className="nav-link active-link">Sobre nós</a>
        </nav>
      </header>

      {/* BARRA DE FILTROS E PESQUISA */}
      <section className="filter-bar">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="BUSCAR por nome." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="search-input"
          />
          <span className="camera-icon">📷</span>
        </div>

        <div className="select-container">
          <select className="category-select">
            <option value="">CATEGORIA</option>
            <option value="agro">Agropecuária</option>
            <option value="saude">Saúde</option>
            <option value="turismo">Turismo & Cultura</option>
            <option value="educacao">Educação</option>
          </select>
        </div>

        <div className="status-buttons">
          <button 
            className={`btn-status ${filtroStatus === 'Todos' ? 'active' : ''}`}
            onClick={() => setFiltroStatus('Todos')}
          >
            Todos
          </button>
          <button 
            className={`btn-status btn-outline ${filtroStatus === 'Aceitos' ? 'active' : ''}`}
            onClick={() => setFiltroStatus('Aceitos')}
          >
            Aceitos
          </button>
          <button 
            className={`btn-status btn-outline ${filtroStatus === 'Recusados' ? 'active' : ''}`}
            onClick={() => setFiltroStatus('Recusados')}
          >
            Recusados
          </button>
        </div>
      </section>

      <span className="status-indicator-label">STATUS</span>

      {/* GRADE DE CARDS DOS PROJETOS */}
      <main className="projects-grid">
        {projetosIniciais.map((projeto) => (
          <div key={projeto.id} className="project-card">
            <h3 className="project-card-title">{projeto.nome}</h3>
            <span className="project-tag">{projeto.categoria}</span>
            <span className="project-date">{projeto.data}</span>
            
            <div className="project-card-footer">
              <button className="btn-visualizar">VISUALIZAR</button>
              <div className="action-icons">
                <button className="icon-btn check-btn">✓</button>
                <button className="icon-btn cross-btn">✕</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}