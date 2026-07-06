import React, { useState } from "react";
import "./VisaoGeralProjeto.css";

const PROJETOS = [
  { id: 1, nome: "Gestão de Rebanho", categoria: "Agropecuária", data: "25Nov/2025", status: "pendente" },
  { id: 2, nome: "Fluxo de Pacientes", categoria: "Saúde", data: "25Nov/2025", status: "pendente" },
  { id: 3, nome: "Museu Virtual", categoria: "Turismo & Cultura", data: "25Nov/2025", status: "pendente" },
  { id: 4, nome: "Culturafest", categoria: "Turismo & Cultura", data: "25Nov/2025", status: "pendente" },
  { id: 5, nome: "Med Connect", categoria: "Saúde", data: "25Nov/2025", status: "pendente" },
  { id: 6, nome: "Educa App", categoria: "Educação", data: "25Nov/2025", status: "pendente" },
  { id: 7, nome: "Pecuária+", categoria: "Agropecuária", data: "25Nov/2025", status: "pendente" },
  { id: 8, nome: "Smart Study", categoria: "Educação", data: "25Nov/2025", status: "pendente" },
];

const FILTROS = ["Todos", "Aceitos", "Recusados"];

export default function VisaoGeralProjetos() {
  const [busca, setBusca] = useState("");
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const [projetos, setProjetos] = useState(PROJETOS);

  const handleAceitar = (id) => {
    setProjetos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "aceito" } : p))
    );
  };

  const handleRecusar = (id) => {
    setProjetos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "recusado" } : p))
    );
  };

  const projetosFiltrados = projetos.filter((p) => {
    const correspondeBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
    const correspondeFiltro =
      filtroAtivo === "Todos" ||
      (filtroAtivo === "Aceitos" && p.status === "aceito") ||
      (filtroAtivo === "Recusados" && p.status === "recusado");
    return correspondeBusca && correspondeFiltro;
  });

  const totalPendentes = projetos.filter((p) => p.status === "pendente").length;

  return (
    <div className="vgp-page">
      <header className="vgp-header">
        <div className="vgp-header-top">
          <div className="vgp-brand">
            <span className="menulateral.png" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  fill="currentColor"
                  d="M12 2l2.6 4.6L20 8l-4 3.7.9 5.3L12 14.8 7.1 17l.9-5.3L4 8l5.4-1.4L12 2z"
                />
              </svg>
            </span>
            <div>
              <h1>Visão Geral de Projetos</h1>
              <p className="vgp-subtitulo">({totalPendentes} pendentes)</p>
            </div>
          </div>

          <nav className="vgp-nav">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre nós</a>
          </nav>
        </div>

        <div className="vgp-controles">
          <div className="vgp-busca">
            <svg
              className="vgp-busca-icone"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM21 21l-4.35-4.35"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar por nome"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              aria-label="Buscar projeto por nome"
            />
          </div>

          <div className="vgp-select">
            <select aria-label="Filtrar por categoria" defaultValue="">
              <option value="" disabled>
                CATEGORIA
              </option>
              <option value="agropecuaria">Agropecuária</option>
              <option value="saude">Saúde</option>
              <option value="turismo">Turismo &amp; Cultura</option>
              <option value="educacao">Educação</option>
            </select>
            <svg
              className="vgp-select-icone"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9l6 6 6-6"
              />
            </svg>
          </div>

          <div className="vgp-filtros" role="group" aria-label="Filtrar por status">
            {FILTROS.map((filtro) => (
              <button
                key={filtro}
                type="button"
                className={`vgp-filtro-btn ${
                  filtroAtivo === filtro ? "vgp-filtro-btn--ativo" : ""
                }`}
                onClick={() => setFiltroAtivo(filtro)}
              >
                {filtro}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="vgp-conteudo">
        <h2 className="vgp-status-titulo">STATUS</h2>

        <div className="vgp-status-scroll">
          <div className="vgp-grid">
            {projetosFiltrados.map((projeto) => (
              <article className="vgp-card" key={projeto.id}>
                <div className="vgp-card-corpo">
                  <h3>{projeto.nome}</h3>
                  <span className="vgp-tag">{projeto.categoria}</span>
                  <p className="vgp-data">{projeto.data}</p>
                </div>

                <div className="vgp-card-rodape">
                  <button type="button" className="vgp-visualizar-btn">
                    VISUALIZAR
                  </button>

                  <div className="vgp-acoes">
                    <button
                      type="button"
                      className={`vgp-acao vgp-acao--aceitar ${
                        projeto.status === "aceito" ? "vgp-acao--selecionada" : ""
                      }`}
                      onClick={() => handleAceitar(projeto.id)}
                      aria-label={`Aceitar projeto ${projeto.nome}`}
                      aria-pressed={projeto.status === "aceito"}
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className={`vgp-acao vgp-acao--recusar ${
                        projeto.status === "recusado" ? "vgp-acao--selecionada" : ""
                      }`}
                      onClick={() => handleRecusar(projeto.id)}
                      aria-label={`Recusar projeto ${projeto.nome}`}
                      aria-pressed={projeto.status === "recusado"}
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6l12 12M18 6L6 18"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {projetosFiltrados.length === 0 && (
              <p className="vgp-vazio">Nenhum projeto encontrado para esse filtro.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}