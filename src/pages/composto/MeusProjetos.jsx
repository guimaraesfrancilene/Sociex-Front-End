import React, { useState } from "react";
import "./MeusProjetos.css";

const meusProjetos = [
  { id: 1, titulo: "App de Agendamento UFPI", categoria: "Educação", status: "Em análise", data: "12Out/2025", progresso: 60 },
  { id: 2, titulo: "Sistema de Irrigação", categoria: "Agropecuária", status: "Aprovado", data: "05Out/2025", progresso: 100 },
  { id: 3, titulo: "Portal do Turista", categoria: "Turismo & Cultura", status: "Em andamento", data: "20Set/2025", progresso: 35 },
  { id: 4, titulo: "Chatbot Saúde", categoria: "Saúde", status: "Reprovado", data: "10Set/2025", progresso: 0 },
];

export default function MeusProjetos() {
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("Todos");

  const projetosFiltrados = meusProjetos.filter(p => {
    const matchBusca = p.titulo.toLowerCase().includes(busca.toLowerCase());
    const matchStatus = filtroStatus === "Todos" || p.status === filtroStatus;
    return matchBusca && matchStatus;
  });

  const getStatusClass = (status) => {
    if (status === "Aprovado") return "status-aprovado";
    if (status === "Em andamento") return "status-andamento";
    if (status === "Em análise") return "status-analise";
    return "status-reprovado";
  };

  return (
    <div className="meus-container">
      <div className="topbar">
        <div className="header-top">
          <div className="logo-title">
            <div className="logo-icon">
              {[...Array(9)].map((_, i) => <div key={i} />)}
            </div>
            <div>
              <div className="titulo">Meus Projetos</div>
              <div className="subtitulo">Gerencie e acompanhe suas submissões</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#">Início</a>
            <a href="#">Sobre nós</a>
          </nav>
        </div>

        <div className="filtros">
          <div className="busca">
            <svg className="icon-lupa" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input 
              type="text" 
              placeholder="Buscar projeto por nome" 
              value={busca}
              onChange={e => setBusca(e.target.value)}
            />
          </div>
          <select className="select-cat" value={filtroStatus} onChange={e => setFiltroStatus(e.target.value)}>
            <option>Todos</option>
            <option>Em análise</option>
            <option>Em andamento</option>
            <option>Aprovado</option>
            <option>Reprovado</option>
          </select>
          <button className="btn-novo">+ Novo Projeto</button>
        </div>
      </div>

      <div className="conteudo">
        <div className="label-status">Lista de Projetos</div>
        <div className="grid">
          {projetosFiltrados.map(p => (
            <div className="card" key={p.id}>
              <div className="card-header">
                <h3>{p.titulo}</h3>
                <span className={`status-tag ${getStatusClass(p.status)}`}>{p.status}</span>
              </div>
              <span className="tag">{p.categoria}</span>
              <div className="data">Enviado em: {p.data}</div>
              
              <div className="progresso">
                <div className="progresso-label">
                  <span>Progresso</span>
                  <span>{p.progresso}%</span>
                </div>
                <div className="progresso-bar">
                  <div className="progresso-fill" style={{ width: `${p.progresso}%` }}></div>
                </div>
              </div>

              <div className="acoes">
                <button className="btn-visualizar">Detalhes</button>
                <button className="btn-editar">Editar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}