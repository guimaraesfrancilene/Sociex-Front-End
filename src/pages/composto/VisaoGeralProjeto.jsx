import { useState } from "react";
import "./VisaoGeralProjeto.css";

const projetosData = [
  { id: 1, titulo: "Gestão de Rebanho", categoria: "Agropecuária", data: "25Nov/2025" },
  { id: 2, titulo: "Fluxo de Pacientes", categoria: "Saúde", data: "25Nov/2025" },
  { id: 3, titulo: "Museu Virtual", categoria: "Turismo & Cultura", data: "25Nov/2025" },
  { id: 4, titulo: "Culturafest", categoria: "Turismo & Cultura", data: "25Nov/2025" },
  { id: 5, titulo: "Med Connect", categoria: "Saúde", data: "25Nov/2025" },
  { id: 6, titulo: "Educa App", categoria: "Educação", data: "25Nov/2025" },
  { id: 7, titulo: "Pecuária+", categoria: "Agropecuária", data: "25Nov/2025" },
  { id: 8, titulo: "Smart Study", categoria: "Educação", data: "25Nov/2025" },
];

const IconeLogo = () => (
  <div className="logo-icon">
    <div></div><div></div>
    <div></div><div></div>
    <div></div><div></div><div></div>
  </div>
);

const IconeLupa = () => (
  <svg fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);


const IconeCheck = () => (
  <svg fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconeX = () => (
  <svg fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function VisaoGeralProjetos() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const [busca, setBusca] = useState("");

  const projetosFiltrados = projetosData.filter(p => 
    p.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="visao-container">
      <div className="topbar">
        <div className="header-top">
          <div className="logo-title">
            <IconeLogo />
            <div>
              <div className="titulo">Visão Geral de Projetos</div>
              <div className="subtitulo">(10 pendentes)</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#">Início</a>
            <a href="#">Sobre nós</a>
          </nav>
        </div>

        <div className="filtros">
          <div className="busca">
            <div className="icon-lupa"><IconeLupa /></div>
            <input 
              type="text" 
              placeholder="BUSCAR por nome."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          
          <select className="select-cat">
            <option>CATEGORIA</option>
            <option>Saúde</option>
            <option>Educação</option>
            <option>Agropecuária</option>
            <option>Turismo & Cultura</option>
          </select>

          {["Todos", "Aceitos", "Recusados"].map(f => (
            <button 
              key={f}
              className={`btn-filtro ${filtroAtivo === f ? "ativo" : ""}`}
              onClick={() => setFiltroAtivo(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="conteudo">
        <div className="label-status">STATUS</div>
        <div className="grid">
          {projetosFiltrados.map(proj => (
            <div className="card" key={proj.id}>
              <h3>{proj.titulo}</h3>
              <span className="tag">{proj.categoria}</span>
              <div className="data">{proj.data}</div>
              <div className="acoes">
                <button className="btn-visualizar">VISUALIZAR</button>
                <div className="icone-acao verde"><IconeCheck /></div>
                <div className="icone-acao vermelho"><IconeX /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
