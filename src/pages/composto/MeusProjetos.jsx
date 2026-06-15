import React, { useState } from 'react';
import './MeusProjetos.css';

// Dados fictícios para simular os projetos aceitos pelos alunos
const initialProjects = [
  {
    id: 1,
    titulo: "Sistema de Controle de Estoque",
    aluno: "Ana Silva",
    curso: "Análise e Desenvolvimento de Sistemas",
    status: "Em Andamento",
    progresso: 65,
    dataAceite: "12/05/2026"
  },
  {
    id: 2,
    titulo: "Aplicativo de Entrega Local",
    aluno: "Carlos Eduardo",
    curso: "Engenharia de Software",
    status: "Concluído",
    progresso: 100,
    dataAceite: "01/04/2026"
  },
  {
    id: 3,
    titulo: "Plataforma de E-learning",
    aluno: "Mariana Costa",
    curso: "Ciência da Computação",
    status: "Atrasado",
    progresso: 30,
    dataAceite: "20/04/2026"
  },
  {
    id: 4,
    titulo: "Site Institucional ONG",
    aluno: "Lucas Oliveira",
    curso: "Sistemas de Informação",
    status: "Em Andamento",
    progresso: 45,
    dataAceite: "02/06/2026"
  }
];

export default function MeusProjetos() {
  const [projetos] = useState(initialProjects);
  const [busca, setBusca] = useState('');

  // Filtra os projetos pelo título ou pelo nome do aluno
  const projetosFiltrados = projetos.filter(proj => 
    proj.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    proj.aluno.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      {/* Barra Lateral / Sidebar Opcional */}
      <aside className="sidebar">
        <div className="logo">DevFlow</div>
        <nav className="menu">
          <a href="#dashboard" className="active">Projetos Aceitos</a>
          <a href="#config">Configurações</a>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <header className="main-header">
          <div>
            <h1>Visualização de Projetos</h1>
            <p className="subtitle">Acompanhe os projetos que foram aceitos pelos alunos</p>
          </div>
          <div className="user-profile">
            <span className="user-name">Prof. Administrador</span>
            <div className="avatar">PA</div>
          </div>
        </header>

        {/* Barra de Pesquisa e Filtros */}
        <div className="filter-bar">
          <input 
            type="text" 
            placeholder="Buscar por projeto ou aluno..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="search-input"
          />
          <div className="stats-badge">
            Total vinculados: <strong>{projetosFiltrados.length}</strong>
          </div>
        </div>

        {/* Grid de Cards de Projetos */}
        <div className="projects-grid">
          {projetosFiltrados.map((projeto) => (
            <div key={projeto.id} className="project-card">
              <div className="card-header">
                <span className={`status-badge ${projeto.status.toLowerCase().replace(" ", "-")}`}>
                  {projeto.status}
                </span>
                <span className="date-badge">{projeto.dataAceite}</span>
              </div>
              
              <h3 className="project-title">{projeto.titulo}</h3>
              
              <div className="student-info">
                <p className="student-name"><strong>Aluno:</strong> {projeto.aluno}</p>
                <p className="student-course">{projeto.curso}</p>
              </div>

              <div className="progress-container">
                <div className="progress-text">
                  <span>Progresso</span>
                  <span>{projeto.progresso}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${projeto.progresso}%` }}
                  ></div>
                </div>
              </div>

              <div className="card-footer">
                <button className="btn-details">Ver Detalhes</button>
              </div>
            </div>
          ))}

          {projetosFiltrados.length === 0 && (
            <p className="no-results">Nenhum projeto ou aluno encontrado.</p>
          )}
        </div>
      </main>
    </div>
  );
}