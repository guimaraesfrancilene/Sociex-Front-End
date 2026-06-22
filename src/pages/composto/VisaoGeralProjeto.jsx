import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './VisaoGeralProjeto.css';

const projetosIniciais = [
  { id: 1, nome: 'Gestão de Rebanho', categoria: 'Agropecuária', data: '25/Nov/2025' },
  { id: 2, nome: 'Fluxo de Pacientes', categoria: 'Saúde', data: '25/Nov/2025' },
  { id: 3, nome: 'Museu Virtual', categoria: 'Turismo & Cultura', data: '25/Nov/2025' },
  { id: 4, nome: 'Culturafest', categoria: 'Turismo & Cultura', data: '25/Nov/2025' },
  { id: 5, nome: 'Med Connect', categoria: 'Saúde', data: '25/Nov/2025' },
  { id: 6, nome: 'Educa App', categoria: 'Educação', data: '25/Nov/2025' },
  { id: 7, nome: 'Pecuária+', categoria: 'Agropecuária', data: '25/Nov/2025' },
  { id: 8, nome: 'Smart Study', categoria: 'Educação', data: '25/Nov/2025' },
];

export default function VisaoGeralProjetos() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('Todos');
  const navigate = useNavigate();

  const projetosFiltrados = projetosIniciais.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="vgp-page">
      <Sidebar
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
        nomeUsuario="Nome do Usuário"
        tipoUsuario="Estudante"
      />

      {/* HEADER */}
      <header className="vgp-header">
        <div className="vgp-header-left">
          <button className="vgp-logo-btn" onClick={() => setMenuAberto(true)} aria-label="Abrir menu">
            <img src="/src/assets/menulateral.png" alt="Menu" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          </button>
          <div className="vgp-brand-group">
            <h1 className="vgp-titulo">Visão Geral de Projetos</h1>
            <span className="vgp-subtitulo">(10 pendentes)</span>
          </div>
        </div>
        <nav className="vgp-nav">
          <span className="vgp-nav-link" onClick={() => navigate('/universitario/dashboard')}>Início</span>
          <span className="vgp-nav-link vgp-nav-link--ativo" onClick={() => navigate('/sobre')}>Sobre nós</span>
        </nav>
      </header>

      {/* FILTROS */}
      <section className="vgp-filtros">
        <div className="vgp-search-box">
          <span className="vgp-search-icon">🔍</span>
          <input
            type="text"
            placeholder="BUSCAR por nome."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="vgp-search-input"
          />
          <span className="vgp-camera-icon">📷</span>
        </div>

        <div className="vgp-select-wrap">
          <select className="vgp-select">
            <option value="">CATEGORIA</option>
            <option value="agro">Agropecuária</option>
            <option value="saude">Saúde</option>
            <option value="turismo">Turismo & Cultura</option>
            <option value="educacao">Educação</option>
          </select>
        </div>

        <div className="vgp-status-btns">
          {['Todos', 'Aceitos', 'Recusados'].map((s) => (
            <button
              key={s}
              className={`vgp-btn-status ${filtroStatus === s ? 'vgp-btn-status--ativo' : 'vgp-btn-status--outline'}`}
              onClick={() => setFiltroStatus(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      <span className="vgp-secao-label">STATUS</span>

      {/* GRID */}
      <main className="vgp-grid">
        {projetosFiltrados.map((projeto) => (
          <div key={projeto.id} className="vgp-card">
            <h3 className="vgp-card-titulo">{projeto.nome}</h3>
            <span className="vgp-card-tag">{projeto.categoria}</span>
            <span className="vgp-card-data">{projeto.data}</span>
            <div className="vgp-card-footer">
              <button className="vgp-btn-visualizar">VISUALIZAR</button>
              <div className="vgp-action-icons">
                <button className="vgp-icon-btn vgp-check-btn">✓</button>
                <button className="vgp-icon-btn vgp-cross-btn">✕</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}